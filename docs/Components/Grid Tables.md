# Grid Table Utilities

The `grid-table` utility provides a flexible, responsive table layout using **CSS Grid**. It allows precise column control, optional striping, and responsive behavior for smaller screens.

---

### Table of Contents

- [Overview](#overview)
- [Column Utilities](#column-utilities)
- [Responsive Columns](#responsive-columns)
- [Modifiers](#modifiers)
- [Usage Example](#usage-example)

---

## Overview

The `.grid-table` class creates a grid-based table layout where each row is made up of individual cells. This is useful for custom table-like layouts where HTML tables aren't flexible enough.

| Class                  | Description                           | 
| ---------------------- | ------------------------------------- |
| `.grid-table`          | Base grid layout for table content    |
| `.grid-table-{n}`      | Defines the number of columns (1–20)  |
| `.grid-table--striped` | Adds alternating row backgrounds      |
| `.grid-table__head`    | Optional header style for header rows |

---

## Column Utilities

To define how many columns the table has, use `.grid-table-{n}` where `n` is between **1** and **20**.

| Class Example    | Effect             | 
| ---------------- | ------------------ |
| `.grid-table-2`  | Creates 2 columns  |
| `.grid-table-4`  | Creates 4 columns  |
| `.grid-table-10` | Creates 10 columns |

- All columns are set to `auto` width by default.
- Last column cells are automatically **right-aligned**.
- Bottom border is removed on the last row.

---

## Responsive Columns

For responsive layouts, use media-specific column utilities:

| Class                | Screen Width                  | 
| -------------------- | ----------------------------- |
| `.grid-table-md-{n}` | Applies at `max-width: 990px` |
| `.grid-table-sm-{n}` | Applies at `max-width: 750px` |

This allows you to reduce column count on smaller devices.  
**Available values for `{n}`:** `1` to `20` — matching the full range of column utilities in the default `.grid-table-{n}` classes.

---

## Modifiers

| Class                  | Description                                          | 
| ---------------------- | ---------------------------------------------------- |
| `.grid-table__head`    | Use on heading rows to apply distinct styling        |
| `.grid-table--striped` | Applies a zebra-stripe effect for better readability |

---

## Usage Example

```html
<div class="grid-table grid-table-3 grid-table--striped">
    <div class="grid-table__head">Name</div>
    <div class="grid-table__head">Role</div>
    <div class="grid-table__head">Actions</div>

    <div>Maria</div>
    <div>Editor</div>
    <div>Edit</div>

    <div>John</div>
    <div>Contributor</div>
    <div>Edit</div>
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
