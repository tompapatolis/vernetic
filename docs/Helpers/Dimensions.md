# Dimensions Utilities
Utility classes to control the width and height of elements using fixed pixel values, viewport-relative units, and responsive behaviors.

## Table of Contents

- [Fixed Pixel-Based Sizes](#fixed-pixel-based-sizes)
- [Responsive Small-Screen Variants](#responsive-small-screen-variants)
- [Viewport-Relative Sizes](#viewport-relative-sizes)
- [Dimension Helper Classes](#dimension-helper-classes)

---

## Fixed Pixel-Based Sizes

These classes apply fixed dimensions ranging from `20px` to `800px`, in 20px increments.

| Class Prefix     | Description                              | 
| ---------------- | ---------------------------------------- |
| `.w-{value}`     | Sets `width`, with `max-width: 100%`     |
| `.h-{value}`     | Sets `height`                            |
| `.mw-{value}`    | Sets `min-width`, with `max-width: 100%` |
| `.w-max-{value}` | Sets `max-width`                         |
| `.mh-{value}`    | Sets `min-height`                        |

**Available values:**  
`20`, `40`, `60`, `80`, `100`, `120`, `140`, `160`, `180`, `200`,  
`220`, `240`, `260`, `280`, `300`, `320`, `340`, `360`, `380`, `400`,  
`420`, `440`, `460`, `480`, `500`, `520`, `540`, `560`, `580`, `600`,  
`620`, `640`, `660`, `680`, `700`, `720`, `740`, `760`, `780`, `800`

**Examples:**

```html
<div class="w-400"> <!-- width: 400px; max-width: 100%; --> </div>
<div class="h-200"> <!-- height: 200px --> </div>
```

---

## Responsive Small-Screen Variants

On viewports `≤ 750px`, you can override fixed sizes with responsive variants:

| Class Prefix    | Description                           | 
| --------------- | ------------------------------------- |
| `.w-sm-{value}` | Responsive `width` for small screens  |
| `.h-sm-{value}` | Responsive `height` for small screens |

Additionally:

- All `.mw-*` and `.mh-*` classes are reset to `auto` on small screens.
    

**Example:**

```html
<div class="w-600 w-sm-300"> <!-- 600px wide normally, 300px on small screens --> </div>
```

---

## Viewport-Relative Sizes

Use percentages of the viewport for fluid, responsive layouts:

| Class      | Description                               | 
| ---------- | ----------------------------------------- |
| `.w-{n}vw` | Width as a percentage of viewport width   |
| `.h-{n}vh` | Height as a percentage of viewport height |

**Available values:**  
`1` to `20` (`vw`, `vh`)

**Example:**

```html
<div class="w-20vw"> <!-- width: 20vw --> </div>
<div class="h-10vh"> <!-- height: 10vh --> </div>
```

---

## Dimension Helper Classes

These helper classes support common layout use cases and resets.

| Class       | Effect                       |
| ----------- | ---------------------------- |
| `.w-auto`   | `width: auto;`               |
| `.h-auto`   | `height: auto;`              |
| `.w-fit`    | `width: fit-content;`        |
| `.mw-0`     | `min-width: 0 !important;`   |
| `.w-full`   | `width: 100%; height: auto;` |
| `.w-max-hd` | `max-width: 1920px;`         |

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
