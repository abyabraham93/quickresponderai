---
name: ww-text
description: HTML text component with multi-language support
keywords:
  - text
  - multilang
  - html
  - paragraph
  - heading
---

#### ww-text
Props:
- text: string|object - Text content. An object can be used for multi-language support (e.g., `{ "en": "Hello", "fr": "Bonjour" }`)
- tag: p|h1|h2|h3|h4|button|div - HTML element type

Events: none

Variables: none

Children: none

Note: For binding the text props, use binding in each language (e.g., `{ "en": {"__wwtype":...}, "fr": {"__wwtype":...} }`). Available languages can be found in Page Info variable.