# Draglist Component Documentation

Detailed documentation for the **Draglist Component**, a flexible and intuitive drag-and-drop interface element designed to enable easy item sorting and interactive layout management.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Component Structure](#component-structure)
    - [`.draglist`](#draglist)
    - [`.draglist__item`](#draglist__item)
    - [`.draglist__dragging`](#draglist__dragging)
    - [`.draglist--saved`](#draglist--saved)
    - [Sortable Pages Layout](#sortable-pages-layout)
4. [Usage](#usage)
    - [HTML Example](#html-example)
5. [Customization](#customization)
6. [Interaction States](#interaction-states)
    - [Dragging State](#dragging-state)
    - [Saved State](#saved-state)
7. [Accessibility](#accessibility)
8. [Best Practices](#best-practices)

---

## Overview

The **Draglist Component** provides an intuitive, visually clear system for users to rearrange items through drag-and-drop actions, enhancing interactivity and organization.

---

## Features

- Draggable and sortable items
- Visual feedback during interactions
- Specific styles for active dragging and saved states
- Adjustable layouts for specialized uses
- Grid-based flexible layout

---

## Component Structure

### `.draglist`

- Container for draggable items
- Provides a responsive, flexible layout

### `.draglist__item`

- Individual draggable elements
- Grid-based layout with defined columns

### `.draglist__dragging`

- Applied to the actively dragged item
- Provides visual feedback during dragging

### `.draglist--saved`

- Outlines saved items clearly for visual confirmation

### Layout Adjustment for Sortable Pages

- `.draglist.sortable-pages` offers a simplified two-column layout

---

## Usage

### HTML Example

```html
<ul class="draglist">
  <li class="draglist__item">Item 1</li>
  <li class="draglist__item draglist--saved">Saved Item</li>
  <li class="draglist__item draglist__dragging">Currently Dragging</li>
</ul>
```

Sortable Pages variant:

```html
<ul class="draglist sortable-pages">
  <li class="draglist__item">Sortable Item 1</li>
</ul>
```

---

## Customization

- Modify colors and fonts easily using CSS variables:
    - Font family: `--ff-heading`
    - Colors: `var(--color-green-300)`, `var(--color-green-600)` etc.
- Adjust grid layout as per content requirements:

```css
.draglist__item {
  grid-template-columns: auto 150px 1fr;
}
```

---

## Interaction States

### Dragging State

Active drag items highlighted with `.draglist__dragging`:

```css
.draglist__dragging {
  background-color: var(--highlight-color);
}
```

### Saved State

Clearly marks saved state:

```css
.draglist--saved {
  outline: 2px solid var(--color-green-300);
  outline-offset: 2px;
}
```

---

## Best Practices

- Clearly indicate draggable items with consistent styles.
- Provide visual feedback during dragging and after save actions.
- Ensure draggable areas are adequately sized for usability.

---

Implement these practices to ensure a user-friendly and effective sorting interface.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
