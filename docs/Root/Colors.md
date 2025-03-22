# Color Utilities Documentation

## Table of Contents

1. [Global Text and Background Colors](#global-text-and-background-colors)
2. [Color-Specific Utilities](#color-specific-utilities)
3. [Color Set Utilities](#color-set-utilities)
4. [Color Helpers](#color-helpers)

---

## Global Text and Background Colors

Quick classes to apply grayscale colors globally:

**Available Shades:** `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`, `1000`, `a100`, `a200`, `a400`, `a700`, `white`, `black`

| Class            | Description      | Example      | 
| ---------------- | ---------------- | ------------ |
| `.color-{shade}` | Text color       | `.color-500` |
| `.bg-{shade}`    | Background color | `.bg-950`    |

Example:

```html
<p class="color-500 bg-950">Text with background</p>
```

---

## Color-Specific Utilities

Available Colors: `red`, `orange`, `green`, `blue`

**Shades available:** `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

| Class                    | Description                            | Example          | 
| ------------------------ | -------------------------------------- | ---------------- |
| `.color-{color}-{shade}` | Text color specific to color and shade | `.color-red-500` |
| `.bg-{color}-{shade}`    | Background color specific              | `.bg-green-300`  |

Example:

```html
<div class="color-red-500 bg-green-50">Red text on green background</div>
```

---

## Color Set Utilities

Generates paired background and foreground colors.

**Available Color Sets:**

- Grayscale: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`
- Red, Orange, Green, Blue: Same shades as above (`50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`)

### Examples:

- Grayscale: `.set-500` (bg: `500`, fg: `900`)
- Red: `.set-red-500` (bg: red `500`, fg: `100`)
- Orange: `.set-orange-300` (bg: orange `300`, fg: `900`)
- Green: `.set-green-400` (bg: `400`, fg: `900`)
- Blue: `.set-blue-300` (bg: `300`, fg: `900`)

Example:

```html
<div class="set-blue-500">Blue set colors</div>
```

---

## Color Helpers

| Class            | Description                | Example Usage                                        | 
| ---------------- | -------------------------- | ---------------------------------------------------- |
| `.bg-dark-glass` | Dark glass-like background | `.bg-dark-gl { background-color: rgba(0,0,0,.45); }` |

Example:

```html
<div class="bg-dark-gl">Dark glass-like background</div>
```


---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
