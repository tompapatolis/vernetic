# Dimensions Utilities Documentation

Detailed documentation for **Dimensions Utilities**, providing classes for fixed, responsive, and viewport-relative sizing, including examples and best practices.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Fixed Dimension Classes](#fixed-dimension-classes)
4. [Responsive Small-Screen Classes](#responsive-small-screen-classes)
5. [Viewport-Relative Dimension Classes](#viewport-relative-dimension-classes)
6. [Dimension Helper Classes](#dimension-helper-classes)
7. [HTML Usage Examples](#html-usage-examples)
8. [Responsive Behavior](#responsive-behavior)
9. [Customization](#customization)
10. [Best Practices](#best-practices)

---

## Overview

The **Dimensions Utilities** provide simple and consistent classes to set element sizes precisely, responsively, or relative to viewport dimensions.

---

## Features

- Fixed pixel dimensions (20px - 800px)
- Small-screen responsive overrides
- Viewport-relative sizing
- Utility classes for common sizing needs

---

## Fixed Dimension Classes

Generated fixed-size classes from **20px** to **800px**, incrementing by **20px**:

|Example Class|CSS Result|
|---|---|
|`.w-20`|`width: 20px;`|
|`.h-40`|`height: 40px;`|
|`.mw-60`|`min-width: 60px;`|
|`.w-max-100`|`max-width: 100px;`|
|`.mh-200`|`min-height: 200px;`|

**Note:** Classes available every 20px increment up to 800px.

---

## Responsive Small-Screen Classes

Automatically adjust sizes for screens smaller than 750px:

|Example Class|CSS Result (on small screens)|
|---|---|
|`.w-sm-40`|`width: 40px !important;`|
|`.h-sm-100`|`height: 100px !important;`|

---

## Viewport-Relative Dimension Classes

Set dimensions relative to viewport size (1vw - 20vw and 1vh - 20vh):

|Example Class|CSS Result|
|---|---|
|`.w-10vw`|`width: 10vw;`|
|`.h-15vh`|`height: 15vh;`|

**Available range:** `1vw` through `20vw` and `1vh` through `20vh`.

---

## Dimension Helper Classes

Common utility classes:

|Class|Effect|
|---|---|
|`.w-auto`|`width: auto;`|
|`.h-auto`|`height: auto;`|
|`.w-fit`|`width: fit-content;`|
|`.mw-0`|`min-width: 0 !important;`|
|`.w-full`|`width: 100%; height: auto;`|
|`.w-max-hd`|`max-width: 1920px;`|

---

## HTML Usage Examples

### Fixed dimensions

```html
<div class="w-200 h-200">Fixed Size Box</div>
```

### Responsive dimensions

```html
<div class="w-400 w-sm-200">Responsive Box</div>
```

### Viewport-relative dimensions

```html
<div class="w-10vw h-10vh">Viewport Box</div>
```

### Full width

```html
<div class="w-full">Full Width Box</div>
```

---

## Responsive Behavior

Responsive CSS automatically adjusts classes on small screens:

```css
@media (max-width: 750px) {
  [class*="mh-"] { min-height: auto !important; }
  [class*="mw-"] { min-width: auto !important; }
}
```

---

## Customization

Modify or extend these utility classes directly in SCSS loops:

```scss
// Extend to larger sizes
@for $i from 1 through 50 {
  .w-#{$i * 20} { width: #{$i * 20}px; }
}
```

---

## Best Practices

- Use fixed dimensions sparingly to maintain responsiveness.
- Prefer viewport-relative classes for responsive layouts.
- Test dimensions thoroughly across devices and screen sizes.

---

Use these Dimension Utilities to precisely control layout sizing for robust and adaptable web designs.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
