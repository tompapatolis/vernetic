# Table Styling

This utility provides clean, responsive, and accessible styling for native HTML `<table>` elements. It includes support for headers, hover states, and alternating row colors, creating a polished data display without external libraries.

---

### Table of Contents

- [Overview](#overview)
- [Structure](#structure)
- [Features](#features)
- [Responsive Behavior](#responsive-behavior)
- [Usage Example](#usage-example)

---

## Overview

The base styles apply to all standard table elements (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`), making them easier to scan and interact with.

| Selector   | Description                                            | 
| ---------- | ------------------------------------------------------ |
| `table`    | Full-width layout with background, shadow, and spacing |
| `thead`    | Distinct header row with bold text and dark background |
| `tbody tr` | Alternating row colors and subtle borders              |
| `tr:hover` | Highlight effect on hover for better interactivity     |

---

## Structure

Tables are built with semantic markup using:

- `<thead>` for column labels (styled with `var(--ff-heading)` and `--fs-500`)
- `<tbody>` for content rows
- `<tr>` for each row, alternating background applied via `nth-child(odd)`
- `<td>` and `<th>` for cell content, both padded and left-aligned

---

## Features

| Feature                      | Description                                          | 
| ---------------------------- | ---------------------------------------------------- |
| `border-collapse: collapse`  | Eliminates double borders for a clean structure      |
| Alternating row colors       | Improves readability in large datasets               |
| Hover state on `<tr>`        | Helps identify which row is being hovered            |
| `border-radius` on the table | Creates a smooth visual container                    |
| Responsive padding           | Reduces padding on small screens for tighter spacing |
| Shadow                       | Adds a subtle box-shadow for table elevation         |

---

## Responsive Behavior

For screen widths below `750px`, table cell and header padding is reduced to maintain clarity on smaller viewports:

```scss
@media (max-width: 750px) {
    th { padding: 1rem .5rem; }
    td { padding: .5rem; }
}
```

This ensures consistent spacing without horizontal scroll.

---

## Usage Example

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Maria</td>
            <td>Active</td>
            <td>Editor</td>
        </tr>
        <tr>
            <td>John</td>
            <td>Pending</td>
            <td>Viewer</td>
        </tr>
    </tbody>
</table>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 