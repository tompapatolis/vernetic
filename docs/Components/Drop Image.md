# Drop Image Component

The `drop-image` component provides a styled drag-and-drop area for uploading or previewing images. It supports hover effects, flexible layout, and optional animation for active states.

---

### Table of Contents

- [Overview](#overview)
- [Structure](#structure)
- [Modifiers](#modifiers)
- [Features](#features)
- [Usage](#usage)

---

## Overview

| Class                  | Description                                      | 
| ---------------------- | ------------------------------------------------ |
| `.drop-image`          | Base container with dashed border and 16:9 ratio |
| `.drop-image__view`    | Inner content area (text, icons, preview)        |
| `.drop-image--pulsate` | Optional animated border effect                  |

---

## Structure

The component is composed of:

- A block-level container (`.drop-image`)
- An inner content view (`.drop-image__view`) for instructions, icons, or background preview

It uses `aspect-ratio: 16 / 9` for consistent visual dimensions.

---

## Modifiers

| Class                  | Effect                                            | 
| ---------------------- | ------------------------------------------------- |
| `.drop-image--pulsate` | Adds animated border color for attention/feedback |
| `:hover`               | Adds a pointer cursor for interactivity           |

---

## Features

- Responsive and accessible drag zone
- Dashed border with optional animated pulse
- Centered content using Flexbox
- Background image preview via `background-image` on `.drop-image__view`

---

## Usage

To use the component, wrap your content in `.drop-image` and include a `.drop-image__view` inside. You can apply background styling or upload previews via JavaScript.

```html
<div class="drop-image drop-image--pulsate">
    <div class="drop-image__view">
        <svg class="svg-icon svg-icon-xl" aria-hidden="true">
            <use href="#upload"></use>
        </svg>
        <span>Drop your image here</span>
    </div>
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
