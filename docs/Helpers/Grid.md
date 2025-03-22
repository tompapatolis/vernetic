# Grid Utilities Documentation

Detailed documentation for **Grid Utilities**, offering responsive and flexible grid layouts, including practical examples and class explanations.

---

## Table of Contents

1. [Overview](#overview)
2. [Grid Display Types](#grid-display-types)
3. [Grid Column Utilities](#grid-column-utilities)
4. [Responsive Grid Classes](#responsive-grid-classes)
5. [Auto Columns and Fits](#auto-columns-and-fits)
6. [Alignment Classes](#alignment-classes)
7. [Gap Utilities](#gap-utilities)
8. [Grid Flow Classes](#grid-flow-classes)
9. [Grid Order for Small Screens](#grid-order-for-small-screens)
10. [Grid Helper Classes](#grid-helper-classes)
11. [HTML Usage Examples](#html-usage-examples)
12. [Best Practices](#best-practices)

---

## Overview

**Grid Utilities** simplify creating responsive and flexible grid layouts, enhancing consistency across various devices and screen sizes.

---

## Grid Display Types

|Class|CSS Property|
|---|---|
|`.grid`|`display: grid;`|
|`.grid-inline`|`display: inline-grid;`|
|`.grid-dense`|`grid-auto-flow: dense;`|

---

## Grid Column Utilities

**Available Columns and Spans:**

- Columns: `.grid-col-{1-10}`
- Column Span: `.grid-col-span-{1-10}`
- Row Span: `.grid-row-span-{1-10}`

---

## Responsive Grid Classes

Responsive adjustments at specified breakpoints:

|Breakpoint Class|Screen Width ≤ 990px|Screen Width ≤ 750px|
|---|---|---|
|`.grid-col-md-{1-10}`|Columns 1-10|-|
|`.grid-col-sm-{1-10}`|-|Columns (1–10) for small screens|
|`.grid-break-sm`|-|Single-column layout|

---

## Auto Columns and Fits

Dynamic grid layouts using auto-fill or auto-fit:

|Class Example|Effect|
|---|---|
|`.grid-col-auto-200`|Auto-fill with minimum width of 200px|
|`.grid-col-auto-fit-300`|Auto-fit grid items at minimum 300px width|

**Sizes:** 50px increments from 50px up to 450px.

---

## Alignment Classes

Align content easily within grids:

|Class|Description|
|---|---|
|`.grid-center`|Center vertically & horizontally|
|`.grid-vc`|Vertical center alignment|
|`.grid-vt`|Align items to top|
|`.grid-vb`|Vertical alignment bottom|
|`.grid-hc`|Horizontal center alignment|
|`.grid-hr`|Horizontal right alignment|

---

## Gap Utilities

Available gap sizes (in `rem`):

- `.gap-0125` (0.125rem), `.gap-025` (0.25rem), `.gap-0375` (0.375rem), `.gap-05` (0.5rem), `.gap-065` (0.65rem), `.gap-075` (0.75rem), `.gap-1`, `.gap-1.5`, `.gap-{2–14}`

Additionally, viewport-relative gaps (vw): `.gap-1vw` to `.gap-15vw`

---

## Grid Flow Classes

|Class|Description|
|---|---|
|`.grid-flow-row`|Row-wise auto flow|
|`.grid-flow-column`|Column-wise auto flow|

---

## Grid Order for Small Screens

Controls visual ordering on smaller screens:

|Class|Description|
|---|---|
|`.order-1`|Push item to the first position|
|`.order-2`|Push item to second position|

---

## Grid Helper Classes

Quick layout helpers:

|Class|Effect|
|---|---|
|`.grid-eq-h`|Equal height rows|
|`.grid-eq-w`|Equal width columns|
|`.grid-col-2-master`|Two-column layout (auto + 1fr)|
|`.grid-col-3-master`|Three-column layout (auto + auto + 1fr)|

---

## HTML Usage Examples

### Basic Grid

```html
<div class="grid grid-col-3 gap-1">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Responsive Grid

```html
<div class="grid grid-col-4 grid-col-md-2 grid-col-sm-1 gap-2">
  <div>Responsive Item</div>
  <div>Responsive Item</div>
</div>
```

### Auto-fit Grid

```html
<div class="grid grid-col-auto-fit-200 gap-2">
  <div>Dynamic Item 1</div>
  <div>Dynamic Item 2</div>
</div>
```

---

## Best Practices

- Select appropriate responsive classes.
- Use auto-fit grids for dynamic layouts.
- Maintain consistent spacing with gap utilities.

---

Leverage these utilities for structured and adaptable layouts across devices.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
