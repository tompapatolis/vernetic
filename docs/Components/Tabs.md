# Tabs

The Tabs component provides a flexible interface for toggling between related content panels. It includes both **horizontal** and **vertical** layouts, with utility classes for layout, transitions, and styling.

---

## Table of Contents

- [Overview](#overview)
- [Horizontal Tabs](#horizontal-tabs)
- [Vertical Tabs](#vertical-tabs)
- [Toolbox Variation](#toolbox-variation)
- [Tab Animation](#tab-animation)
- [Class Reference](#class-reference)

---

## Overview

Each tab component includes:

- A header with one or more tab buttons
- A tab indicator line
- A body with content panels that toggle based on active tab
- Smooth animations and responsive styling

You control the visible tab by toggling the `.active` class on both the button and its corresponding content panel.

---

## Horizontal Tabs

Use `.tabs` for the base layout, which stacks the header and body vertically. The header buttons are laid out horizontally by default using `flex`.

```html
<div class="tabs">
    <div class="tabs__header">
        <button class="tabs__button active" type="button">Tab One</button>
        <button class="tabs__button" type="button">Tab Two</button>
        <button class="tabs__button" type="button">Tab Three</button>
        <span class="tabs__line"></span>
    </div>

    <div class="tabs__body">
        <div class="tabs__content active">
            <p>This is the content for Tab One.</p>
        </div>
        <div class="tabs__content">
            <p>This is the content for Tab Two.</p>
        </div>
        <div class="tabs__content">
            <p>This is the content for Tab Three.</p>
        </div>
    </div>
</div>
```

**Usage Tips:**

- Only one `.tabs__button` and one `.tabs__content` should have the `.active` class at a time.
- The `.tabs__line` should be placed directly in the `.tabs__header` to act as the visual indicator.

---

## Vertical Tabs

Use `.tabs-vertical` to organize the tab buttons in a column beside the content area.

```html
<div class="tabs-vertical">
    <div class="tabs-vertical__header">
        <button class="tabs-vertical__button active" type="button">General</button>
        <button class="tabs-vertical__button" type="button">Appearance</button>
        <button class="tabs-vertical__button" type="button">Security</button>
        <span class="tabs-vertical__line"></span>
    </div>

    <div class="tabs-vertical__body">
        <div class="tabs-vertical__content active">
            <p>This is the General tab content.</p>
        </div>
        <div class="tabs-vertical__content">
            <p>This is the Appearance tab content.</p>
        </div>
        <div class="tabs-vertical__content">
            <p>This is the Security tab content.</p>
        </div>
    </div>
</div>
```

---

## Toolbox Variation

Use `.tabs--toolbox` as a modifier to reduce padding and font size. This is ideal for dashboard or utility layouts.

```html
<div class="tabs tabs--toolbox">
    <div class="tabs__header">
        <button class="tabs__button active" type="button">Logs</button>
        <button class="tabs__button" type="button">Backups</button>
    </div>
    <div class="tabs__body">
        <div class="tabs__content active">
            <p>Logs go here.</p>
        </div>
        <div class="tabs__content">
            <p>Backup options here.</p>
        </div>
    </div>
</div>
```

---

## Tab Animation

- `.tabs__content` uses `@keyframes tabs_moving` for a slide/fade-in animation.
- `.tabs-vertical__content` uses `@keyframes tabs_moving_vertical` for vertical slide-in.

Make sure animations only trigger on visible content using the `.active` class.

---

## Class Reference

| Class                     | Description                                            | 
| ------------------------- | ------------------------------------------------------ |
| `.tabs`                   | Horizontal tab container                               |
| `.tabs-vertical`          | Vertical tab container (2-column grid layout)          |
| `.tabs__header`           | Holds tab buttons (horizontal layout)                  |
| `.tabs__line`             | Active tab underline indicator (horizontal)            |
| `.tabs__button`           | Individual tab button (use `.active` for selected tab) |
| `.tabs__body`             | Contains all tab contents                              |
| `.tabs__content`          | Content panel (use `.active` to show)                  |
| `.tabs-vertical__header`  | Header for vertical layout (column of buttons)         |
| `.tabs-vertical__line`    | Vertical tab line indicator                            |
| `.tabs-vertical__button`  | Tab button for vertical layout                         |
| `.tabs-vertical__body`    | Container for vertical content panels                  |
| `.tabs-vertical__content` | Content panel for vertical tabs                        |
| `.tabs--toolbox`          | Styling modifier for compact tab layout                |

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | true   |
| JavaScript Dependency    | true   |
| Icon Dependency          | false  | 
