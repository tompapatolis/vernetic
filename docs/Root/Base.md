
# Base CSS Configuration

The `base.css` file defines your **global design variables** and foundational **body styling**, ensuring consistency across the entire UI.

---

### Table of Contents

- [Root Variables](#root-variables)
    - [Color Scheme](#color-scheme)
    - [Font Families](#font-families)
    - [Shadows & Effects](#shadows--effects)
    - [Layout Variables](#layout-variables)
- [Base Body Styling](#base-body-styling)

---

## Root Variables

CSS custom properties defined under `:root` to be reused throughout the app.

### Color Scheme

| Variable         | Description                            | 
| ---------------- | -------------------------------------- |
| `--color-scheme` | Defines the global color mode (`dark`) |
| `--text-color`   | Main text color (uses `--color-100`)   |
| `--bg-color`     | Background color (uses `--color-900`)  |

```css
color-scheme: var(--color-scheme);
```

---

### Font Families

| Variable         | Description                             | 
| ---------------- | --------------------------------------- |
| `--ff-body`      | Default font for paragraphs and content |
| `--ff-heading`   | Condensed font for headings             |
| `--ff-monospace` | Monospaced font for code or inline UI   |
| `--ff-count`     | Decorative font for numeric display     |
| `--line-height`  | Base line height for all text (`2`)     |

---

### Shadows & Effects

| Variable         | Purpose                                        | 
| ---------------- | ---------------------------------------------- |
| `--shadow`       | Standard box shadow                            |
| `--shadow-soft`  | Subtle shadow used for thumbnails, etc.        |
| `--shadow-focus` | Focus ring used for accessibility interactions |
| `--shadow-text`  | Text shadow for styled or decorative text      |

---

### Layout Variables

| Variable          | Description                    | 
| ----------------- | ------------------------------ |
| `--navbar-height` | Top navigation height (`60px`) |
| `--sidebar-width` | Sidebar width (`370px`)        |

---

## Base Body Styling

Global `body` styles that set typography, spacing, and layout context.

| Property           | Value                  | Description                                | 
| ------------------ | ---------------------- | ------------------------------------------ |
| `padding-top`      | `var(--navbar-height)` | Pushes content below the fixed navbar      |
| `font-family`      | `var(--ff-body)`       | Sets the base font                         |
| `font-size`        | `var(--fs-400)`        | Uses predefined font size scale            |
| `line-height`      | `var(--line-height)`   | Consistent vertical rhythm across elements |
| `color`            | `var(--text-color)`    | Global text color                          |
| `background-color` | `var(--bg-color)`      | Sets the page background color             |

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
