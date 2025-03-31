# Card Components

The `card` module provides flexible layout blocks for displaying linked content, either with images or text. These are ideal for use in grids, previews, or feature sections.

---

### Table of Contents

- [Overview](#overview)
- [Standard Card](#standard-card)
- [Text Card](#text-card)
- [Shared Features](#shared-features)
- [Usage Examples](#usage-examples)

---

## Overview

This component includes two card types:

| Class       | Description                              | 
| ----------- | ---------------------------------------- |
| `.card`     | Image-based card with hoverable content  |
| `.textcard` | Text-only card for simple inline layouts |

Cards are interactive by default and include built-in hover and active states.

---

## Standard Card

Used for cards with an image block and linked title/text.

### Key Features

- `.card` is a link-style container
- `.card__image` maintains a **1:1 aspect ratio**
- `.card__title` is underlined on hover

### Behavior

| State                | Effect                                                            | 
| -------------------- | ----------------------------------------------------------------- |
| `:hover` / `:active` | Changes text color to `--color-100` and underlines `.card__title` |

---

## Text Card

Used for text-only cards with optional link labels.

### Key Features

- `.textcard__title` is underlined on hover
- `.textcard__more` is underlined by default but **not** on hover

### Behavior

| State                | Effect                                                                           | 
| -------------------- | -------------------------------------------------------------------------------- |
| `:hover` / `:active` | Text color becomes `--color-white`, title underlined, "more" link not underlined |

---

## Shared Features

- Both `.card` and `.textcard` use `text-decoration: none` by default
- They inherit color from parent or set theme tokens explicitly
- Designed to work in flex/grid layouts or inline containers

---

## Usage Examples

### Image-Based Card

```html
<a class="card flex flex-column gap-05" href="#">
    <img class="card__image" src="image.jpg" alt="Alt Text" loading="lazy">
    <h3 class="card__title mb-0">Title</h3>
    <p class="card__body mb-0 lh-125">Subtitle</p>
    <span class="card__date color-300">Date</span>
</a>
```

---

### Text-Based Card

```html
<a class="textcard" href="#">
    <h3 class="textcard__title lh-115 mb-05">Title</h3>
    <span class="textcard__more lh-125 fs-400">Subtitle or call to action</span>
</a>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
