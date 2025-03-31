# Layout & Utility Classes

These utility classes help define spacing, aspect ratios, visibility, interaction, icons, borders, shadows, and more.

---

### Table of Contents

- [Aspect Ratio Utilities](#aspect-ratio-utilities)
- [Interaction Utilities](#interaction-utilities)
- [Visibility Utilities](#visibility-utilities)
- [Display Utilities](#display-utilities)
- [Box Shadow](#box-shadow)
- [Border Radius Utilities](#border-radius-utilities)
- [SVG Icon Utilities](#svg-icon-utilities)
- [Position Utilities](#position-utilities)
- [Overlay](#overlay)
- [Thumbnail](#thumbnail)
- [Border Color Utilities](#border-color-utilities)

---

## Aspect Ratio Utilities

| Class            | Aspect Ratio | Description                    | 
| ---------------- | ------------ | ------------------------------ |
| `.aspect-1`      | `1 / 1`      | Square                         |
| `.aspect-169`    | `16 / 9`     | Widescreen (video)             |
| `.aspect-32`     | `3 / 2`      | Photography format             |
| `.aspect-43`     | `4 / 3`      | Legacy display or image format |
| `.aspect-74`     | `7 / 4`      | Wide presentation format       |
| `.aspect-golden` | `1.618 / 1`  | Golden ratio                   |

**Example:**

```html
<div class="aspect-169">Video Container</div>
```

---

## Interaction Utilities

| Class        | Description                             | 
| ------------ | --------------------------------------- |
| `.disabled`  | Makes element non-interactive, faded    |
| `.no-select` | Prevents user text selection            |
| `.no-events` | Disables pointer interaction completely |

---

## Visibility Utilities

### General Visibility

| Class        | Description                                   | 
| ------------ | --------------------------------------------- |
| `.hidden`    | Completely hides the element (layout removed) |
| `.invisible` | Hides element visually but keeps layout space |

### Responsive Hiding (Max-width)

| Class      | Hidden When Screen Is... | 
| ---------- | ------------------------ |
| `.hide-lg` | ≤ 1200px                 |
| `.hide-md` | ≤ 990px                  |
| `.hide-sm` | ≤ 750px                  |

### Responsive Hiding (Min-width)

| Class       | Hidden When Screen Is... | 
| ----------- | ------------------------ |
| `.hide-llg` | > 1200px                 |
| `.hide-lmd` | > 990px                  |
| `.hide-lsm` | > 750px                  |

---

## Display Utilities

| Class               | CSS Output           | 
| ------------------- | -------------------- |
| `.display-block`    | `display: block;`    |
| `.display-inline`   | `display: inline;`   |
| `.display-table`    | `display: table;`    |
| `.display-contents` | `display: contents;` |
| `.display-none`     | `display: none;`     |

---

## Box Shadow

| Class     | Description                         | 
| --------- | ----------------------------------- |
| `.shadow` | Applies `box-shadow: var(--shadow)` |

---

## Border Radius Utilities

**Available values:**  
`0125`, `025`, `0375`, `05`, `065`, `075`, `1`, `pill`

| Class      | Radius Value | 
| ---------- | ------------ |
| `.br-0125` | `0.125rem`   |
| `.br-025`  | `0.25rem`    |
| `.br-0375` | `0.375rem`   |
| `.br-05`   | `0.5rem`     |
| `.br-065`  | `0.65rem`    |
| `.br-075`  | `0.75rem`    |
| `.br-1`    | `1rem`       |
| `.br-pill` | `9999px`     |

**Example:**

```html
<img src="..." class="br-pill" />
```

---

## SVG Icon Utilities

| Class               | Size      | Description                 | 
| ------------------- | --------- | --------------------------- |
| `.svg-icon`         | `1em`     | Default icon size           |
| `.svg-icon-md`      | `1.375em` | Medium icon                 |
| `.svg-icon-lg`      | `1.5em`   | Large icon                  |
| `.svg-icon-xl`      | `1.75em`  | Extra large icon            |
| `.svg-icon-{n}x`    | `{n}em`   | Scales 2× to 5× dynamically |
| `.svg-icon-animate` | Rotating  | Applies spinning animation  |

**Example:**

```html
<svg class="svg-icon svg-icon-3x svg-icon-animate">...</svg>
```

---

## Position Utilities

| Class           | Description                                           | 
| --------------- | ----------------------------------------------------- |
| `.pos-relative` | `position: relative;` — anchors absolute children     |
| `.pos-absolute` | `position: absolute;` — removes from document flow    |
| `.pos-sticky`   | `position: sticky;` — sticks based on scroll position |

---

## Overlay

| Class           | Description                           | 
| --------------- | ------------------------------------- |
| `.overlay`      | Fullscreen overlay, hidden by default |
| `.overlay.show` | Reveals the overlay with fade-in      |

**Example:**

```html
<div class="overlay show"></div>
```

---

## Thumbnail

| Class    | Description                                  | 
| -------- | -------------------------------------------- |
| `.thumb` | Rounded, bordered thumbnail with soft shadow |

---

## Border Color Utilities

These classes apply a top or bottom border in different color shades using CSS variables.

| Class Prefix  | Example   | Description                          | 
| ------------- | --------- | ------------------------------------ |
| `.bt-{shade}` | `.bt-500` | Top border in shade `--color-500`    |
| `.bb-{shade}` | `.bb-700` | Bottom border in shade `--color-700` |

**Available values:**  
`50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `1000`, `950`, `a100`, `a200`, `a400`, `a700`

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
