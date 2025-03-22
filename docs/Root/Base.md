
# Root CSS Variables Documentation

## Table of Contents

1. [Color Scheme](#color-scheme)
2. [Font Families](#font-families)
3. [Shadow and Effects](#shadow-and-effects)
4. [Navbar and Sidebar Dimensions](#navbar-and-sidebar-dimensions)
5. [Basic Body Styling](#basic-body-styling)

---

## Color Scheme

Defines the overall color scheme of the application:

| Variable         | Description                    | Default Value      | 
| ---------------- | ------------------------------ | ------------------ |
| `--color-scheme` | Theme type (`dark` or `light`) | `dark`             |
| `--text-color`   | Default text color             | `var(--color-100)` |
| `--bg-color`     | Background color               | `var(--color-900)` |

Example:

```css
body {
  color: var(--text-color);
  background-color: var(--bg-color);
}
```

---

## Font Families

Default fonts for various elements:

| Variable         | Description             | Font Stack Example                                   | 
| ---------------- | ----------------------- | ---------------------------------------------------- |
| `--ff-body`      | Default body text font  | `'Arimo', system-ui, sans-serif`                     |
| `--ff-heading`   | Default heading font    | `'Fira Sans Extra Condensed', system-ui, sans-serif` |
| `--ff-monospace` | Monospace font for code | `'Fira Code', monospace`                             |
| `--ff-count`     | Special numerical font  | `'Bebas Neue', monospace`                            |
| `--line-height`  | Default line-height     | `2`                                                  |

Example:

```css
body {
  font-family: var(--ff-body);
  line-height: var(--line-height);
}
```

---

## Shadow and Effects

Predefined shadows and effects:

| Variable         | Effect Description           | Example Usage                  | 
| ---------------- | ---------------------------- | ------------------------------ |
| `--shadow`       | General element shadow       | `0 2px 5px rgba(0,0,0,0.45)`   |
| `--shadow-soft`  | Soft subtle shadow           | `var(--shadow-soft)`           |
| `--shadow-text`  | Text shadow effect           | `2px 4px 3px rgba(0,0,0,0.45)` |
| `--shadow-focus` | Focus ring shadow effect     | `0 0 0 2px var(--color-a700)`  |

Example:

```css
.box {
  box-shadow: var(--shadow);
}
```

---

## Navbar Variables

Dimensions specific to layout elements:

| Variable          | Description              | Default Value | 
| ----------------- | ------------------------ | ------------- |
| `--navbar-height` | Height of navigation bar | `60px`        |
| `--sidebar-width` | Sidebar width            | `370px`       |

Example:

```css
.navbar {
  height: var(--navbar-height);
}

.sidebar {
  width: var(--sidebar-width);
}
```

---

## Basic Body Styling

Sets fundamental styles for the body element:

Example:

```css
body {
  font-family: var(--ff-body);
  line-height: var(--line-height);
  color: var(--text-color);
  background: var(--color-scheme);
}
```


---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
