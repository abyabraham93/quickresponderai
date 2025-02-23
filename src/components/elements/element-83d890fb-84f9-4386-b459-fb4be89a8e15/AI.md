---
name: ww-icon
description: Renders a customizable icon with adjustable size, color, and type, linkable to URL/action for interactive functionality.
keywords:
  - icon rendering
  - customizable size
  - customizable color
  - icon type
  - linkable icon
  - responsive properties
  - state bindings
  - url redirection
  - action trigger
  - icon class name
---

#### ww-icon

Component Purpose: Renders an icon element with customizable size, color, and icon type. Can be linked to URL or action.
When put inside a ww-button, do not forget to ad the proper margin to the left or right.

Properties:
- fontSize: number - Size of icon in pixels. (Mandatory)
- color: string - Color of icon (name, hex, RGB/RGBA). (Mandatory)
- icon: string - Icon code/class name. Default: "wwi wwi-icon" (Mandatory)

Children: none

Features:
- Linkable for URL redirection or action triggers
- Responsive fontSize and color values with states support
- Icon property supports state bindings
- When the icon is the child of a button, do not forget to add the proper margin

Events: none

Variables: none

*** IMPORTANT ***: The `color` and this `fontSize` properties are in the `props` key of the element, not in the `styles` key.

<example>
  Icon with different size, color and backgroundColor on hover:
  {"uid":"hover_icon","tag":"ww-icon","name":"Hover Icon","props":{"default":{"color":"red","fontSize":"12px", ...},"_wwHover_default":{"color":"blue","fontSize":"16px"},"mobile":{"fontSize":"8px"},"_wwHover_mobile":{"color":"blue","fontSize":"10px"}},"styles":{"default":{"bacgroundColor":"yellow", ...},"_wwHover_default":{"bacgroundColor":"green"}}}
</example>
