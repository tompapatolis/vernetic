# Pagination

The pagination system provides flexible, responsive navigation controls to move through paginated content. Built using CSS Grid, it offers layout consistency, dropdown-based page selection, and interactive styling for hover and active states.

---

## Table of Contents

- [Overview](#overview)
- [Basic Structure](#basic-structure)
- [Navigation Controls](#navigation-controls)
- [Current Page Display](#current-page-display)
- [Dropdown for More Pages](#dropdown-for-more-pages)
- [Page Links](#page-links)
- [Responsive Behavior](#responsive-behavior)
- [Class Reference](#class-reference)
- [Copy-Paste Pagination Component](#copy-paste-pagination-component)

---

## Overview

The component is designed to handle pagination in a clean, minimal interface. It supports:

- **Previous/Next** navigation buttons
- **Current page indicator**
- **Expandable dropdown** for page links
- Fully responsive layout adjustments for mobile devices

It integrates easily with grid utility classes and SVG icons.

---

## Basic Structure

The `.pagination` container is a CSS Grid layout that holds all pagination controls. You can use additional utility classes like `grid`, `gap`, or `mt-*` for spacing.

```html
<div class="pagination grid grid-col-3 gap-1">
    <a class="pagination__prev" href="#">Previous</a>
    <span class="pagination__current">Page 3 of 10</span>
    <a class="pagination__next" href="#">Next</a>
</div>
```

---

## Navigation Controls

Use `.pagination__prev` and `.pagination__next` for moving between pages. These elements are styled with underlines by default and highlight on hover or active state.

```html
<a class="pagination__prev" href="#">Previous</a>
<a class="pagination__next" href="#">Next</a>
```

These support icon and label combinations inside a flex layout if needed.

---

## Current Page Display

The `.pagination__current` element shows the current page out of the total, for example: `Page 3 of 10`. This is aligned to the right by default in the grid layout.

```html
<span class="pagination__current">Page 3 of 10</span>
```

---

## Dropdown for More Pages

The `.pagination__more` element toggles a list of additional page links. It’s positioned relative and reveals a floating `.pagination__list` with hidden links.

```html
<button class="pagination__more flex flex-vc" type="button">
	<span>2</span>
	<svg class="svg-icon svg-icon-md" aria-hidden="true">
		<use href="#icon-chevron-up"></use>
	</svg>
	<ul class="pagination__list clear-list hidden">
		<li><a class="pagination__link" href="?page=1">1</a></li>
		<li><a class="pagination__link" href="?page=2">2</a></li>
		<li><a class="pagination__link" href="?page=3">3</a></li>
		<li><a class="pagination__link" href="?page=4">4</a></li>
		<li><a class="pagination__link" href="?page=5">5</a></li>
	</ul>
</button>
```

The dropdown appears on hover or can be toggled via JavaScript.

---

## Page Links

Each link inside `.pagination__list` uses `.pagination__link`. They appear as block-level buttons, and change background/text color on hover.

```html
<a href="#" class="pagination__link">5</a>
```

You can wrap these links in `<li>` if used inside a `<ul>` for better semantics.

---

## Responsive Behavior

On screens smaller than `750px`, the component:

- Switches to a 3-column layout
- Adds padding and border to navigation buttons
- Enhances tap targets with spacing and rounded corners
- Icons inside buttons scale to `1.25em`

```css
@media (max-width: 750px) {
    .pagination {
        grid-template-columns: 1fr auto auto;
        align-items: center;
        gap: .75rem;
        padding-top: 1rem !important;
    }
}
```

---

## Class Reference

| Class                  | Description                                   | 
| ---------------------- | --------------------------------------------- |
| `.pagination`          | Base grid container for pagination            |
| `.pagination__prev`    | Previous page control                         |
| `.pagination__next`    | Next page control                             |
| `.pagination__current` | Shows current page status (e.g. Page 2 of 10) |
| `.pagination__more`    | Dropdown toggle for additional pages          |
| `.pagination__list`    | Floating list of page links                   |
| `.pagination__link`    | Individual page link inside the dropdown      |

---

## Copy-Paste Pagination Component

```html
<div class="pagination grid grid-col-4 gap-1 mt-5 pt-05 color-300">
    <!-- Current Result Range -->
    <span>21 – 40  of 250 </span>

    <!-- Previous Page Button -->
    <a class="pagination__prev flex flex-vc gap-025" href="?page=1">
        <svg class="svg-icon" aria-hidden="true">
            <use href="#icon-arrow-left"></use>
        </svg>
        <span class="hide-sm">Previous</span>
    </a>

    <!-- Next Page Button -->
    <a class="pagination__next flex flex-vc gap-025" href="?page=3">
        <span class="hide-sm">Next</span>
        <svg class="svg-icon" aria-hidden="true">
            <use href="#icon-arrow-right"></use>
        </svg>
    </a>

    <!-- Current Page with Dropdown -->
    <div class="pagination__current flex flex-vc gap-025 hide-sm">
        <span class="hide-md">Page:</span>
        <button class="pagination__more flex flex-vc" type="button">
            <span>2</span>
            <svg class="svg-icon svg-icon-md" aria-hidden="true">
                <use href="#icon-chevron-up"></use>
            </svg>
            <ul class="pagination__list clear-list hidden">
                <li><a class="pagination__link" href="?page=1">1</a></li>
                <li><a class="pagination__link" href="?page=2">2</a></li>
                <li><a class="pagination__link" href="?page=3">3</a></li>
                <li><a class="pagination__link" href="?page=4">4</a></li>
                <li><a class="pagination__link" href="?page=5">5</a></li>
            </ul>
        </button>
        <span>of 5 </span>
    </div>
</div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | true   |
| JavaScript Dependency    | true   |
| Icon Dependency          | false  | 
