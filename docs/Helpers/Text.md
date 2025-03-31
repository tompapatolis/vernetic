# Text Utilities

A comprehensive set of classes for font families, sizes, weights, spacing, text styling, alignment, and decoration.

---

### Table of Contents

- [Font Families](#font-families)
- [Font Sizes](#font-sizes)
- [Font Weights](#font-weights)
- [Text Styles](#text-styles)
- [Text Alignment](#text-alignment)
- [Text Transformations](#text-transformations)
- [Text Wrapping](#text-wrapping)
- [Letter Spacing](#letter-spacing)
- [Line Height](#line-height)
- [Text Shadow](#text-shadow)
- [Link Effects](#link-effects)
- [Gradient Text](#gradient-text)

---

## Font Families

| Class           | Description                       | 
| --------------- | --------------------------------- |
| `.ff-body`      | Applies the body font             |
| `.ff-heading`   | Applies the heading font          |
| `.ff-monospace` | Applies the monospace font        |
| `.ff-count`     | Applies the numeric/counting font |

**Example:**

```html
<p class="ff-monospace">Monospace text</p>
```

---

## Font Sizes

#### Available values:

**For `rem`-based sizes:**  

`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `850`, `900`, `950`, `990`

**For `em`-based sizes:**  

`300em`, `400em`, `500em`, `600em`, `700em`, `800em`

| Class         | Description                        | 
| ------------- | ---------------------------------- |
| `.fs-{key}`   | Sets font size using a scale token |

**Example:**

```html
<p class="fs-400">Regular text</p>
<p class="fs-700">Heading-like text</p>
```

---

## Font Weights

**Available values:**  
`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

| Class         | Description      | 
| ------------- | ---------------- |
| `.fw-{value}` | Sets font weight |

**Example:**

```html
<p class="fw-600">Semi-bold text</p>
```

---

## Text Styles

| Class                   | Description                  |
| ----------------------- | ---------------------------- |
| `.text-bold`            | Applies `font-weight: bold`  |
| `.text-italic`          | Applies `font-style: italic` |
| `.text-strike`          | Applies line-through         |

**Example:**

```html
<p class="text-strike">Struck through</p>
```

---

## Text Alignment

| Class             | Description                   | 
| ----------------- | ----------------------------- |
| `.text-left`      | Aligns text to the left       |
| `.text-center`    | Centers text                  |
| `.text-right`     | Aligns text to the right      |
| `.text-left-sm`   | Left-aligns on small screens  |
| `.text-center-sm` | Centers text on small screens |
| `.text-right-sm`  | Right-aligns on small screens |

**Example:**

```html
<p class="text-center text-left-sm">Responsive centered text</p>
```

---

## Text Transformations

| Class            | Description                    | 
| ---------------- | ------------------------------ |
| `.text-cap`      | Capitalizes each word          |
| `.text-upper`    | Transforms text to uppercase   |
| `.text-lower`    | Transforms text to lowercase   |
| `.text-balanced` | Applies balanced text wrapping |

```html
<h2 class="text-upper">uppercase heading</h2>
```

---

## Text Wrapping

| Class            | Description                                 | 
| ---------------- | ------------------------------------------- |
| `.text-no-wrap`  | Prevents text wrapping                      |
| `.text-wrap`     | Enables normal wrapping                     |
| `.text-pre`      | Preserves whitespace and line breaks        |
| `.text-pre-wrap` | Wraps and preserves whitespace              |
| `.text-pre-line` | Preserves line breaks, collapses whitespace |
| `.text-break`    | Breaks long words if necessary              |

**Example:**

```html
<p class="text-pre-wrap">Preserve spacing</p>
```

---

## Letter Spacing

| Class   | Description                | 
| ------- | -------------------------- |
| `.ls-0` | No extra letter spacing    |
| `.ls-1` | Tight letter spacing       |
| `.ls-2` | Extra-tight letter spacing |

**Example:**

```html
<p class="ls-1">Condensed letters</p>
```

---

## Line Height

**Available values:**  
`1`, `115`, `125`, `150`, `165`, `2`

| Class         | Description          | 
| ------------- | -------------------- |
| `.lh-{value}` | Sets the line height |

**Example:**

```html
<p class="lh-150">This paragraph has relaxed line spacing.</p>
```

---

## Text Shadow

| Class          | Description                      | 
| -------------- | -------------------------------- |
| `.text-shadow` | Applies a predefined text shadow |

**Example:**

```html
<h1 class="text-shadow">Fancy shadow text</h1>
```

---

## Link Effects

| Class                   | Description                                  | 
| ----------------------- | -------------------------------------------- |
| `.link-underline-fancy` | Custom underline color that changes on hover |
| `.link-underline`       | Regular underline, removed on hover          |
| `.link-opacity`         | Reduces opacity on hover                     |
| `.link-3d`              | 3D tilt and shift effect on hover            |

**Example:**

```html
<a class="link-3d" href="#">Hover me</a>
```

---

## Gradient Text

| Class                  | Description                         | 
| ---------------------- | ----------------------------------- |
| `.grad-1` → `.grad-10` | Applies a specific gradient to text |

These use `background-clip: text` to simulate colorful gradient text.

**Example:**

```html
<span class="grad-3">Gradient heading</span>
```

> 💡 Note: These only work in browsers that support `background-clip: text`.

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   | 
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  |