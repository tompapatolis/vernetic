# Tiles

The tile component system offers a wide range of layout patterns, ideal for dashboards, summaries, info panels, metrics, and content previews. It supports CSS Grid, Flexbox, responsive behavior, counters, color gradients, and more.

---

## Table of Contents

- [Overview](#overview)
- [Standard Tile](#standard-tile)
- [Counter Tile](#counter-tile)
- [Auto-Numbered Tile](#auto-numbered-tile)
- [Infogram Tile](#infogram-tile)
- [Typed Tile](#typed-tile)
- [Colorful Tiles](#colorful-tiles)
- [Base Tile](#base-tile)
- [Class Reference](#class-reference)

---

## Overview

Tiles are reusable building blocks that adapt to a variety of content types. Each tile is built using semantic utility classes that control structure, spacing, colors, and layout. You can combine tile classes with CSS Grid or Flexbox containers.

---

## Standard Tile

A basic centered tile with padding, border, and shadow. Good for standalone stats or icons.

```html
<div class="tile">
    <span>123</span>
    <span>Visitors</span>
</div>
```

---

## Counter Tile

A variant of `.tile` for simple metric counters. Designed for two stacked spans: a number and a label.

```html
<div class="tile tile-cnt">
    <span>87</span>
    <span>Comments</span>
</div>
```

---

## Auto-Numbered Tile

Automatically numbers each child `.tile` or `.tile-infogram` using CSS counters.

```html
<div class="countered-tile">
    <div class="tile">Alpha</div>
    <div class="tile">Bravo</div>
    <div class="tile">Charlie</div>
</div>
```

Adds a diagonal badge in the top-right corner of each tile showing its number.

---

## Infogram Tile

A grid-based layout for rich data or content. Designed to show an image and multiple data fields.

```html
<div class="tile-infogram">
    <img class="tile-infogram__img" src="user.png" alt="">
    <span class="tile-infogram__cell-1">User</span>
    <span class="tile-infogram__cell-2">Jane Doe</span>
    <span class="tile-infogram__cell-3">Active Since 2023</span>
</div>
```

Perfect for user cards, feature highlights, or profile tiles.

---

## Typed Tile

A tile format with three stacked spans, useful for combining labels, large numbers, and descriptions.

```html
<div class="tile tile-type">
    <span>Status</span>
    <span>42%</span>
    <span>Uptime</span>
</div>
```

---

## Colorful Tiles

A visual variation for `.tile` that applies gradient backgrounds and color theming. Each child tile uses `:nth-child()` for unique styles.

```html
<div class="grid grid-col-4 gap-1">
    <div class="tile tile-colorful">
        <span>Users</span>
        <span>1,245</span>
    </div>
    <div class="tile tile-colorful">
        <span>Downloads</span>
        <span>3,819</span>
    </div>
    <div class="tile tile-colorful">
        <span>Issues</span>
        <span>27</span>
    </div>
    <div class="tile tile-colorful">
        <span>Events</span>
        <span>93</span>
    </div>
</div>
```

---

## Base Tile

A styled container tile with a title and content body. Useful for cards, sections, or blocks of UI.

```html
<div class="base-tile">
    <div class="base-tile__title">Project Summary</div>
    <div class="base-tile__body">
        <p>This section contains the current status of your project including metrics, logs, and related events.</p>
    </div>
</div>
```

---

## Class Reference

| Class                        | Description                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| `.tile`                      | Centered content block with padding and shadow                |
| `.tile-cnt`                  | Counter tile with large number and label spans                |
| `.tile-type`                 | Variant with three stacked values (label, stat, note)         |
| `.countered-tile`            | Container that auto-numbers child tiles using CSS counters    |
| `.numbered-tile`             | Alias for `.countered-tile`                                   |
| `.tile-infogram`             | Grid-based tile with image + multi-cell layout                |
| `.tile-colorful`             | Tile with colorful gradient backgrounds, styled per nth-child |
| `.base-tile`                 | Block tile with a title header and content body               |
| `.base-tile__title`          | Title/header section inside `.base-tile`                      |
| `.base-tile__body`           | Main content area inside `.base-tile`                         |
| `.tile-infogram__img`        | Image aligned on the left side of `.tile-infogram`            |
| `.tile-infogram__cell-1/2/3` | Grid cells for name, value, description                       |

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
