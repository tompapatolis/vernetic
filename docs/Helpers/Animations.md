# Animations Documentation

Comprehensive guide for implementing **Animation Utilities** in your project to enhance user interaction and visual appeal.

---

## Table of Contents

1. [Overview](#overview)
2. [Animation Classes](#animation-classes)
    - [Rotation](#rotation-animations)
    - [Heartbeat](#heartbeat-animation)
    - [Breathing](#breathing-animation)
    - [Deformation](#deform-animation)
    - [Border Pulsation](#border-pulsation)
    - [Hover Effects](#hover-effects)
3. [Spinner Component](#spinner-component)
4. [Observer-based Animations](#observer-based-animations)
5. [HTML Usage Examples](#html-usage-examples)
6. [Customization](#customization)
7. [Accessibility](#accessibility)
8. [Best Practices](#best-practices)

---

## Overview

The **Animation Utilities** enhance user experience by providing dynamic visual interactions including rotations, pulsations, and transitions.

---

## Animation Types

### Rotate Animation

```html
<div class="animate-rotate">Rotating Element</div>
```

### Heartbeat Animation

```html
<div class="animate-heartbeat">Heartbeat Effect</div>
```

### Breathing Animation

```html
<div class="animate-breathing">Breathing Effect</div>
```

### Deform Animation

```html
<div class="animate-deform">Deform Effect</div>
```

---

## Border Pulsation

Applies a pulsating border effect:

```html
<div class="animate-border-pulsate">Border Pulsate</div>
```

---

## Hover Effects

Interactive element enhancements:

```html
<button class="hover-effect">Hover Me</button>
```

---

## Spinner Component

Loading spinner centered within a container:

```html
<div class="spinner">
  <img src="spinner.svg" alt="Loading...">
</div>
```

---

## Observer-based Animations

Trigger animations upon element visibility:

```html
<div data-animation="slide-right">Content slides in</div>
```

**Available Options:**

- `slide-right`
- `slide-left`
- `slide-up`
- `slide-down`
- `slide-grow`
- `spin`
- `spin-more`
- `fade-in`

---

## HTML Usage Examples

### Rotate Example

```html
<div class="animate-rotate">Circular Loader</div>
```

### Observer Animation Example

```html
<section data-animation="slide-up">Visible on Scroll</section>
```

---

## Spinner Component

Loading spinner example:

```html
<div class="spinner">
  <img src="spinner.gif" alt="Loading...">
</div>
```

---

## Customization

Easily adjust animations through CSS variables:

- Adjust duration, colors, and transforms using CSS keyframes.

---

## Accessibility

- Ensure animations don't trigger accessibility issues.
- Avoid fast flashing or overly aggressive movements.

---

## Best Practices

- Use subtle animations for better UX.
- Avoid overusing animations to prevent user fatigue.
- Ensure animations complement the overall design style.

---

Effectively integrate animations into your interfaces to enhance visual appeal and interaction.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
