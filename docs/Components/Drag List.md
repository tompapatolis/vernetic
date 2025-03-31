# Draggable Sortable List

This module enables drag-and-drop reordering of `.draglist__item` elements inside a `.draglist` container. It provides **real-time DOM manipulation** and **visual feedback** using only native browser drag events.

---

### Table of Contents

- [Purpose](#purpose)
- [Requirements](#requirements)
- [Behavior](#behavior)
- [How It Works](#how-it-works)
- [Usage](#usage)

---

## Purpose

- Allows users to rearrange list items by dragging and dropping
- Applies styling classes for active feedback
- Reorders DOM elements live as the user drags

---

## Requirements

- Container must have the class `.draglist`
- Items must have the class `.draglist__item`
- Each item must include `draggable="true"`

If no `.draglist` is found on the page, the script exits silently.

---

## Behavior

| Event       | Effect                                                                             | 
| ----------- | ---------------------------------------------------------------------------------- |
| `dragstart` | Adds `.draglist__dragging` to the item                                             |
| `dragend`   | Removes `.draglist__dragging` from the item                                        |
| `dragover`  | Continuously calculates the closest drop target and reorders the list in real time |

---

## How It Works

1. Grabs all `.draglist__item` elements.
2. On `dragstart`, highlights the current item.
3. On `dragover`, uses the vertical mouse position (`e.clientY`) to determine where the dragged item should be inserted.
4. Uses `insertBefore()` to move the item in the DOM.
5. On `dragend`, removes the dragging class.

---

## Usage

Wrap your sortable items in a container with the `.draglist` class. Each item should have the `.draglist__item` class and include the `draggable="true"` attribute. You can optionally add a `data-id` for tracking or saving the new order.

```html
<div class="draglist">
    <div class="draglist__item" draggable="true" data-id="1">Item 1</div>
    <div class="draglist__item" draggable="true" data-id="2">Item 2</div>
</div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | true   |
| JavaScript Dependency    | true   |
| Icon Dependency          | false  | 
