# Card Components Documentation

Comprehensive documentation for **Card Components**, designed to provide flexible and interactive card styles suitable for various content types.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Component Types](#component-types)
    - [Standard Card](#standard-card)
    - [Text Card](#text-card)
4. [Usage](#usage)
    - [Standard Card Example](#standard-card-example)
    - [Text Card Example](#text-card-example)
5. [Interactive States](#interactive-states)
6. [Image Handling](#image-handling)
7. [Customization](#customization)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)

---

## Overview

**Card Components** provide an elegant way to present content in visually distinctive sections, offering interactive elements and responsiveness.

---

## Features

- Two primary card types (`.card`, `.textcard`)
- Hover and active states enhancing user interaction
- Consistent image aspect ratio
- Clear and intuitive link behaviors

---

## Component Types

### Standard Card

- Class: `.card`
- Includes an image and textual content.

### Text Card

- Class: `.textcard`
- Primarily focused on text-based content and interactive links.

---

## Usage

### Standard Card Example

```html
<a href="#" class="card">
  <img src="image.jpg" alt="Description" class="card__image">
  <div class="card__content">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Card description or brief text content.</p>
  </div>
</a>
```

### Text Card Example

```html
<a href="#" class="textcard">
  <h3 class="textcard__title">Text Card Title</h3>
  <p class="textcard__description">Brief text description.</p>
  <span class="textcard__more">Read More</span>
</a>
```

---

## Interactive States

Cards support interactive states:

- **Hover & Active**:
    - Text color changes (`var(--color-100)` or `var(--color-white)`)
    - Title text becomes underlined.
    - `.textcard__more` underline removed on hover.

---

## Image Handling

To maintain consistency:

- Images within `.card__image` maintain a `1:1` aspect ratio.

```css
.card__image {
  width: 100%;
  aspect-ratio: 1;
}
```

---

## Customization

- Customize card colors using CSS variables:
    - Text colors: `var(--color-100)`, `var(--color-200)`, `var(--color-white)`
    - Easily adjustable through your theme settings.

---

## Accessibility

- Use meaningful alt text for `.card__image`.
- Ensure interactive elements are keyboard navigable.

---

## Best Practices

- Clearly indicate interactive cards with hover effects.
- Use concise and informative titles.
- Keep card content brief and scannable for better user engagement.

---

Utilize these Card Components to enhance content structure and user experience in your interfaces.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
