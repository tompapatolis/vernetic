# Tile Components Documentation

Detailed documentation for the versatile **Tile Components**, designed to provide engaging layouts and clear presentation across various content types.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Base Structure](#base-structure)
4. [Tile Variations](#tile-variations)
    - [Standard Tile](#standard-tile)
    - [Counter Tile](#counter-tile)
    - [Numbered Tile](#numbered-tile)
    - [Infogram Tile](#infogram-tile)
    - [Tile Type](#tile-type)
    - [Colorful Tiles](#colorful-tiles)
    - [Base Tile](#base-tile)
5. [Responsive Behavior](#responsive-behavior)
6. [HTML Usage Examples](#html-usage-examples)
7. [Customization](#customization)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)

---

## Overview

**Tile Components** provide structured, responsive content display solutions for dashboards, summaries, statistics, and informational blocks.

---

## Features

- Flexible layouts using Flexbox and CSS Grid
- Automatic numbering with CSS counters
- Gradient and colored background options
- Highly responsive design

---

## Base Structure

Example of basic tile structure:

```html
<div class="tile">
  <span>Main Content</span>
</div>
```

---

## Tile Variations

### Standard Tile

Centered content within a styled tile:

```html
<div class="tile">
  <span>Standard Tile</span>
</div>
```

### Counter Tile

Two-span layout for number and description:

```html
<div class="tile tile-cnt">
  <span>150</span>
  <span>Followers</span>
</div>
```

### Numbered Tile

Automatically numbered tiles:

```html
<div class="numbered-tile">
  <div class="tile">Tile 1</div>
  <div class="tile">Tile 2</div>
</div>
```

### Infogram Tile

Grid-based informational tile:

```html
<div class="tile-infogram">
  <img src="icon.png" class="tile-infogram__img">
  <span class="tile-infogram__cell-1">Title</span>
  <span class="tile-infogram__cell-2">1234</span>
  <span class="tile-infogram__cell-3">Description</span>
</div>
```

### Tile Type

Multi-span alternative layout:

```html
<div class="tile tile-type">
  <span>Label</span>
  <span>42</span>
  <span>Description</span>
</div>
```

### Colorful Tiles

Gradient background tiles (auto-colored by position):

```html
<div class="tile tile-colorful">
  <span>Main Stat</span>
  <span>Description</span>
</div>
```

### Base Tile

Tile with structured header and body:

```html
<div class="base-tile">
  <div class="base-tile__title">Header</div>
  <div class="base-tile__body">Content</div>
</div>
```

---

## Responsive Behavior

Automatically adjusts content and layout for optimal mobile usability:

```css
@media(max-width: 750px) {
  .tile { padding: 0.75rem; font-size: smaller; }
}
```

---

## HTML Usage Examples

Complete tile examples:

```html
<!-- Numbered Tiles Example -->
<div class="numbered-tile">
  <div class="tile">First</div>
  <div class="tile">Second</div>
</div>

<!-- Infogram Tile Example -->
<div class="tile-infogram">
  <img src="info.png" class="tile-infogram__img">
  <span class="tile-infogram__cell-1">Users</span>
  <span class="tile-infogram__cell-2">1500</span>
  <span class="tile-infogram__cell-3">Active Today</span>
</div>
```

---

## Customization

Customize using CSS variables:

- Font size and family (`var(--fs-400)`, `var(--ff-heading)`)
- Color and gradients (`var(--color-red-500)`, `var(--color-blue-700)`, etc.)

---

## Accessibility

- Ensure adequate contrast for readability.
- Provide alternative text for informational images.

---

## Best Practices

- Use tiles consistently across interfaces.
- Limit text content to maintain clarity.
- Choose colors that complement the overall design scheme.

---

Leverage Tile Components to display structured information clearly and attractively across your applications.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
