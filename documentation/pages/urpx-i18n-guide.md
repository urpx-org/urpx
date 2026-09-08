<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

---
site_category: integration
site_id: i18n-guide
site_title: "Internationalization Guide"
site_label: "i18n Guide"
site_position: 2
---

# URPX Internationalization (i18n) Implementation Guide

## Overview

This guide provides comprehensive specifications for implementing international and multilingual support in URPX.

**Important Note on Examples**: The examples in this document use various `urpx:` prefixed properties (such as `urpx:localeSettings`, `urpx:numberFormat`, `urpx:calendarSupport`) for **illustrative purposes only**. These are hypothetical examples demonstrating i18n patterns and concepts, not actual properties defined in the URPX ontology.

**For Official URPX Properties**: Consult the [URPX Data Dictionary](urpx-data-dictionary.md) for the complete, authoritative reference of all properties defined in [`urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl).

**Purpose of This Guide**: To establish i18n requirements and patterns that will inform future URPX development, not to document currently implemented features.

## Core Principles

1. **Language Neutrality**: The core schema must not assume any specific language
2. **Cultural Adaptability**: Support different cultural conventions (dates, numbers, currencies)
3. **Regulatory Flexibility**: Accommodate varying international regulatory requirements

## Language Support

### JSON-LD Language Tags

All human-readable text fields MUST support language tags:

```json
{
  "@context": {
    "@base": "https://utility.example.com/",
    "@language": "en-US",  // Default language with region
    "urpx": "https://urpx.org/ns/ontology/"
  },
  "urpx:name": [
    {"@value": "Time-of-Use Rate", "@language": "en"},
    {"@value": "Tarifa por Horario de Uso", "@language": "es"},
    {"@value": "分時電価", "@language": "ja"},
    {"@value": "تعرفة حسب وقت الاستخدام", "@language": "ar", "@direction": "rtl"}
  ]
}
```

### Required Multilingual Fields

The following fields MUST support multiple languages:
- `urpx:name`
- `urpx:description`
- `urpx:changeDescription`
- `urpx:holidayName`
- `urpx:periodName`

Structured condition logic MUST NOT rely on localized executable text. If localized condition explanations are needed, provide them through `urpx:name` and `urpx:description` on `Condition`.

### Language Fallback Chain

Implementations should support fallback:
```
Requested: pt-BR → Try: pt-BR → pt → en → any available
```

## Regional Formats

### Number Formatting

```json
{
  "urpx:localeSettings": {
    "urpx:numberFormat": {
      "urpx:locale": "de-DE",
      "urpx:decimalSeparator": ",",
      "urpx:thousandsSeparator": ".",
      "urpx:currencyPosition": "suffix",
      "urpx:currencySpacing": true
    }
  },
  // Display: "1.234,56 €" for German locale
  "urpx:unitPrice": 1234.56
}
```

### Date and Time

```json
{
  "urpx:effectiveDate": {
    "@type": "xsd:dateTime",
    "@value": "2025-01-01T00:00:00Z",
    "urpx:localizedDisplay": {
      "en-US": "January 1, 2025",
      "en-GB": "1 January 2025",
      "de-DE": "1. Januar 2025",
      "ja-JP": "2025年1月1日"
    }
  }
}
```

### Alternative Calendar Systems

```json
{
  "urpx:calendarSupport": {
    "urpx:primaryCalendar": "gregorian",
    "urpx:alternateCalendars": [
      {
        "urpx:calendar": "islamic-civil",
        "urpx:effectiveDate": "1446-06-30"
      },
      {
        "urpx:calendar": "hebrew",
        "urpx:effectiveDate": "5785-10-01"
      }
    ]
  }
}
```

## Measurement Units

### Unit System Support

```json
{
  "urpx:measurementSystem": {
    "urpx:preferred": "metric",
    "urpx:conversions": {
      "energy": {
        "urpx:baseUnit": "kWh",
        "urpx:alternates": [
          {"unit": "MJ", "factor": 3.6},
          {"unit": "BTU", "factor": 3412.14},
          {"unit": "cal", "factor": 860421}
        ]
      },
      "volume": {
        "urpx:baseUnit": "m3",
        "urpx:alternates": [
          {"unit": "ft3", "factor": 35.3147},
          {"unit": "gal", "factor": 264.172},
          {"unit": "L", "factor": 1000}
        ]
      }
    }
  }
}
```

## Currency Handling

### Multi-Currency Support

```json
{
  "urpx:currencyConfiguration": {
    "urpx:primaryCurrency": "EUR",
    "urpx:acceptedCurrencies": ["EUR", "USD", "GBP"],
    "urpx:exchangeRateSource": "ECB",
    "urpx:exchangeRateDate": "2025-01-01",
    "urpx:roundingRules": {
      "EUR": {"decimals": 2, "method": "half-up"},
      "JPY": {"decimals": 0, "method": "down"},
      "KWD": {"decimals": 3, "method": "half-up"}
    }
  }
}
```

## Address Formats

### Flexible International Addresses

```json
{
  "urpx:serviceLocation": {
    "@type": "urpx:InternationalAddress",
    "urpx:countryCode": "JP",
    "urpx:components": {
      "postalCode": "100-0001",
      "prefecture": "東京都",
      "city": "千代田区",
      "district": "千代田",
      "block": "1-1",
      "building": "東京ビル 5階"
    },
    "urpx:formatted": {
      "ja": "〒100-0001 東京都千代田区千代田1-1 東京ビル 5階",
      "en": "Tokyo Building 5F, 1-1 Chiyoda, Chiyoda-ku, Tokyo 100-0001"
    }
  }
}
```

## Regulatory Variations

### Country-Specific Requirements

```json
{
  "urpx:regulatoryCompliance": {
    "urpx:jurisdiction": {
      "urpx:country": "FR",
      "urpx:region": "EU"
    },
    "urpx:requiredDisclosures": {
      "urpx:energySourceMix": {
        "@language": "fr",
        "@value": "Mix énergétique: 70% nucléaire, 20% renouvelable, 10% fossile"
      },
      "urpx:CO2Emissions": {
        "urpx:value": 50,
        "urpx:unit": "gCO2/kWh"
      }
    },
    "urpx:taxConfiguration": {
      "urpx:vatRate": 0.20,
      "urpx:vatIncluded": true,
      "urpx:additionalTaxes": [
        {
          "urpx:taxName": "CSPE",
          "urpx:rate": 0.0225,
          "urpx:unit": "EUR/kWh"
        }
      ]
    }
  }
}
```

## Enumeration Translations

### Translatable Enum Pattern

```json
{
  "@context": {
    "urpx": "https://urpx.org/ns/ontology/",
    "skos": "http://www.w3.org/2004/02/skos/core#"
  },
  "urpx:chargeType": {
    "@id": "urpx:ChargeType/energy",
    "skos:prefLabel": [
      {"@value": "Energy", "@language": "en"},
      {"@value": "Energía", "@language": "es"},
      {"@value": "Énergie", "@language": "fr"},
      {"@value": "Energie", "@language": "de"},
      {"@value": "エネルギー", "@language": "ja"},
      {"@value": "能源", "@language": "zh"},
      {"@value": "طاقة", "@language": "ar"}
    ],
    "skos:definition": [
      {"@value": "Charge for electrical energy consumption", "@language": "en"},
      {"@value": "Cargo por consumo de energía eléctrica", "@language": "es"}
    ]
  }
}
```

## Implementation Checklist

### Required Support

- [ ] UTF-8 encoding throughout
- [ ] Language tags on all text fields
- [ ] ISO 639-1/639-2 language codes
- [ ] ISO 3166 country codes
- [ ] ISO 4217 currency codes
- [ ] IANA time zone database
- [ ] Unicode normalization (NFC)
- [ ] Bidirectional text (BiDi) support

### Recommended Support

- [ ] CLDR locale data integration
- [ ] ICU library for formatting
- [ ] Plural rules per language
- [ ] Gender-aware translations
- [ ] Cultural color meanings
- [ ] Local holiday calendars
- [ ] Regional regulatory APIs

### Testing Requirements

- [ ] Test with RTL languages (Arabic, Hebrew)
- [ ] Test with CJK characters (Chinese, Japanese, Korean)
- [ ] Test with extended Latin (ñ, ü, č, etc.)
- [ ] Test with different decimal formats
- [ ] Test with various date formats
- [ ] Test currency symbol positions
- [ ] Test sorting in different locales

## API Considerations

### Content Negotiation

```http
GET /api/rates/residential-tou
Accept-Language: es-MX,es;q=0.9,en;q=0.8
Accept-Locale: es-MX
Accept-Currency: MXN
```

### Response Headers

```http
Content-Language: es-MX
Content-Currency: MXN
X-Number-Format: decimal-comma
X-Date-Format: dd/mm/yyyy
```

## Database Storage

### Recommended Schema

```sql
CREATE TABLE rate_names (
    rate_id UUID,
    language_code VARCHAR(10),
    region_code VARCHAR(10),
    name TEXT,
    description TEXT,
    PRIMARY KEY (rate_id, language_code, region_code)
);

CREATE TABLE charge_amounts (
    charge_id UUID,
    currency_code VARCHAR(3),
    amount DECIMAL(15,6),
    exchange_rate DECIMAL(15,6),
    base_amount_usd DECIMAL(15,6),
    PRIMARY KEY (charge_id, currency_code)
);
```

## Best Practices

1. **Always Store Base Values**: Store prices in a base currency/unit and convert for display
2. **Use Standards**: Stick to ISO standards for all codes
3. **Cache Translations**: Translation lookups can be expensive
4. **Validate Locales**: Not all language-country combinations are valid
5. **Plan for Growth**: Design for languages you don't yet support
6. **Cultural Sensitivity**: Review translations with native speakers
7. **Legal Compliance**: Some countries require local language support by law

## Common Pitfalls to Avoid

1. **Hardcoded Strings**: Never hardcode user-facing text
2. **Assumptions about Text Length**: German is ~30% longer than English
3. **Date Format Assumptions**: MM/DD/YYYY vs DD/MM/YYYY
4. **Number Format Assumptions**: Decimal points vs commas
5. **Character Set Limitations**: Support full Unicode
6. **Sorting Issues**: Collation varies by language
7. **Time Zone Confusion**: Always store UTC, display local

## Testing Strategy

```javascript
// Example test for multiple languages
describe('URPX I18n Tests', () => {
  const languages = ['en', 'es', 'fr', 'de', 'ja', 'ar', 'zh'];
  
  languages.forEach(lang => {
    it(`should validate rate plan in ${lang}`, () => {
      const ratePlan = loadRatePlan(`test-data/rate-plan-${lang}.json`);
      expect(validateURPX(ratePlan)).toBe(true);
      expect(ratePlan['urpx:name']['@language']).toBe(lang);
    });
  });
  
  it('should handle RTL text correctly', () => {
    const arabic = loadRatePlan('test-data/rate-plan-ar.json');
    expect(arabic['urpx:name']['@direction']).toBe('rtl');
  });
  
  it('should convert between measurement units', () => {
    const metric = convertUnits(100, 'kWh', 'MJ');
    expect(metric).toBeCloseTo(360, 1);
  });
});
```

## Resources

- [CLDR - Unicode Common Locale Data Repository](http://cldr.unicode.org/)
- [ISO 639 Language Codes](https://www.loc.gov/standards/iso639-2/)
- [ISO 3166 Country Codes](https://www.iso.org/iso-3166-country-codes.html)
- [ISO 4217 Currency Codes](https://www.iso.org/iso-4217-currency-codes.html)
- [IANA Time Zone Database](https://www.iana.org/time-zones)
- [ICU - International Components for Unicode](http://site.icu-project.org/)
- [W3C Internationalization](https://www.w3.org/International/)

---

*Version 1.0 - URPX Internationalization Guide*