# Typography Utilities Documentation

## Table of Contents

1. [Font Family Utilities](#font-family-utilities)
2. [Font Size Utilities](#font-size-utilities)
3. [Text Styles](#text-styles)
4. [Font Weight Utilities](#font-weight-utilities)
5. [Text Alignment](#text-alignment)
6. [Text Transformations](#text-transformations)
7. [Text Wrapping](#text-wrapping)
8. [Letter Spacing](#letter-spacing)
9. [Line Height Utilities](#line-height-utilities)
10. [Text Decoration](#text-decoration)
11. [Link Effects](#link-effects)
12. [Gradient Text](#gradient-text)

---

## Font Family Utilities

Applies predefined font families:

| Class           | Font Family Variable  | 
| --------------- | --------------------- |
| `.ff-body`      | `var(--ff-body)`      |
| `.ff-heading`   | `var(--ff-heading)`   |
| `.ff-monospace` | `var(--ff-monospace)` |
| `.ff-count`     | `var(--ff-count)`     |

Example:

```html
<p class="ff-heading">Heading Font Family</p>
```

---

## Font Size Utilities

Responsive font size utilities available:

**Sizes available:** `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `850`, `900`, `950`, `990`

Example:

```html
<p class="fs-500">Font size set to 500</p>
```

---

## Text Styles

| Class          | Effect             | 
| -------------- | ------------------ |
| `.text-bold`   | Bold text          |
| `.text-italic` | Italic text        |
| `.text-strike` | Strikethrough text |

Example:

```html
<p class="text-italic">Italicized Text</p>
```

---

## Font Weight Utilities

Available font weights: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

Example:

```html
<p class="fw-700">Bold Text</p>
```

---

## Text Alignment

| Class          | Alignment | 
| -------------- | --------- |
| `.text-left`   | Left      |
| `.text-center` | Center    |
| `.text-right`  | Right     |

Responsive alignment for small screens (≤750px):

| Class             | Alignment (Small Screens) | 
| ----------------- | ------------------------- |
| `.text-left-sm`   | Left                      |
| `.text-center-sm` | Center                    |
| `.text-right-sm`  | Right                     |

Example:

```html
<div class="text-center-sm">Center on Small Screens</div>
```

---

## Text Transformations

| Class            | Effect            | 
| ---------------- | ----------------- |
| `.text-cap`      | Capitalize        |
| `.text-upper`    | Uppercase         |
| `.text-lower`    | Lowercase         |
| `.text-balanced` | Balanced wrapping |

Example:

```html
<p class="text-upper">uppercase text</p>
```

---

## Text Wrapping

| Class            | Effect                                |
| ---------------- | ------------------------------------- |
| `.no-wrap`       | Prevents wrapping                     | 
| `.text-wrap`     | Normal wrapping                       |
| `.text-pre`      | Preserves whitespace                  |
| `.text-pre-wrap` | Preserves whitespace, allows wrap     |
| `.text-pre-line` | Collapses whitespace, preserves lines |
| `.text-break`    | Forces word breaks                    |

Example:

```html
<p class="text-break">LongWordWithoutSpacesBreaksHere</p>
```

---

## Letter Spacing

Available letter-spacing values:

| Class   | Effect                    | 
| ------- | ------------------------- |
| `.ls-0` | Normal spacing (`0px`)    |
| `.ls-1` | Slightly tighter (`-1px`) |
| `.ls-2` | Condensed (`-2px`)        |

Example:

```html
<p class="ls-1">Tighter Letter Spacing</p>
```

---

## Line Height Utilities

Available line heights: `1`, `1.15`, `1.25`, `1.5`, `1.65`, `2`

Example:

```html
<p class="lh-150">Line height of 1.5</p>
```

---

## Text Decoration

| Class          | Effect                             | 
| -------------- | ---------------------------------- |
| `.text-shadow` | Adds shadow (`var(--shadow-text)`) |

Example:

```html
<p class="text-shadow">Shadowed Text</p>
```

---

## Link Effects

| Class              | Effect                      | 
| ------------------ | --------------------------- |
| `.underline-fancy` | Fancy colored underline     |
| `.link-underline`  | Simple underline            |
| `.link-opacity`    | Reduces opacity on hover    |
| `.link-3d`         | 3D rotation effect on hover |

Example:

```html
<a href="#" class="link-3d">Hover Me!</a>
```

---

## Gradient Text

Available gradient classes: `.grad-1`, `.grad-2`, `.grad-3`, `.grad-4`, `.grad-5`, `.grad-6`, `.grad-7`, `.grad-8`, `.grad-9`, `.grad-10`

Example:

```html
<span class="grad-3">Gradient Text</span>
```

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |