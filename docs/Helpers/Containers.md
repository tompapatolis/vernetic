# Container Utilities

Utility classes for applying consistent widths, paddings, and layout behaviors to containers in responsive designs.

---

### Table of Contents

- [Default Container](#default-container)
- [Container Size Variants](#container-size-variants)
- [Fluid Container](#fluid-container)
- [Overflow Utility](#overflow-utility)
- [No Padding Utility](#no-padding-utility)
- [Responsive Behavior](#responsive-behavior)

---

### Default Container

The `.container` class sets a default max-width layout ideal for most viewports.

| Class        | Description                                                       | 
| ------------ | ----------------------------------------------------------------- |
| `.container` | Sets width to default (`890px`), centered with horizontal padding |

**Example:**

```html
<div class="container">Content</div>
```

---

### Container Size Variants

Use modifier classes to set fixed widths for different breakpoints. These sizes are helpful for defining max-widths based on your layout or design grid.

| Class             | Width    | Description                      | 
| ----------------- | -------- | -------------------------------- |
| `.container--xxs` | `250px`  | Very small devices               |
| `.container--xs`  | `450px`  | Small phones                     |
| `.container--sm`  | `750px`  | Larger phones / small tablets    |
| `.container--md`  | `800px`  | Small tablets                    |
| `.container--d`   | `890px`  | Default (large tablets, laptops) |
| `.container--lg`  | `990px`  | Laptops and desktops             |
| `.container--xl`  | `1200px` | Large desktops                   |
| `.container--2xl` | `1450px` | Extra large screens              |
| `.container--3xl` | `1680px` | Ultra-wide monitors              |

**Example:**

```html
<div class="container container--lg">Wide container</div>
```

---

### Fluid Container

Use `.container--fluid` to make a container span the full width of the viewport with responsive padding.

| Class               | Description                                          | 
| ------------------- | ---------------------------------------------------- |
| `.container--fluid` | Full-width container with padding (`max(2vw, 1rem)`) |

**Example:**

```html
<div class="container container--fluid">Full width section</div>
```

---

### Overflow Utility

By default, containers hide overflow. Use `.container--overflow` to force overflow to be visible.

| Class                  | Description                          | 
| ---------------------- | ------------------------------------ |
| `.container--overflow` | Sets `overflow: visible !important;` |

**Example:**

```html
<div class="container container--overflow">May overflow content</div>
```

---

### No Padding Utility

Use `.container--p0` to remove all internal horizontal padding from the container.

| Class            | Description                        | 
| ---------------- | ---------------------------------- |
| `.container--p0` | Removes all padding (`padding: 0`) |

**Example:**

```html
<div class="container container--p0">Edge-to-edge content</div>
```

---

### Responsive Behavior

On screens **≤ 750px**, containers adapt automatically for mobile-friendly layout:

- All containers become `width: 100%`
- Margins are removed
- You can use `.container--max` to also remove horizontal padding

| Class             | Description                               | 
| ----------------- | ----------------------------------------- |
| `.container`      | Becomes full-width with no margin         |
| `.container--max` | Removes left/right padding at small sizes |

**Example:**

```html
<div class="container container--max">Mobile optimized</div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
