# Drop Image Component Documentation

Comprehensive documentation for the **Drop Image Component**, providing an intuitive drag-and-drop area designed specifically for seamless image uploads.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Component Structure](#component-structure)
    - [`.drop-image`](#drop-image)
    - [`.drop-image__view`](#drop-image__view)
    - [`.drop-image--pulsate`](#drop-image--pulsate)
4. [Usage](#usage)
    - [HTML Example](#html-example)
5. [Interactions and Animations](#interactions-and-animations)
    - [Hover Interaction](#hover-interaction)
    - [Pulsating Animation](#pulsating-animation)
6. [Customization](#customization)
7. [Accessibility Considerations](#accessibility-considerations)
8. [Best Practices](#best-practices)

---

## Overview

The **Drop Image Component** provides users with a visually appealing and interactive drag-and-drop interface for uploading images efficiently and intuitively.

---

## Features

- Clear visual indication for drag-and-drop interactions
- Interactive hover state
- Pulsating border animation to indicate active drop zones
- Customizable inner content display
- Responsive and consistent aspect ratio

---

## Component Structure

### `.drop-image`

- Main container with a dashed border indicating upload area
- Enforces a consistent `16:9` aspect ratio

### `.drop-image__view`

- Inner container displaying dropped images or placeholder content
- Supports background images centered and fully covered

### `.drop-image--pulsate`

- Provides animated visual feedback indicating an active upload area
- Solid border style replacing default dashed style

---

## Usage

### HTML Example

```html
<div class="drop-image drop-image--pulsate">
  <div class="drop-image__view">
    Drag & Drop an Image Here
  </div>
</div>
```

---

## Interactivity

### Hover Effect

Mouse-over changes cursor to pointer, signaling interactivity:

```css
.drop-image:hover {
  cursor: pointer;
}
```

### Pulsating Animation

Indicate active drop zone:

```css
.drop-image--pulsate {
  border-style: solid;
  animation: drop-image-pulse 1s infinite alternate;
}

@keyframes drop-image-pulsate {
  from { border-color: var(--color-600); }
  to { border-color: var(--color-highlight); }
}
```

---

## Usage

### HTML Example

```html
<div class="drop-image drop-image--pulsate">
  <div class="drop-image__view" style="background-image: url('image.jpg');">
    Drop an image here or click to upload
  </div>
</div>
```

---

## Customization

Customize via CSS variables:

- Border color: `var(--color-600)`
- Background color: `var(--color-950)`
- Pulsating animation colors

```css
.drop-image {
  border-color: var(--custom-border-color);
}
```

---

## Accessibility

- Include descriptive text within `.drop-image__view` for clarity.
- Ensure contrast and readability of instructional texts.

---

## Best Practices

- Clearly indicate drag-and-drop functionality visually and textually.
- Ensure adequate size and clarity for the interactive area.
- Provide clear feedback after successful uploads.

---

Leverage the Drop Image Component to enhance image upload experiences seamlessly.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
