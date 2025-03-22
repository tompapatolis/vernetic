# CSS/Sass Utility Classes Documentation

## Table of Contents

1. [Aspect Ratio Utilities](#aspect-ratio-utilities)
2. [Events and Interactivity](#events-and-interactivity)
    - [Disabled Elements](#disabled-elements)
    - [Text Selection and Pointer Events](#text-selection-and-pointer-events)
3. [Hiding Elements](#hiding-elements)
    - [Completely Hidden](#completely-hidden)
    - [Responsive Hiding](#responsive-hiding)
    - [Invisible Utility](#invisible-utility)
4. [Display Utilities](#display-utilities)
5. [Shadow Utility](#shadow-utility)
6. [Border Radius Utilities](#border-radius-utilities)
7. [SVG Icon Utilities](#svg-icon-utilities)
8. [Positioning Utilities](#positioning-utilities)
9. [Overlay Utility](#overlay)
10. [Thumbnail Utility](#thumbnail)
11. [Border Color Utilities](#border-color-utilities)

---

## Aspect Ratio Utilities

Provides CSS classes to set commonly used aspect ratios on elements.

| Class            | Aspect Ratio | Description           | 
| ---------------- | ------------ | --------------------- |
| `.aspect-1`      | 1:1          | Square                |
| `.aspect-169`    | 16:9         | Widescreen Video (HD) |
| `.aspect-32`     | 3:2          | Photography Standard  |
| `.aspect-43`     | 4:3          | Legacy TV/Image       |
| `.aspect-74`     | 7:4          | Wide Presentation     |
| `.aspect-golden` | 1.618:1      | Golden Ratio          |

---

## Events and Interactivity

### Disabled Elements

- `.disabled`: Makes elements non-interactive with reduced opacity.

### Text Selection and Pointer Events

| Class        | Effect                             | 
| ------------ | ---------------------------------- |
| `.no-select` | Disables text selection            |
| `.no-events` | Completely disables pointer events |

---

## Hiding Elements

### Completely Hidden

- `.hidden`: Completely hides elements and removes them from the layout (`display: none`).

### Responsive Hide Utilities

| Class       | Hidden on viewport size             | 
| ----------- | ----------------------------------- |
| `.hide-lg`  | ≤1200px (Large Screens and Smaller) |
| `.hide-md`  | ≤990px (Medium Screens and Smaller) |
| `.hide-sm`  | ≤750px (Small Screens and Smaller)  |
| `.hide-llg` | ≥1201px (Larger than Large Screens) |
| `.hide-lmd` | ≥991px (Larger than Medium Screens) |
| `.hide-lsm` | ≥751px (Larger than Small Screens)  |

- `.invisible`: Hides element visually but retains space and layout.

---

## Display Utilities

| Class               | Display Property | 
| ------------------- | ---------------- |
| `.display-block`    | `block`          |
| `.display-contents` | `contents`       |
| `.display-inline`   | `inline`         |
| `.display-table`    | `table`          |
| `.display-none`     | `none`           |

---

## Shadow Utility

- `.shadow`: Adds a predefined shadow effect (`var(--shadow)`).

---

## Border Radius Utilities

| Class      | Radius Value           | 
| ---------- | ---------------------- |
| `.br-0125` | 0.125rem               |
| `.br-025`  | 0.25rem                |
| `.br-0375` | 0.375rem               |
| `.br-05`   | 0.5rem                 |
| `.br-065`  | 0.65rem                |
| `.br-075`  | 0.75rem                |
| `.br-1`    | 1rem                   |
| `.br-pill` | 9999px (Fully Rounded) |

---

## SVG Icon Utilities

Sets icon size based on `em` unit:

| Class          | Dimensions          | 
| -------------- | ------------------- |
| `.svg-icon`    | 1em x 1em (default) |
| `.svg-icon-md` | 1.375em             |
| `.svg-icon-lg` | 1.5em               |
| `.svg-icon-xl` | 1.75em              |
| `.svg-icon-2x` | 2em                 |
| `.svg-icon-3x` | 3em                 |
| `.svg-icon-4x` | 4em                 |
| `.svg-icon-5x` | 5em                 |

---

## Positioning Utilities

| Class           | Positioning Effect                            | 
| --------------- | --------------------------------------------- |
| `.pos-relative` | Relative positioning (preserves flow)         |
| `.pos-absolute` | Absolute positioning (removes from flow)      |
| `.pos-sticky`   | Sticky positioning (based on scroll position) |

---

## Overlay Utility

- `.overlay`: Creates a fixed fullscreen overlay with fade-in transition.
- `.overlay.show`: Makes the overlay visible (`visibility: visible` and `opacity: 1`).

---

## Border Color Utilities

Dynamically generated border color classes using predefined color shades:

- `.bt-[shade]`: Applies top border.
- `.bb-[shade]`: Applies bottom border.

| Available Shades                                      | 
| ----------------------------------------------------- |
| `50`, `100`, `200`, `300`, `400`, `500`, `600`, `950` |
| `a100`, `a200`, `a400`, `a700`                        |

_Example_: `.bt-200` applies a border-top with the color shade `var(--color-200)`.

---

## Thumbnail Utility

- `.thumb`: Applies predefined rounded corners, shadow, and border styling to thumbnails or image previews.

---

> **Note:** Ensure CSS variables (`--shadow`, `--shadow-soft`, and `--color-[shade]`) are defined in your global stylesheet for best results.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
