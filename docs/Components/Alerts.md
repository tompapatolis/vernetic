# Alert Component Documentation

This documentation describes the implementation, usage, and customization options of the **Alert Component**, a flexible notification UI component designed for displaying contextual messages to users.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Usage](#usage)
    - [Basic Structure](#basic-structure)
    - [HTML Example](#html-example)
4. [Variants](#variants)
    - [Info](#info)
    - [Success](#success)
    - [Warning](#warning)
5. [Alignment](#alignment)
    - [Right-Aligned](#right-aligned)
6. [Customization](#customization)
    - [CSS Variables](#css-variables)
    - [Icon Styling](#icon-styling)
7. [Component Structure](#component-structure)
    - [`.alert`](#alert)
    - [`.alert__icon`](#alert__icon)
    - [`.alert__body`](#alert__body)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)
10. [Examples](#examples)

---

## Overview

The **Alert Component** provides an intuitive and visually distinctive way to present information, success confirmations, or warnings. It supports easy customization and alignment options.

---

## Features

- Multiple contextual variants (`info`, `success`, `warning`)
- Easy alignment options (including right-alignment)
- Flexible icon and content area
- Responsive design
- Easily customizable through CSS variables and structured styles

---

## Usage

### Basic Structure

```html
<div class="alert alert--info">
  <div class="alert__icon">
    <svg class="svg-icon"><!-- icon SVG --></svg>
  </div>
  <div class="alert__body">
    <h4>Information</h4>
    <p>This is an info alert message.</p>
  </div>
</div>
```

### HTML Example

```html
<!-- Success Alert -->
<div class="alert alert--success">
  <div class="alert__icon">
    <svg class="svg-icon"><!-- success SVG --></svg>
  </div>
  <div class="alert__body">
    <h4>Success!</h4>
    <p>Your changes have been saved.</p>
  </div>
</div>
```

---

## Variants

The component supports three predefined variants:

### Info

- Class: `.alert--info`
- Purpose: General informational messages
- Icon Background: `var(--color-800)`

### Success

- Class: `.alert--success`
- Purpose: Confirmation of successful operations
- Icon Background: `var(--color-green-600)`

### Warning

- Class: `.alert--warning`
- Purpose: Alerts or critical messages
- Icon Background: `var(--color-red-600)`

---

## Alignment

### Right-Aligned

To align an alert to the right side of its container, apply:

```html
<div class="alert alert--warning alert--right">
  <!-- Content -->
</div>
```

This uses the CSS property `margin-left: auto;`.

---

## Customization

### CSS Variables

Customize alert appearance through CSS variables:

- Text Color: `--color-100`, `--color-200`
- Icon Backgrounds: `--color-800`, `--color-green-600`, `--color-red-600`
- Font Size: `--fs-300`

### Icon Styling

Icons within `.alert__icon`:

- Size: `width: 2.5em; height: 2.5em`
- Color: `rgba(255,255,255,.95)`

---

## Component Structure

### `.alert`

- Base styling for alert container
- Flexbox layout
- Rounded corners and border styling

### `.alert__icon`

- Container for alert icons
- Provides consistent padding and alignment

### `.alert__body`

- Container for alert text and content
- Styling for paragraphs and headings (h1-h5)

---

## Accessibility

Ensure alerts are accessible by:

- Using semantic headings within `.alert__body`
- Including `aria-label` for icons (where applicable)

---

## Best Practices

- Limit alerts to concise messages.
- Clearly differentiate between alert types using consistent iconography.
- Avoid excessive use to maintain user attention.

---

## Examples

See the usage examples above to create and customize alerts effectively in your projects.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
