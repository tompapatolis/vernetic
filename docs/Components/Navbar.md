# Navigation Bar

The Navigation Bar provides a flexible and responsive top-level navigation system. It supports logo areas, standard nav links, toggle buttons, dropdowns, and mobile-friendly sidebar menus. Optional utility classes allow for dynamic behavior on scroll.

---

## Table of Contents

- [Overview](#overview)
- [Navbar Variants](#navbar-variants)
- [Navbar Structure](#navbar-structure)
- [Sidebar Navigation](#sidebar-navigation)
- [Dropdown Menu](#dropdown-menu)
- [Copy-Paste Example](#copy-paste-example)

---

## Overview

The navbar is designed to remain fixed at the top (`position: fixed`) and supports:

- Logo branding areas
- Navigation items (left and right)
- Scroll detection for background switching
- Toggle buttons for dropdowns or sidebars
- Optional dynamic transparency

It plays well with sidebars and dropdowns in mobile or desktop layouts.

---

## Navbar Variants

| Class                   | Description                                 |
| ----------------------- | ------------------------------------------- |
| `navbar--dynamic`       | Transparent with no background or shadow    |

---

## Navbar Structure

**Core Structure**

| Class                   | Description                              | 
| ----------------------- | ---------------------------------------- |
| `navbar`                | Base navbar container, fixed at the top  |
| `navbar__logo`          | Logo and branding section (usually left) |
| `navbar__left`          | Container for left-aligned items         |
| `navbar__right`         | Container for right-aligned items        |
| `navbar__sidebar-left`  | Slide-in sidebar from the left edge      |
| `navbar__sidebar-right` | Slide-in sidebar from the right edge     |

You can mix left and right-aligned items as needed. Use `navbar__right` to push elements to the end of the navbar, such as buttons, toggles, or dropdowns.

```html
<nav class="navbar">
    <!-- Logo -->
    <div class="navbar__logo flex">
        <a class="navbar__item" href="/">Brand</a>
    </div>

    <!-- Left-Aligned Nav Items -->
    <div class="navbar__left flex">
        <a class="navbar__item" href="/features">Features</a>
        <a class="navbar__item active" href="/docs">Docs</a>
    </div>

    <!-- Right-Aligned Actions -->
    <div class="navbar__right flex">
        <button class="navbar__item navbar__toggle" aria-label="Open Menu">
            <svg class="svg-icon"><use href="#menu"></use></svg>
        </button>
    </div>
</nav>
```

---

## Sidebar Navigation

Sidebars slide in from either the **left** or **right** and are commonly toggled using hamburger or meatball buttons in the navbar. The `show` class reveals the sidebar with a slide-in animation.

```html
<!-- Left Sidebar -->
<div class="navbar__sidebar-left">
    <nav class="sidenav">
        <div class="sidenav__title">Main Menu</div>
        <a href="/dashboard" class="sidenav__link active">Dashboard</a>
        <a href="/profile" class="sidenav__link">Profile</a>
        <a href="/settings" class="sidenav__link">Settings</a>
    </nav>
</div>

<!-- Right Sidebar -->
<div class="navbar__sidebar-right">
    <nav class="sidenav">
        <div class="sidenav__title">More</div>
        <a href="/help" class="sidenav__link">Help Center</a>
        <a href="/feedback" class="sidenav__link">Feedback</a>
    </nav>
</div>

<!-- Optional overlay to dim the background -->
<div class="overlay"></div>
```

### Features:

- Fixed beneath navbar (`top: var(--navbar-height)`)
- Uses `transform` for slide-in effect
- Fullscreen on mobile

---

## Dropdown Menu

Dropdowns are used for quick-access menus triggered by buttons or icons. They support **left-aligned**, **right-aligned**, and **full-width** layouts. Use the `dropdown--show` class to make them visible.

```html
<div class="dropdown">
    <!-- Trigger Button -->
    <button class="navbar__item dropdown__toggle" type="button">
        Account
        <svg class="svg-icon" aria-hidden="true">
            <use href="#chevron-down"></use>
        </svg>
    </button>

    <!-- Dropdown Content -->
    <div class="dropdown__body dropdown__body--dropright">
        <a href="/settings" class="dropdown__item">
            <span class="dropdown__icon">⚙️</span>
            <span class="dropdown__label">Settings</span>
        </a>
        <a href="/logout" class="dropdown__item">
            <span class="dropdown__icon">🚪</span>
            <span class="dropdown__label">Logout</span>
        </a>
    </div>
</div>
```

### Layout Variants

| Class                       | Description                             | 
| --------------------------- | --------------------------------------- |
| `dropdown__body`            | Default left-aligned content            |
| `dropdown__body--dropright` | Aligns dropdown to the right side       |
| `dropdown__body--fluid`     | Makes the dropdown full-width on screen |

---

## Copy-Paste Example

Here’s a complete navbar with sidebar toggle and dropdown support:

```html
<nav class="navbar navbar--scrolled">
    <!-- Left Toggle Button (Hamburger) -->
    <div class="navbar__toggle flex hide-lmd">
        <button class="navbar__hamburger" type="button" aria-label="Open Menu">
            <svg class="svg-icon svg-icon-2x" aria-hidden="true">
                <use href="#icon-nav"></use>
            </svg>
        </button>
    </div>

    <!-- Logo -->
    <div class="navbar__logo flex">
        <a class="navbar__item" href="/">
            <img src="/assets/logo.svg" alt="Logo" style="height:32px;">
        </a>
    </div>

    <!-- Left Nav Items -->
    <div class="navbar__left flex" data-nav-active="home">
        <div class="navbar__item">
            <span class="navbar__member">MEMBER</span>
        </div>
        <a class="navbar__item" href="/features">Features</a>
        <a class="navbar__item active" href="/docs">Docs</a>
    </div>

    <!-- Right Nav Items -->
    <div class="navbar__right flex" data-nav-active="home">
        <div class="dropdown">
            <button class="navbar__item dropdown__toggle">Account</button>
            <div class="dropdown__body dropdown__body--dropright">
                <a href="/settings" class="dropdown__item">
                    <span class="dropdown__icon">
	                    <svg class="svg-icon svg-icon-md" aria-hidden="true"><use href="#box"></use></svg>
                    </span>
                    <span class="dropdown__label">Settings</span>
                </a>
                <a href="/logout" class="dropdown__item">
                    <span class="dropdown__icon">
	                    <svg class="svg-icon svg-icon-md" aria-hidden="true"><use href="#box"></use></svg>
                    </span>
                    <span class="dropdown__label">Logout</span>
                </a>
            </div>
        </div>

        <a class="navbar__item btn btn-blue-500 btn-square" href="/admin/edit">
            <svg class="svg-icon svg-icon-lg" aria-hidden="true">
                <use href="#icon-edit"></use>
            </svg>
        </a>
    </div>

    <!-- Right Toggle Button (Meatballs) -->
    <div class="navbar__toggle flex">
        <button class="navbar__meatballs" type="button" aria-label="Open Options">
            <svg class="svg-icon svg-icon-2x" aria-hidden="true">
                <use href="#icon-meatballs"></use>
            </svg>
        </button>
    </div>
</nav>

<!-- Optional: Sidebars and Overlay -->
<div class="navbar__sidebar-left">
    <!-- Content loaded dynamically or placed directly -->
</div>

<div class="navbar__sidebar-right">
    <!-- Right sidebar contents -->
</div>

<div class="overlay"></div>
<div class="navbar__observe"></div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | true   |
| JavaScript Dependency    | true   |
| Icon Dependency          | false  | 
