# Typography System

This SCSS module provides consistent and responsive styling for text elements, ensuring clear hierarchy, readability, and maintainable structure across headings, paragraphs, lists, and other typographic content.

---

### Table of Contents

- [Headings](#headings)
- [Sleek Headings](#sleek-headings)
- [Paragraphs](#paragraphs)
- [Horizontal Rules](#horizontal-rules)
- [Lists](#lists)
- [Blockquotes](#blockquotes)
- [Embedded Content](#embedded-content)
- [Code Blocks](#code-blocks)

---

## Headings

Headings (`h1–h6` and `.h1–.h6`) share a consistent typographic scale, spacing, and font.

| Element | Font Size Variable | Font Weight | Notes                  | 
| ------- | ------------------ | ----------- | ---------------------- |
| `h1`    | `--fs-800em`       | `bold`      | Most prominent heading |
| `h2`    | `--fs-700em`       | `bold`      | Section header         |
| `h3`    | `--fs-600em`       | `600`       | Subsection header      |
| `h4`    | `--fs-500em`       | `500`       |                        |
| `h5`    | `--fs-400em`       | `500`       |                        |
| `h6`    | `--fs-300em`       | `500`       | Smallest heading       |

All headings use:

- `font-family: var(--ff-heading)`
- `line-height: 1.25`
- `margin-bottom: 0.75ex`

---

## Sleek Headings

Headings with the `.sleek-heading` class include visual enhancements for use in modern UI elements or component headers.

**Features:**

- Inline layout (`display: flex`)
- Optional icon support via `svg`
- Decorative line (`::after`) for emphasis

```html
<h3 class="sleek-heading">
	<svg>...</svg>
	Section Title
</h3>
```

---

## Paragraphs

| Element       | Description                                        |
| ------------- | -------------------------------------------------- |
| `p`           | Uses `--fs-400`, `line-height: var(--line-height)` |
| `.no-mb`      | Removes bottom spacing from paragraphs             |
| `.last-no-mb` | Removes margin only on the last `p` inside         |

**Default spacing:**  
`margin-bottom: 3ex`

---

## Horizontal Rules

| Element | Description                                                            | 
| ------- | ---------------------------------------------------------------------- |
| `hr`    | Divider with `1px` solid border in `--color-600`, and `margin: 3rem 0` |

---

## Lists

Unordered (`ul`) and ordered (`ol`) lists have consistent vertical rhythm and spacing.

### Features

- `padding-left: 2.5em` (adjusts on small screens)
- Nested lists use `padding-left: 1.5em`
- `margin: 1em 0 2em 0`
- `li` spacing: `0.5em` (less on small screens)
- Custom marker colors:
    - `ul li::marker`: `--color-red-300`
    - `ol li::marker`: `--color-red-300`
    - `ol ul li::marker`: `--color-green-300`

### Clear Lists

The `.clear-list` class removes bullets and spacing entirely.

```html
<ul class="clear-list">   <li>Item</li> </ul>
```

---

## Blockquotes

Styled blockquotes provide semantic emphasis for quotes or callouts.

| Feature     | Value                    | 
| ----------- | ------------------------ |
| Left Border | `5px solid --color-a400` |
| Padding     | `1.5em`                  |
| Font Style  | `italic`, `--color-200`  |
| Background  | `--color-950`            |
| Margin      | `2rem 0`                 |

Paragraphs inside use `--fs-300`.

---

## Embedded Content

The `.raw-html-embed` class provides responsive styling for embedded iframes or external content.

| Element                  | Description                                              | 
| ------------------------ | -------------------------------------------------------- |
| `.raw-html-embed iframe` | Responsive with `aspect-ratio: 16 / 9` and `width: 100%` |

---

## Code Blocks

For displaying code with readable formatting and syntax highlighting support.

### Wrapper: `.code`

| Feature         | Description                          | 
| --------------- | ------------------------------------ |
| `border-radius` | Rounded corners                      |
| `border`        | `1px solid --color-700`              |
| `overflow`      | Hidden container with scrollable pre |

### Inner: `pre`

| Property      | Value         | 
| ------------- | ------------- |
| `white-space` | `pre-wrap`    |
| `padding`     | `1rem 1.5rem` |
| `tab-size`    | `4`           |
| `font-size`   | `--fs-100`    |
| `line-height` | `1.25`        |

### Inner: `code`

| Element  | Font Family Variable  |
| -------- | --------------------- |
| `<code>` | `var(--ff-monospace)` | 


**Example:**

```html
<div class="code">
	<pre><code>const message = 'Hello';</code></pre>
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
