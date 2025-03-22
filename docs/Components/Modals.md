# Modal Component Documentation

Detailed documentation for the **Modal Component**, providing a versatile and interactive dialog interface designed to capture user attention and present focused information.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Base Structure](#base-structure)
4. [Modal Visibility](#modal-visibility)
5. [Modal Sections](#modal-sections)
    - [Header](#modal-header)
    - [Footer](#modal-footer)
6. [Modal Overlay](#modal-overlay)
7. [Animations](#animations)
8. [Usage Examples](#usage-examples)
9. [Customization](#customization)
10. [Accessibility](#accessibility)
11. [Best Practices](#best-practices)

---

## Overview

The **Modal Component** provides an interactive dialog interface, commonly used for displaying contextual content, confirmations, or forms, overlaying the main application content.

---

## Features

- Visually engaging animations (bounce effect)
- Structured layout with header, body, and footer sections
- Background overlay for focus and clarity
- Fully responsive design and positioning

---

## Modal Visibility

Control modal visibility with the `.modal--show` class:

```html
<div class="modal modal--show">
  <!-- Content here -->
</div>
```

---

## Base Structure

Basic HTML structure:

```html
<div class="modal">
  <div class="modal__header">
    <h3 class="modal__title">Modal Title</h3>
    <button class="modal__close">&times;</button>
  </div>
  <div class="modal__body">
    <!-- Content here -->
  </div>
  <div class="modal__footer">
    <button class="btn">Close</button>
    <button class="btn btn-primary">Save</button>
  </div>
</div>
```

---

## Modal Sections

### Modal Header

- Class: `.modal__header`
- Contains title and optional close button

```html
<div class="modal__header">
  <h3 class="modal__title">Example Title</h3>
</div>
```

### Modal Footer

- Class: `.modal__footer`
- Typically used for action buttons

```html
<div class="modal__footer">
  <button class="btn">Cancel</button>
  <button class="btn btn-primary">Submit</button>
</div>
```

---

## Modal Overlay

Adds background dimming effect:

```html
<div class="modal__overlay modal__overlay--show"></div>
```

---

## Animations

Bounce animation when modal appears:

```css
.modal--show {
  animation: bounce-modal 150ms cubic-bezier(0.280, 0.840, 0.420, 1);
}

@keyframes bounce-modal {
  from { transform: scale3d(0.75, 0.75, 0.75) translate(-50%, -60%); }
  to { transform: scale3d(1, 1, 1) translate(-50%, -60%); }
}
```

---

## Usage Examples

Full modal example with overlay:

```html
<div class="modal modal--show">
  <div class="modal__header">
    <h3 class="modal__title">Example Modal</h3>
    <button class="modal__close">&times;</button>
  </div>
  <div class="modal__body">
    <p>This is a modal dialog example.</p>
  </div>
  <div class="modal__footer">
    <button class="btn">Cancel</button>
    <button class="btn btn-primary">Confirm</button>
  </div>
</div>
<div class="modal__overlay modal__overlay--show"></div>
```

---

## Customization

Easily customize via CSS variables:

- Box shadow, colors, animation duration, and easing

```css
.modal {
  --shadow: 0 10px 20px rgba(0,0,0,0.25);
}
```

---

## Accessibility

- Ensure modal dialog is keyboard navigable.
- Clearly label buttons and actions.
- Trap focus within the modal when active.

---

## Best Practices

- Use modals sparingly for critical interactions.
- Clearly indicate how to close or submit actions.
- Provide an overlay to focus user attention effectively.

---

Use this Modal Component effectively to enhance user interactions with clear, structured dialogs.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
