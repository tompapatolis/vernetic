# Grid Utilities

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

---

## Overview

**Grid Utilities** simplify creating responsive and flexible grid layouts, enhancing consistency across various devices and screen sizes.

---

## Grid Display Types

| Class          | CSS Property             | Explanation                                                                   | 
| -------------- | ------------------------ | ----------------------------------------------------------------------------- |
| `.grid`        | `display: grid;`         | Defines a block-level grid container for arranging items in rows and columns. |
| `.grid-inline` | `display: inline-grid;`  | Similar to `.grid`, but behaves like an inline element instead of block.      |
| `.grid-dense`  | `grid-auto-flow: dense;` | Enables a dense packing algorithm, filling gaps in the grid if possible.      |

---

## Grid Column Utilities

Utility classes to define the number of columns in a grid container and how items span across them.

### Available Utilities

| Class Prefix            | Description                                                                                      | 
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| `.grid-col-{1-10}`      | Sets the number of columns in the grid container (e.g., `grid-template-columns: repeat(3, 1fr)`) |
| `.grid-col-span-{1-10}` | Defines how many columns a grid item should span                                                 |
| `.grid-row-span-{1-10}` | Defines how many rows a grid item should span                                                    |

### Examples

```html
<!-- 3-column grid container -->
<div class="grid grid-col-3">
	<div>Item 1</div>
	<div>Item 2</div>
	<div>Item 3</div>
</div>

<!-- Grid item spanning 2 columns -->
<div class="grid-col-span-2">Spanning 2 columns</div>

<!-- Grid item spanning 3 rows -->
<div class="grid-row-span-3">Spanning 3 rows</div>
```

---

## Responsive Grid Classes

Responsive adjustments at specified breakpoints:

| Breakpoint Class      | Screen Width ≤ 990px | Screen Width ≤ 750px             |
| --------------------- | -------------------- | -------------------------------- |
| `.grid-col-md-{1-10}` | Columns 1-10         | -                                |
| `.grid-col-sm-{1-10}` | -                    | Columns (1–10) for small screens |
| `.grid-break-md`      | Single-column layout | -                                |
| `.grid-break-sm`      | -                    | Single-column layout             |

---

## Auto Columns and Fits

Easily create responsive grid layouts using `auto-fill` or `auto-fit`, which allow grid items to wrap dynamically based on available space.

### Utility Classes

| Class Example            | Effect                                                  | 
| ------------------------ | ------------------------------------------------------- |
| `.grid-col-auto-200`     | Uses `auto-fill` with a minimum column width of `200px` |
| `.grid-col-auto-fit-300` | Uses `auto-fit` with a minimum column width of `300px`  |

These classes generate a grid layout where columns adjust automatically to fit the container, using the specified minimum width.

### Available Sizes

You can use the following size keys (in pixels) for both `auto-fill` and `auto-fit` variations:

**Sizes:**  
`50`, `80`, `100`, `120`, `150`, `175`, `200`, `225`, `250`, `300`, `320`, `350`, `400`, `450`

Each class sets a `minmax({size}px, 1fr)` constraint for responsive behavior.

### Column Spread Utilities

These utility classes help control how grid items span across columns, or define specific two-column layouts. Use them to make elements stretch across the entire grid or apply responsive column configurations.


| Class                 | Effect                        | Explanation                                                                 |
|-----------------------|-------------------------------|------------------------------------------------------------------------------|
| `.grid-col-spread`    | Span full width (1 / -1)       | Makes an item span all columns in the grid, from the first to the last line.|
| `.grid-col-spread-sm` | Full span on small screens     | Applies the same full-width span (`1 / -1`) only on screens ≤ 750px wide.   |
| `.grid-col-2-spread`  | Two columns: `1fr auto`        | Legacy layout: one flexible column and one auto-sized column.               |


---

## Alignment Classes

Align content easily within grids:

| Class          | Description                      |
| -------------- | -------------------------------- |
| `.grid-center` | Center vertically & horizontally |
| `.grid-vc`     | Vertical center alignment        |
| `.grid-vt`     | Align items to top               |
| `.grid-vb`     | Vertical alignment bottom        |
| `.grid-hc`     | Horizontal center alignment      |
| `.grid-hr`     | Horizontal right alignment       |
 
### Self-Alignment Utilities

Use these utility classes to control the alignment of individual grid items along the row or column axis. These are especially useful when fine-tuning the position of elements inside a grid container.

| Class               | Effect                 | Explanation                                                             |
|---------------------|------------------------|-------------------------------------------------------------------------|
| `.grid-self-bottom` | `align-self: end;`     | Aligns the item to the bottom of its grid area.                         |
| `.grid-self-right`  | `justify-self: right;` | Aligns the item to the right within its grid column.                    |
| `.grid-self-center` | `justify-self: center;`| Centers the item horizontally within its grid column.                   |
| `.grid-self-spread` | `align-self: stretch;` | Stretches the item to fill the full height of its grid row.             |

---

## Gap Utilities

Define consistent spacing between grid rows and columns using the `.gap-*`, `.gap-row-*`, and `.gap-col-*` utility classes.

### Rem-Based Gaps

Use these classes to apply spacing in `rem` units:

| Class Prefix       | Description                  | 
| ------------------ | ---------------------------- |
| `.gap-{value}`     | Sets both row and column gap |
| `.gap-row-{value}` | Sets only the row gap        |
| `.gap-col-{value}` | Sets only the column gap     |

**Available `rem`-based values:**

```css
0125, 025, 0375, 05, 065, 075, 1, 1.5, 2 ... 14
```

> Example: `.gap-05` → `gap: 0.5rem;`  
> Example: `.gap-row-2` → `row-gap: 2rem;`

### Small-Screen Overrides

For devices with a max width of 750px, you can apply mobile-specific gaps using:

```css
.gap-sm-{value}
```

> Example: `.gap-sm-1.5` → `gap: 1.5rem` on small screens

### Viewport-Width Gaps

For responsive layouts based on the viewport width (`vw`), use:

| Class Prefix         | Description                          | 
| -------------------- | ------------------------------------ |
| `.gap-{value}vw`     | Sets both row and column gap in `vw` |
| `.gap-row-{value}vw` | Sets only the row gap in `vw`        |
| `.gap-col-{value}vw` | Sets only the column gap in `vw`     |

**Available `vw`-based values:**

```css
1vw to 15vw
```

> Example: `.gap-3vw` → `gap: 3vw;`  
> Example: `.gap-col-10vw` → `column-gap: 10vw;`

---

## Grid Flow Classes

| Class               | Description           | 
| ------------------- | --------------------- |
| `.grid-flow-row`    | Row-wise auto flow    |
| `.grid-flow-column` | Column-wise auto flow |

---

## Grid Order for Small Screens

Controls visual ordering on smaller screens:

| Class      | Description                     | 
| ---------- | ------------------------------- |
| `.order-1` | Push item to the first position |
| `.order-2` | Push item to second position    |

---

## Grid Helper Classes

Quick layout helpers:

| Class                | Effect                                  | Explanation                                                                  | 
| -------------------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| `.grid-eq-h`         | Equal height rows                       | Makes all grid rows the same height, regardless of their content.            |
| `.grid-eq-w`         | Equal width columns                     | Ensures all columns share equal width within the grid.                       |
| `.grid-col-2-master` | Two-column layout (auto + 1fr)          | A layout with a fixed-width column (auto) and a flexible column (1fr).       |
| `.grid-col-3-master` | Three-column layout (auto + auto + 1fr) | Two fixed-width columns followed by one flexible column that fills the rest. |

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

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
