# Container Utilities Documentation

Detailed documentation for the **Container Utilities**, including responsive container classes, practical examples, and best practices.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Container Sizes](#container-sizes)
4. [Base Container Structure](#base-container-structure)
5. [Container Variations](#container-variations)
    - [Fluid Container](#fluid-container)
    - [Overflow Visible Container](#overflow-visible-container)
    - [No Padding Container](#no-padding-container)
6. [Responsive Behavior](#responsive-behavior)
7. [HTML Usage Examples](#html-usage-examples)
8. [Customization](#customization)
9. [Accessibility](#accessibility)
10. [Best Practices](#best-practices)

---

## Features

- Defined container sizes for varied devices
- Responsive adjustments
- Utility classes for easy layout modifications
- Easy customization via SCSS variables

---

## Container Sizes

Available predefined container sizes:

| Size | Width  | Device Examples                                  |
| ---- | ------ | ------------------------------------------------ |
| xxs  | 250px  | Very small devices (e.g., compact phones)        |
| xs   | 450px  | Small phones                                     |
| sm   | 750px  | Larger phones and small tablets                  |
| md   | 800px  | Small tablets                                    |
| d    | 890px  | Default container (large tablets, small laptops) |
| lg   | 990px  | Laptops and desktops                             |
| xl   | 1200px | Large desktops                                   |
| 2xl  | 1450px | Extra large screens                             |
| 3xl  | 1680px | Ultra-wide monitors                              | 

---

## Base Container Structure

Basic HTML structure:

```html
<div class="container">
  Content here
</div>
```

---

## Container Variations

### Fluid Container

Full-width container:

```html
<div class="container container--fluid">
  Fluid content
</div>
```

### Overflow Visible Container

Allows visible overflow:

```html
<div class="container container--overflow">
  Content with visible overflow
</div>
```

### No Padding Container

Removes default padding:

```html
<div class="container container--p0">
  No padding content
</div>
```

---

## Responsive Behavior

Automatically adjusts to screen size:

```css
@media (max-width: 750px) {
  .container {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }

  .container--max {
    padding: 0;
  }
}
```

---

## HTML Usage Examples

Use predefined classes to set container widths explicitly:

```html
<div class="container container--sm">
  Small container content
</div>

<div class="container container--xl">
  Extra large container content
</div>
```

---

## Customization

Customize container sizes by modifying the SCSS map:

```scss
$container_sizes: (
    'xxs' : 250px,   // Very small devices (e.g., compact phones)
    'xs'  : 450px,   // Small phones
    'sm'  : 750px,   // Larger phones and small tablets
    'md'  : 800px,   // Small tablets
    'd'   : 890px,   // Default container (large tablets, small laptops)
    'lg'  : 990px,   // Laptops and desktops
    'xl'  : 1200px,  // Large desktops
    '2xl' : 1450px,  // Extra large screens
    '3xl' : 1680px   // Ultra-wide monitors
);
```

---

## Accessibility

- Ensure readable line lengths and adequate spacing.
- Maintain proper contrast ratios for readability.

---

## Best Practices

- Use predefined container classes for consistent designs.
- Maintain consistent padding and margins.
- Test responsiveness across multiple devices.

---

Leverage these Container Utilities to create robust and visually appealing responsive layouts.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
