# Grid Table Utilities Documentation

Detailed documentation for **Grid Table Utilities**, a powerful CSS Grid-based solution for creating responsive, flexible, and easy-to-manage tables.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Base Structure](#base-structure)
4. [Column Variations](#column-variations)
    - [Standard Columns (1-20)](#standard-columns)
    - [Responsive Columns](#responsive-columns)
5. [Striped Tables](#striped-tables)
6. [Usage Examples](#usage-examples)
7. [Customization](#customization)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)

---

## Overview

**Grid Table Utilities** provide dynamic, responsive tables leveraging CSS Grid, ideal for clearly presenting structured data.

---

## Features

- Dynamic and responsive column management using CSS Grid
- Column counts available from 1 to 20
- Responsive adjustments for medium and small screens
- Optional striped rows for enhanced readability
- Automatic right-alignment for last columns

---

## Base Structure

Standard HTML structure for a grid table:

```html
<div class="grid-table grid-table-3">
  <div class="grid-table__head">Header 1</div>
  <div class="grid-table__head">Header 2</div>
  <div class="grid-table__head">Header 3</div>

  <div>Row 1 Col 1</div>
  <div>Row 1 Col 2</div>
  <div>Row 1 Col 3</div>
</div>
```

---

## Column Variations

### Standard Columns

Define tables with explicit column counts (from 1 to 20):

**Available Classes:**

```
.grid-table-1, .grid-table-2, ..., .grid-table-20
```

Example for 4-column table:

```html
<div class="grid-table grid-table-4">
  <!-- Your content here -->
</div>
```

### Responsive Columns

Adjust tables dynamically based on screen size:

**Medium Screens (max-width: 990px):**

```
.grid-table-md-1, .grid-table-md-2, ..., .grid-table-md-20
```

**Small Screens (max-width: 750px):**

```
.grid-table-sm-1, .grid-table-sm-2, ..., .grid-table-sm-20
```

Responsive example:

```html
<div class="grid-table grid-table-6 grid-table-md-4 grid-table-sm-2">
  <!-- Your content here -->
</div>
```

---

## Striped Tables

Enhance readability with alternating row colors:

```html
<div class="grid-table grid-table-3 grid-table--striped">
  <!-- Your content here -->
</div>
```

---

## Usage Examples

Complete HTML example:

```html
<div class="grid-table grid-table-3 grid-table-md-2 grid-table-sm-1 grid-table--striped">
  <div class="grid-table__head">Name</div>
  <div class="grid-table__head">Age</div>
  <div class="grid-table__head">Location</div>

  <div>John Doe</div>
  <div>30</div>
  <div>New York</div>

  <div>Jane Smith</div>
  <div>25</div>
  <div>Los Angeles</div>
</div>
```

---

## Customization

Customize your grid tables with CSS variables:

- Font size and family (`--fs-200`, `--ff-heading`)
- Background and border colors

Example customization:

```css
.grid-table {
  font-size: 1rem;
  border-color: var(--custom-border-color);
}
```

---

## Accessibility

- Clearly label column headers
- Ensure sufficient color contrast in striped tables

---

## Best Practices

- Use appropriate column counts for readability
- Leverage responsive classes to maintain usability across devices
- Utilize striped rows for large datasets to improve readability

---

Utilize Grid Table Utilities effectively for structured, responsive, and readable data presentations.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
