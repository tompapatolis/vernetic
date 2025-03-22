# Tree Menu Component Documentation

Comprehensive documentation for the **Tree Menu Component**, providing intuitive and interactive hierarchical navigation for structured content or file directories.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Base Structure](#base-structure)
4. [Tree Menu Elements](#tree-menu-elements)
    - [Folder Items](#folder-items)
    - [File Items](#file-items)
5. [Tree Menu Variations](#tree-menu-variations)
    - [Standard Tree Menu](#standard-tree-menu)
    - [Compact Tree Menu](#compact-tree-menu)
6. [Icons and Indicators](#icons)
7. [Interactive States](#interactive-states)
    - [Expanded State](#expanded-state)
    - [Collapsed State](#collapsed-state)
8. [Responsive Behavior](#responsive-behavior)
9. [HTML Usage Examples](#html-usage-examples)
10. [Customization](#customization)
11. [Accessibility](#accessibility)
12. [Best Practices](#best-practices)

---

## Overview

The **Tree Menu Component** provides an intuitive, expandable navigation structure ideal for file explorers, documentation, or hierarchical content navigation.

---

## Features

- Expandable and collapsible folders
- Custom icons for folders and files
- Sticky positioning for persistent navigation
- Clear visual indicators of state (expanded/collapsed)
- Multiple nested folder levels

---

## Base Structure

Basic HTML structure:

```html
<ul class="tree-menu">
  <li data-type="folder">Folder
    <ul>
      <li data-type="file"><a href="#">File 1</a></li>
      <li data-type="folder">Subfolder
        <ul>
          <li data-type="file"><a href="#">File 1</a></li>
        </ul>
  </li>
</ul>
```

---

## Tree Menu Elements

### Folder Items

Represent expandable content sections:

```html
<li data-type="folder" class="expanded">Expanded Folder
  <ul>
    <li data-type="file">Nested File</li>
  </ul>
</li>
```

### File Items

Links directly to content:

```html
<li data-type="file">
  <a href="#">File Link</a>
</li>
```

---

## Tree Menu Variations

### Compact Variation

For tighter spacing and simplified styles:

```html
<ul class="tree-menu tree-menu--compact">
  <!-- compact structure -->
</ul>
```

---

## Interactive States

### Expanded State

Shows nested content:

```html
<li data-type="folder" class="expanded">Folder
  <ul>
    <!-- Content -->
  </ul>
</li>
```

### Collapsed State

```html
<li data-type="folder">Collapsed Folder</li>
```

---

## Responsive Behavior

Tree menu remains accessible and usable on smaller screens due to sticky positioning and adaptable font sizes.

---

## Icons & Indicators

Folder and file indicators are controlled by CSS:

- Folder collapsed: caret right
- Folder expanded: rotated caret
- File icon for visual distinction

---

## HTML Usage Examples

Complete tree menu example:

```html
<ul class="tree-menu">
  <li data-type="folder">Projects
    <ul>
      <li data-type="file"><a href="#">Project 1</a></li>
      <li data-type="folder" class="expanded">Archives
        <ul>
          <li data-type="file"><a href="#">2019</a></li>
          <li data-type="file"><a href="#">2020</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

---

## Customization

Customize colors, spacing, and icons using CSS variables:

```css
.tree-menu {
  --folder-icon-color: #007BFF;
  --file-icon-color: #6c757d;
}
```

---

## Accessibility

- Clearly label expandable and collapsible elements.
- Maintain adequate contrast and hover states.
- Provide keyboard navigation support.

---

## Best Practices

- Keep nesting logical and intuitive.
- Clearly indicate expandable and active items.
- Limit the depth of nesting to maintain clarity.

---

Use the Tree Menu Component effectively to enhance navigation clarity and content discoverability within your applications.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
