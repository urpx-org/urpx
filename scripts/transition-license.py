#!/usr/bin/env python3
"""
URPX License Transition Script

Rewrites SPDX-License-Identifier values in inline headers and .license
sidecars according to the file-classification manifest embedded in
TRANSITION.md.

Preview mode is the default. Pass --apply to modify files. Pass
--download-licenses to fetch W3C and CDLA license texts into LICENSES/
via the reuse CLI.

Trigger: Working Group Draft acceptance of URPX materials.
See TRANSITION.md for the full rationale and the manifest itself.
"""

from __future__ import annotations

import argparse
import fnmatch
import os
import re
import subprocess
import sys
from pathlib import Path

try:
    import tomllib
except ImportError:
    try:
        import tomli as tomllib  # type: ignore
    except ImportError:
        sys.stderr.write(
            "This script needs tomllib (Python 3.11+) or tomli.\n"
            "Install tomli with: pip install tomli\n"
        )
        sys.exit(2)


REPO_ROOT = Path(__file__).resolve().parent.parent
TRANSITION_MD = REPO_ROOT / "TRANSITION.md"
REUSE_TOML = REPO_ROOT / "REUSE.toml"
LICENSES_DIR = REPO_ROOT / "LICENSES"

SPDX_LICENSE_RE = re.compile(
    r"(?P<prefix>SPDX-License-Identifier:\s*)(?P<value>[\w.][\w.-]*)",
)


def extract_manifest(transition_md_path: Path) -> dict:
    """Read the ```toml ... ``` block from TRANSITION.md and parse it."""
    text = transition_md_path.read_text(encoding="utf-8")
    match = re.search(r"```toml\s*\n(?P<body>.*?)\n```", text, re.DOTALL)
    if not match:
        sys.stderr.write(
            f"No ```toml fenced block found in {transition_md_path}\n"
        )
        sys.exit(1)
    return tomllib.loads(match.group("body"))


def expand_globs(paths: list[str], repo_root: Path) -> list[Path]:
    """Resolve glob patterns relative to repo_root. Skip non-existent."""
    results: list[Path] = []
    for pattern in paths:
        for p in repo_root.glob(pattern):
            if p.is_file():
                results.append(p)
    return sorted(set(results))


def find_sidecar(file_path: Path) -> Path | None:
    """Return the .license sidecar path for a file, if present."""
    sidecar = file_path.with_suffix(file_path.suffix + ".license")
    return sidecar if sidecar.exists() else None


def rewrite_spdx_identifier(
    content: str, new_license: str
) -> tuple[str, int]:
    """Rewrite every SPDX-License-Identifier line to new_license.

    Returns (new_content, n_replacements).
    """
    n = 0

    def _sub(m: re.Match) -> str:
        nonlocal n
        n += 1
        return f"{m.group('prefix')}{new_license}"

    new = SPDX_LICENSE_RE.sub(_sub, content)
    return new, n


def transition_file(
    path: Path, new_license: str, apply: bool
) -> tuple[str, int]:
    """Transition a single file's header or its sidecar. Returns (status, n)."""
    sidecar = find_sidecar(path)
    target = sidecar if sidecar else path
    try:
        text = target.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError):
        return (f"skipped (cannot read {target})", 0)

    new_text, n = rewrite_spdx_identifier(text, new_license)
    if n == 0:
        return (f"skipped (no SPDX line in {target.name})", 0)
    if new_text == text:
        return (f"no-change ({target.name})", 0)

    if apply:
        target.write_text(new_text, encoding="utf-8")
        return (f"updated: {target.relative_to(REPO_ROOT)}", n)
    return (f"would update: {target.relative_to(REPO_ROOT)}", n)


def download_licenses() -> None:
    """Invoke reuse to fetch W3C and CDLA-Permissive-2.0 texts."""
    for lic in ("W3C-20150513", "CDLA-Permissive-2.0"):
        print(f"  Fetching {lic} ...")
        subprocess.run(
            ["reuse", "download", lic], cwd=REPO_ROOT, check=False
        )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Modify files. Without this, runs in preview mode.",
    )
    parser.add_argument(
        "--download-licenses",
        action="store_true",
        help="Fetch W3C and CDLA license texts into LICENSES/.",
    )
    args = parser.parse_args()

    mode = "APPLY" if args.apply else "PREVIEW"
    print(f"URPX License Transition — mode: {mode}")
    print(f"Manifest: {TRANSITION_MD}")
    print()

    if args.download_licenses:
        print("Downloading new license texts...")
        download_licenses()
        print()

    manifest = extract_manifest(TRANSITION_MD)
    categories = manifest.get("category", [])
    if not categories:
        sys.stderr.write(
            "No [[category]] entries found in manifest. Abort.\n"
        )
        return 1

    summary_counts: dict[str, int] = {}
    unchanged_categories: list[str] = []

    for cat in categories:
        name = cat.get("name", "<unnamed>")
        current = cat.get("current_license", "<unknown>")
        future = cat.get("future_license", "<unknown>")

        if current == future:
            unchanged_categories.append(name)
            continue

        print(f"=== Category: {name} ===")
        print(f"    Current: {current}")
        print(f"    Future:  {future}")
        print()

        files = expand_globs(cat.get("paths", []), REPO_ROOT)
        if not files:
            print("    (no files matched)")
            print()
            continue

        count = 0
        for f in files:
            status, n = transition_file(f, future, args.apply)
            print(f"    {status}")
            if n > 0:
                count += 1
        summary_counts[name] = count
        print()

    print("=== Unchanged (current == future) ===")
    for n in unchanged_categories:
        print(f"    {n}")
    print()

    print("=== Summary ===")
    total = 0
    for cat_name, n in summary_counts.items():
        print(f"    {cat_name:20}  {n:4} files {'updated' if args.apply else 'would be updated'}")
        total += n
    print(f"    {'TOTAL':20}  {total:4} files")
    print()

    if not args.apply:
        print("Preview only. Run with --apply to actually modify files.")
        print("Also pass --download-licenses if LICENSES/ does not yet")
        print("contain W3C-20150513.txt and CDLA-Permissive-2.0.txt.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
