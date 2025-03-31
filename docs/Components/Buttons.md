# Buttons

## Table of Contents

- [Overview](#overview)
- [Base Styling](#base-styling)
- [Size Modifiers](#size-modifiers)
- [Shape & Layout Variants](#shape--layout-variants)
- [Color Variants](#color-variants)
- [Button States](#button-states)
- [Special Button Types](#special-button-types)
    - [Icon Button](#icon-button)
    - [Split Button](#split-button)
    - [Counter Button](#counter-button)
    - [Blob Button](#blob-button)
    - [Circular Button](#circular-button)

---

## Overview

This button system is modular and utility-based. It allows you to combine size, shape, color, and special features using atomic class names.

| Class                  | Description                          | 
| ---------------------- | ------------------------------------ |
| `.btn`                 | Base class for all buttons           |
| `.btn-{size}`          | Size variants: tiny, small, large    |
| `.btn-{variant}`       | Layout styles: round, square, shadow |
| `.btn-{color}-{shade}` | Color and shade support              |
| `.btn-icon`            | Icon-only button                     |
| `.btn-split`           | Split button with label and icon     |
| `.btn-cnt`             | Button with a counter section        |
| `.btn-blob`            | Decorative blob-style button         |
| `.btn-circ`            | Fully circular button                |

---

## Base Styling

All buttons share consistent foundational styling to ensure alignment and visual cohesion across the UI.

- Uses `inline-flex` for layout
- Includes padding, border-radius, and background
- Typography is based on `--fs-400` scale
- Customizable hover and focus states via CSS variables

Works with both `<button>` and `<a>` elements.

---

## Size Modifiers

Choose a size that matches your context, from compact to prominent.

| Class        | Font Size  | Padding                | 
| ------------ | ---------- | ---------------------- |
| `.btn-tiny`  | `--fs-100` | `.375rem .65rem`       |
| `.btn-small` | `--fs-300` | `.5rem .75rem`         |
| `.btn`       | `--fs-400` | `.5rem 1rem` (default) |
| `.btn-large` | `--fs-500` | `.75rem 1.25rem`       |

---

## Shape & Layout Variants

Modify the shape or add layout enhancements using these utility classes.

| Class           | Description                         | 
| --------------- | ----------------------------------- |
| `.btn-round`    | Fully round button (3rem x 3rem)    |
| `.btn-square`   | Removes border radius               |
| `.btn-narrow`   | Reduces horizontal padding          |
| `.btn-shadow`   | Adds a default shadow               |
| `.btn-noshadow` | Removes all shadows                 |
| `.btn-svg`      | Square icon style with aspect ratio |

---

## Color Variants

Buttons support grayscale and colorful variants using a unified naming system.

### Grayscale

Use `.btn-{shade}` for neutral tones:

```html
<button class="btn btn-500">Gray Button</button>
```

**Available Shades:**
`50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

### Color Options

Apply color with `.btn-{color}-{shade}` where color can be:

- `red`
- `orange`
- `green`
- `blue`

```html
<a class="btn btn-green-500">Submit</a>
```

Hover states adapt automatically based on predefined mappings.

---

## Button States

Add interactivity and accessibility using these built-in states:

- `.disabled`: Disables interaction and lowers opacity
- `.active`: Triggers active style (e.g., outline)
- `.btn:focus`: Removes outline for custom styling
    

---

## Special Button Types

Enhance user interaction with specialized button styles.

---

### Icon Button

Use for compact actions or visual enhancements:

```html
<button class="btn btn-icon btn-700">
	<svg class="svg-icon">
		<use href="#icon"></use>
	</svg>
	<span>Label</span>
</button>
```

- Icon above label
- Grid layout
- `.active` adds visual emphasis

---

### Split Button

Ideal for buttons with a dropdown or icon extension:

```html
<button class="btn btn-split btn-blue-500">
	<svg class="svg-icon">
		<use href="#edit"/>
	</svg>
	<span>Edit</span>
</button>
```

- Flex layout
- Optional `.btn-split-right` to flip the layout
- Works well with size modifiers

---

### Counter Button

Perfect for comments, filters, or notifications:

```html
<div class="btn btn-cnt btn-red-300">
	<span class="btn-cnt__title">Comments</span>
	<span class="btn-cnt__cnt">12</span>
</div>
```

- `.btn-cnt--pill` adds pill styling
- Automatically adjusts border styling based on content

---

### Blob Button

A visually unique decorative option:

```html
<button class="btn btn-blob btn-orange-300">Surprise</button>
```

- Irregular border radius
- Responsive shadow
- Best for non-standard interactions or calls to action

---

### Circular Button

Great for floating action buttons (FABs) or circular icons:

```html
<button class="btn btn-circ btn-500">+</button>
```

- Responsive size: `6rem + 1vw`
- Content is centered

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
