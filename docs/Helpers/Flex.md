# Flex Utilities

Detailed documentation for **Flex Utilities**, providing classes for creating flexible layouts using CSS Flexbox.

---

## Table of Contents

1. [Overview](#overview)
2. [Flex Container Types](#flex-container-types)
3. [Flex Direction Utilities](#flex-direction-utilities)
4. [Flex Wrapping Utilities](#flex-wrapping-utilities)
5. [Flex Alignment](#flex-alignment)
6. [Flex Utility Classes](#flex-utility-classes)
7. [HTML Usage Examples](#html-usage-examples)

---

## Overview

**Flex Utilities** simplify the implementation of CSS Flexbox layouts, allowing precise control of alignment, direction, wrapping, and spacing.

---

## Flex Container Types

| Class          | Description                 | 
| -------------- | --------------------------- |
| `.flex`        | Block-level flex container  |
| `.flex-inline` | Inline-level flex container |

---

## Flex Direction Utilities

| Class          | Description                 | 
| -------------- | --------------------------- |
| `.flex-row`    | Horizontal layout (default) |
| `.flex-column` | Vertical layout             |

---

## Flex Wrapping Utilities

| Class        | Description                              | 
| ------------ | ---------------------------------------- |
| `.flex-wrap` | Allows items to wrap onto multiple lines |

---

## Flex Alignment

| Class          | Description                        |
| -------------- | ---------------------------------- |
| `.flex-center` | Center horizontally and vertically |
| `.flex-space`  | Even spacing between items         |
| `.flex-vc`     | Vertically center items            |
| `.flex-vt`     | Align items to the top             |
| `.flex-vb`     | Align items to the bottom          |
| `.flex-hc`     | Horizontally center items          |
| `.flex-hr`     | Align items to the right           |

---

## Flex Utility Classes

| Class            | Description                                | 
| ---------------- | ------------------------------------------ |
| `.flex-v`        | Vertically centered flexbox with small gap |
| `.flex-self-end` | Align self to end within flex container    |
| `.flex-1`        | Item takes all available flex space        |

---

## HTML Usage Examples

### Basic Flex Container

```html
<div class="flex flex-center">
    <div>Centered Item</div>
</div>
```

### Vertical Layout

```html
<div class="flex flex-column">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

### Flex with Wrapping

```html
<div class="flex flex-wrap">
    <div>Item A</div>
    <div>Item B</div>
    <div>Item C</div>
</div>
```

### Align to Right

```html
<div class="flex flex-hr">
    <div>Right-Aligned Item</div>
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
