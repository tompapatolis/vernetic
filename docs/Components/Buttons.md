# Button Utilities Documentation

Comprehensive documentation for **Button Utilities**, a versatile button styling system designed for flexibility, ease of use, and consistency across user interfaces.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Base Button](#base-button)
    - [Structure](#structure)
    - [HTML Example](#html-example)
4. [Size Variants](#size-variants)
5. [Appearance Modifiers](#appearance-modifiers)
6. [Color Variations](#color-variations)
7. [Special Buttons](#special-buttons)
    - [Icon Buttons](#icon-buttons)
    - [Split Buttons](#split-buttons)
    - [Counter Buttons](#counter-buttons)
    - [Blob Buttons](#blob-buttons)
    - [Circular Buttons](#circular-buttons)
8. [Disabled State](#disabled-state)
9. [Customization](#customization)
10. [Best Practices](#best-practices)

---

## Overview

The **Button Utilities** provide a unified and flexible approach to creating buttons with numerous styling options, ensuring consistency, ease of use, and customization across your applications.

---

## Features

- Multiple size options (`tiny`, `small`, `large`)
- Style modifiers (`shadow`, `square`, `round`)
- Rich color variations (gray, red, orange, green, blue)
- Specialized button types: icon-only, split buttons, counters, blobs, circular buttons
- Responsive and accessible design

---

## Base Button

### Structure

Basic HTML structure for the button:

```html
<button class="btn">Default Button</button>
<a href="#" class="btn">Link Button</a>
```

### HTML Example

```html
<button class="btn btn-large btn-green-500">Large Green Button</button>
```

---

## Size Variants

Size classes modify padding, font-size, and dimensions:

- `.btn-tiny`
- `.btn-small`
- `.btn-large`

---

## Appearance Modifiers

Customize button appearance with modifiers:

- `.btn-shadow` (box-shadow)
- `.btn-noshadow` (no shadow)
- `.btn-square` (square corners)
- `.btn-round` (circular shape)

---

## Color Variations

Dynamic color classes follow the format:

- Grayscale: `.btn-{shade}` (e.g., `.btn-500`)
- Color-specific: `.btn-{color}-{shade}` (e.g., `.btn-red-500`)

Available colors: `gray`, `red`, `orange`, `green`, `blue`

---

## Special Buttons

### Icon Buttons

- Class: `.btn-icon`
- Designed for icon-only interactions

### Split Buttons

- Class: `.btn-split`
- Button divided into two sections (icon and text)

### Counter Buttons

- Class: `.btn-cnt`
- Include numeric indicators or counters

### Blob Buttons

- Class: `.btn-blob`
- Unique irregular-shaped buttons

### Circular Buttons

- Class: `.btn-circ`
- Circular button shape, ideal for prominent actions

---

## Disabled State

Apply disabled state with:

```html
<button class="btn disabled">Disabled Button</button>
<a href="#" class="btn disabled">Disabled Link</a>
```

CSS sets opacity and disables pointer events.

---

## Customization

- Utilize CSS variables (`--fs-400`, `--color-700`, etc.) for customization.
- Color customization through dynamically generated CSS.

---

## Best Practices

- Clearly distinguish between button actions using appropriate colors and sizes.
- Use specialized buttons (split, counter, icon) to improve user experience.
- Ensure accessible contrast and interactivity for disabled states.

---

Utilize these Button Utilities to streamline your UI design workflow effectively.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
