# Pagination Component Documentation

Comprehensive documentation for the **Pagination Component**, a flexible and intuitive UI element designed to navigate content across multiple pages seamlessly.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Base Structure](#base-structure)
4. [Pagination Controls](#pagination-controls)
    - [Previous and Next Buttons](#previous-and-next-buttons)
    - [Current Page Indicator](#current-page-indicator)
    - [Dropdown for Additional Pages](#dropdown-for-additional-pages)
5. [Dropdown for Additional Pages](#dropdown-for-additional-pages)
6. [Responsive Behavior](#responsive-behavior)
7. [HTML Usage Example](#html-usage-example)
8. [Customization](#customization)
9. [Accessibility](#accessibility)
10. [Best Practices](#best-practices)

---

## Overview

The **Pagination Component** provides users with intuitive controls for navigating multi-page content, enhancing usability and clarity.

---

## Features

- Easy navigation between pages
- Clear current page indication
- Responsive adjustments for smaller screens
- Dropdown functionality for additional pages
- Structured layout and clear visual indicators

---

## Base Structure

Basic structure for pagination:

```html
<div class="pagination">
  <a href="#" class="pagination__prev">Previous</a>
  <span class="pagination__current">1</span>
  <a href="#" class="pagination__next">Next</a>
</div>
```

---

## Pagination Controls

### Previous and Next Buttons

Used for navigating between page sets:

```html
<a href="#" class="pagination__prev">Previous</a>
<a href="#" class="pagination__next">Next</a>
```

---

### Current Page Indicator

Displays the active page clearly:

```html
<span class="pagination__current">3</span>
```

---

### Dropdown for Additional Pages

Used when many pages are present:

```html
<div class="pagination__more">
  More
  <div class="pagination__list">
    <a href="#" class="pagination__link">4</a>
    <a href="#" class="pagination__link">5</a>
  </div>
</div>
```

---

## Responsive Behavior

Automatically adapts layout and appearance for smaller screens, ensuring usability across devices.

---

## HTML Usage Example

Comprehensive pagination example:

```html
<div class="pagination">
  <a href="#" class="pagination__prev">← Prev</a>
  <span class="pagination__current">5</span>

  <div class="pagination__more">
    More
    <div class="pagination__list">
      <a href="#" class="pagination__link">4</a>
      <a href="#" class="pagination__link">5</a>
      <a href="#" class="pagination__link">6</a>
    </div>
  </div>

  <a href="#" class="pagination__next">Next</a>
</div>
```

---

## Customization

Adjust styles easily via CSS variables:

- Color customization (`var(--color-200)`, `var(--color-green-300)`, etc.)
- Borders, spacing, and animations

---

## Accessibility

- Ensure pagination elements are keyboard navigable.
- Provide clear labels and context for each link.
- Ensure good color contrast and visibility.

---

## Best Practices

- Limit visible page numbers to maintain readability.
- Clearly indicate the current page and available actions.
- Provide responsive adaptations for different screen sizes.

---

Use this Pagination Component effectively to provide smooth navigation and enhance the overall user experience.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
