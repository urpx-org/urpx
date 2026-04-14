(function () {
  const body = document.body;
  const mdPath = body.getAttribute("data-md");
  const mount = document.getElementById("content");
  const status = document.getElementById("status");
  const embedded = document.getElementById("md-source");
  const embeddedB64 = document.getElementById("md-source-b64");

  function setStatus(msg) {
    if (status) {
      status.textContent = msg;
    }
  }

  if (!mount) {
    setStatus("Missing content mount.");
    return;
  }

  function renderMarkdown(md) {
    const html = window.marked.parse(md);
    mount.innerHTML = html;

    const codeBlocks = mount.querySelectorAll("pre > code.language-mermaid");
    codeBlocks.forEach((code) => {
      const pre = code.parentElement;
      const container = document.createElement("div");
      container.className = "mermaid";
      container.textContent = code.textContent;
      pre.replaceWith(container);
    });

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "default"
    });

    return window.mermaid.run({ querySelector: ".mermaid" });
  }

  function loadMarkdown() {
    if (window.__EMBEDDED_MD_B64 && String(window.__EMBEDDED_MD_B64).trim()) {
      const decoded = atob(String(window.__EMBEDDED_MD_B64).trim());
      return Promise.resolve(decoded);
    }

    if (embedded && embedded.textContent.trim()) {
      return Promise.resolve(embedded.textContent);
    }

    if (embeddedB64 && embeddedB64.textContent.trim()) {
      const decoded = atob(embeddedB64.textContent.trim());
      return Promise.resolve(decoded);
    }

    if (!mdPath) {
      return Promise.reject(new Error("No embedded markdown and no data-md path."));
    }

    return fetch(mdPath).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to load markdown: " + res.status);
      }
      return res.text();
    });
  }

  setStatus("Loading markdown...");

  loadMarkdown()
    .then((md) => {
      return renderMarkdown(md);
    })
    .then(() => {
      setStatus("Rendered.");
    })
    .catch((err) => {
      setStatus("Render failed: " + err.message);
      mount.innerHTML = "<pre>" + err.message + "</pre>";
    });
})();
