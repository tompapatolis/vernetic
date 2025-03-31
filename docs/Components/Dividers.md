# Divider Utilities

The `divider` component creates **full-width decorative separators** between sections. These SVG-based elements visually break content while remaining lightweight and easy to position using utility classes and data attributes.

---

### Table of Contents

- [Purpose](#purpose)
- [Base Class](#base-class)
- [Divider Variants](#divider-variants)
- [Position Modifiers](#position-modifiers)
- [Usage Guidelines](#usage-guidelines)
- [Examples](#examples)

---

## Purpose

Dividers enhance visual flow in page layouts. They can be placed **above**, **below**, or **between** sections using utility classes and spacing helpers.

---

## Base Class

| Class      | Description                                                            | 
| ---------- | ---------------------------------------------------------------------- |
| `.divider` | Base class that applies background styles, sizing, and layout behavior |

### Base Styles

- `width: 100%`
- `background-repeat: no-repeat`
- `background-position: center`
- `background-size: cover`
- `font-size: 0` (to suppress inline space)
- Requires a non-empty element (`&nbsp;` or content) to render properly

---

## Divider Variants

Apply a visual style using one of the predefined variants:

| Class             | Background Image Path | Aspect Ratio | 
| ----------------- | --------------------- | ------------ |
| `.divider--one`   | `divider1.svg`        | `960 / 200`  |
| `.divider--two`   | `divider2.svg`        | `960 / 200`  |
| `.divider--three` | `divider3.svg`        | `960 / 100`  |
| `.divider--four`  | `divider4.svg`        | `960 / 100`  |
| `.divider--five`  | `divider5.svg`        | `960 / 100`  |

These use `aspect-ratio` for consistent rendering across screen sizes.

---

## Position Modifiers

Control vertical spacing and alignment using the `data-position` attribute:

| Attribute                | Behavior                                             | 
| ------------------------ | ---------------------------------------------------- |
| `data-position="top"`    | Pulls divider up by applying `margin-bottom: -1.3px` |
| `data-position="bottom"` | Pulls divider down with `margin-top: -1.3px`         |

This helps remove unwanted gaps between the divider and adjacent content.

---

## Usage Guidelines

Always follow these practices when using `.divider` elements:

1. Include a non-breaking space to ensure the divider renders.  
    **Example:**  
    `<div class="divider divider--one">&nbsp;</div>`
2. Combine with spacing utilities like `.mt-3` or `.mb-4` to fine-tune vertical placement.
3. Use the `data-position` attribute to visually attach the divider to a section.  
    Available values:
    - `data-position="top"`
    - `data-position="bottom"`
4. You must define the background image paths for each divider variant in your own CSS.  

**Example declarations:**

```css
.divider--one   { background-image: url(divider1.svg); }
.divider--two   { background-image: url(divider2.svg); }
.divider--three { background-image: url(divider3.svg); }
.divider--four  { background-image: url(divider4.svg); }
.divider--five  { background-image: url(divider5.svg); }
```

Adjust file paths as needed to match your project directory.

I design my section dividers using [Haikei](https://app.haikei.app/) — a free tool for generating customizable SVG backgrounds and shapes. It's perfect for creating unique, responsive divider graphics that integrate seamlessly into this utility system.

**Tip:** When creating your SVGs in Haikei, set the dimensions to **960×200** for `divider1` and `divider2`, and **960×100** for all other dividers. This ensures consistent scaling and correct aspect ratios across your layout.

---

## Examples

### Top Divider

```html
<div class="divider divider--five" data-position="top">&nbsp;</div>
<section class="content">...</section>
```

### Bottom Divider

```html
<section class="content">...</section>
<div class="divider divider--three" data-position="bottom">&nbsp;</div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
