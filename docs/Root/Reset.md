# Vernetic Modern CSS Reset Documentation

## Table of Contents

1. [Universal Box-Sizing](#universal-box-sizing)
2. [Full Height Layout](#full-height-layout)
3. [Body Defaults](#body-defaults)
4. [Link Reset](#link-reset)
5. [Responsive Media Elements](#responsive-media-elements)
6. [Image Styling](#image-styling)
7. [Form Elements Reset](#form-elements-reset)
8. [Input & Select Defaults](#input-select-defaults)
9. [Textarea Styling](#textarea-styling)
10. [Submit Button Styling](#submit-button-styling)
11. [Chrome Autofill Styling](#chrome-autofill-styling)
12. [Table Reset](#table-reset)
13. [Button Reset and Interaction](#button-reset-and-interaction)
14. [Responsive Content Handling](#responsive-content-handling)
15. [Text Overflow Protection](#text-overflow-protection)
16. [Editable Content Focus Reset](#editable-content-focus-reset)

---

## Universal Box-Sizing

Applies consistent box-sizing across all elements:

- **Selectors**: `*`, `*::before`, `*::after`
- **Effects**:
    - Sets `box-sizing: border-box`
    - Removes default margins and paddings

---

## Full Height Layout

Ensures the page occupies the full viewport height:

- **Selectors**: `html`, `body`
- **Effects**: `min-height: 100vh`

---

## Body Defaults

Sets default typography and resets font weight:

- **Selectors**: `body`
- **Effects**:
    - Font size: `1rem`
    - Font weight: `400`
    - Line height: `1.5`

---

## Link Reset

Removes underline styling from links:

- **Selectors**: `a`
- **Effects**: `text-decoration: none`

---

## Responsive Media Elements

Ensures media elements are responsive and don't overflow:

- **Selectors**: `img`, `picture`, `video`
- **Effects**:
    - `display: block`
    - `max-width: 100%`
    - `height: auto`

---

## Image Styling

Fallback styling for images:

- **Selectors**: `img`
- **Effects**:
    - `background-size: cover`
    - `background-position: center`
    - `vertical-align: middle`

---

## Form Elements Reset

Standardizes font inheritance and sizing for forms:

- **Selectors**: `input`, `textarea`, `button`, `select`
- **Effects**:
    - Inherits fonts (`font: inherit`)
    - Prevents width issues (`max-width: 100%`)

---

## Input & Select Defaults

Removes default browser styles:

- **Selectors**: `input`, `select`
- **Effects**:
    - `width: 100%`
    - Removes browser defaults (`appearance: none`, `border-radius: 0`, `outline: none`)

---

## Textarea Styling

Ensures consistency and usability for textareas:

- **Selectors**: `textarea`
- **Effects**:
    - No borders (`border: none`)
    - No outline or shadow (`outline: none`, `box-shadow: none`)
    - No resize (`resize: none`)

---

## Submit Button Styling

Prevents submit buttons from defaulting to full width:

- **Selectors**: `input[type="submit"]`
- **Effects**: `width: auto`

---

## Chrome Autofill Styling

Prevents unwanted autofill background and text colors in Chrome:

- **Selectors**: Chrome autofill pseudo-selectors
- **Effects**:
    - Custom background and text fill colors

---

## Table Reset

Ensures clean and consistent table borders:

- **Selectors**: `table`
- **Effects**: `border-collapse: collapse`

---

## Button Reset and Interaction

Removes default button styles and ensures accessibility:

- **Selectors**: `button`, `button:focus`
- **Effects**:
    - Removes outline and border
    - Transparent background
    - Inherits text color
    - Pointer cursor (`cursor: pointer`)

---

## Responsive Content Handling

Ensures responsive behavior for various embedded elements:

- **Selectors**: `img`, `iframe`, `table`
- **Effects**: `max-width: 100%`

---

## Text Overflow Protection

Prevents text from breaking layouts:

- **Selectors**: `p`, `a`, `table`
- **Effects**: `overflow-wrap: anywhere`

---

## Editable Content Focus Reset

Removes default browser outlines from editable content:

- **Selectors**: `[contenteditable]:focus`
- **Effects**: `outline: 0`

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
