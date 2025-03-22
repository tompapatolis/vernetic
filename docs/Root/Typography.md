# Typography Documentation

## Table of Contents

1. [Headings](#headings)
    - [Available Heading Classes](#available-heading-classes)
    - [Sleek Headings](#sleek-headings)
2. [Paragraphs](#paragraphs)
3. [Lists](#lists)
4. [Blockquotes](#blockquotes)
5. [Embedded Content](#embedded-content)
6. [Code Blocks](#code-blocks)

---

## Headings

All headings use the predefined heading font and consistent line-height and spacing.

### Available Heading Classes

| Element/Class | Font Size         | Font Weight | 
| ------------- | ----------------- | ----------- |
| `h1`, `.h1`   | `var(--fs-800em)` | Bold        |
| `h2`, `.h2`   | `var(--fs-700em)` | Bold        |
| `h3`, `.h3`   | `var(--fs-600em)` | 600         |
| `h4`, `.h4`   | `var(--fs-500em)` | 500         |
| `h5`, `.h5`   | `var(--fs-400em)` | 500         |
| `h6`, `.h6`   | `var(--fs-300em)` | 500         |

Example:

```html
<h1 class="h1">Heading Level 1</h1>
<h3>Heading Level 3</h3>
```

### Sleek Headings

A modern heading variant featuring an icon and separator line.

Example:

```html
<h2 class="sleek-heading">
  <svg><!-- SVG Icon --></svg>
  Sleek Heading Example
</h2>
```

---

## Paragraphs

Default styling for paragraphs includes consistent spacing and readability.

| Class          | Effect                                             | 
| -------------- | -------------------------------------------------- |
| `p`            | Standard paragraph styling                         |
| `.p-no-margin` | Removes bottom margin from paragraphs              |
| `.last-p-m0`   | Removes bottom margin from the last paragraph only |

Example:

```html
<div class="last-p-m0">
  <p>Paragraph 1</p>
  <p>Paragraph 2 (no bottom margin)</p>
</div>
```

---

## Lists

Default list styling with responsive padding and custom markers.

- **List Types Supported:** `ul`, `ol`, `dl`

| Class         | Effect                          | 
| ------------- | ------------------------------- |
| `.clear-list` | Removes list styling completely |

Example:

```html
<ul class="clear-list">
  <li>No bullet or padding</li>
  <li>No bullet or padding</li>
</ul>
```

Nested lists automatically remove bottom margins.

---

## Blockquotes

Styled to visually distinguish quoted content:

- Border-left: Colored accent (`var(--color-a400)`)
- Italicized text, reduced font-size (`var(--fs-300)`)
- Background: Dark background (`var(--color-950)`)

Example:

```html
<blockquote>
  <p>This is a styled blockquote example.</p>
</blockquote>
```

---

## Embedded Content

Responsive embedded elements such as iframes or embedded widgets:

| Class             | Effect                               | 
| ----------------- | ------------------------------------ |
| `.raw-html-embed` | Ensures responsive 16:9 aspect ratio |

Example:

```html
<div class="raw-html-embed">
  <iframe src="https://example.com"></iframe>
</div>
```

---

## Code Blocks

Consistent styling for displaying code snippets:

- Monospace font (`var(--ff-monospace)`)
- Rounded corners and padding
- Scrollable content

| Class   | Description                 | 
| ------- | --------------------------- |
| `.code` | Container for code snippets |

Example:

```html
<div class="code">
  <pre><code>const greeting = "Hello, World!";</code></pre>
</div>
```

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
