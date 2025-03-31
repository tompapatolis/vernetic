# Modal Component

The `modal` component provides a flexible and animated dialog for displaying overlays, forms, confirmations, and more. It includes structured header and footer sections, an optional overlay backdrop, and a smooth bounce animation when triggered.

---

### Table of Contents

- [Overview](#overview)
- [Structure](#structure)
- [Modifiers](#modifiers)
- [Overlay Behavior](#overlay-behavior)
- [Animation](#animation)
- [Usage Example](#usage-example)

---

## Overview

| Class                   | Description                                              | 
| ----------------------- | -------------------------------------------------------- |
| `.modal`                | Base container for the modal dialog                      |
| `.modal--show`          | Makes the modal visible and triggers bounce animation    |
| `.modal__header`        | Optional header section with title and actions           |
| `.modal__footer`        | Optional footer for buttons or metadata                  |
| `.modal__overlay`       | Fullscreen background overlay (used alongside the modal) |
| `.modal__overlay--show` | Makes the overlay visible                                |

---

## Structure

The modal is hidden by default (`visibility: hidden`, `opacity: 0`) and centered on the screen using `transform: translate(-50%, -60%)`. It uses a **bounce animation** when shown to give a subtle motion effect.

The header and footer sections provide semantic structure for layout consistency.

---

## Modifiers

These utility classes provide optional enhancements to customize the appearance and behavior of your modal:

| Class            | Effect                                                      | 
| ---------------- | ----------------------------------------------------------- |
| `.modal--show`   | Shows the modal with animation                              |
| `.modal__title`  | Stylized title inside the header                            |
| `.modal__footer` | Optional footer for confirm/cancel actions or extra content |

---

## Overlay Behavior

The `.modal__overlay` class creates a semi-transparent dark background behind the modal.  
This overlay is hidden by default and becomes visible by adding `.modal__overlay--show`.

- Uses `transition: opacity` for fade-in/fade-out
- Helps isolate modal focus and darken the background

---

## Animation

The modal uses a keyframe animation called `bounce-modal` which scales it in from `0.75` to `1`:

```scss
@keyframes bounce-modal {
    from { transform: scale3d(0.75, 0.75, 0.75) translate(-50%, -60%); }
    to   { transform: scale3d(1, 1, 1) translate(-50%, -60%); }
}
```

This animation is applied when `.modal--show` is added.

---

## Usage Example

```html
<div class="modal modal--show" role="dialog" aria-modal="true">
    <div class="modal__header">
        <h3 class="modal__title">Modal Title</h3>
        <button class="btn btn-600">×</button>
    </div>

    <div class="modal__body">
        <p>This is the modal content.</p>
    </div>

    <div class="modal__footer">
        <button class="btn">Cancel</button>
        <button class="btn btn-red-300">Save</button>
    </div>
</div>

<div class="modal__overlay modal__overlay--show"></div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
