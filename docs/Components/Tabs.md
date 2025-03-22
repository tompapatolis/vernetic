# Tabs Component Documentation

Comprehensive documentation for the **Tabs Component**, offering a versatile and user-friendly interface for navigating between different content sections within a single view.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Base Structure](#base-structure)
4. [Tabs Variations](#tabs-variations)
    - [Horizontal Tabs](#horizontal-tabs)
    - [Vertical Tabs](#vertical-tabs)
    - [Toolbox Tabs](#toolbox-tabs)
5. [Component Structure](#component-structure)
    - [Header](#header)
    - [Active Indicator Line](#active-indicator-line)
    - [Buttons](#buttons)
    - [Content Panels](#content-panels)
6. [Animations](#animations)
7. [Responsive Behavior](#responsive-behavior)
8. [HTML Usage Examples](#html-usage-examples)
9. [Customization](#customization)
10. [Accessibility](#accessibility)
11. [Best Practices](#best-practices)

---

## Overview

The **Tabs Component** facilitates organized content presentation, enabling users to switch smoothly between different views or categories.

---

## Features

- Horizontal and vertical layout options
- Animated content transitions
- Clear visual active-state indication
- Responsive design adjustments
- Specialized toolbox styling variant

---

## Base Structure

Basic HTML structure:

```html
<div class="tabs">
  <div class="tabs__header">
    <button class="tabs__button active">Tab 1</button>
    <button class="tabs__button">Tab 2</button>
    <span class="tabs__line"></span>
  </div>
  <div class="tabs__body">
    <div class="tabs__content active">Content for Tab 1</div>
    <div class="tabs__content">Content for Tab 2</div>
  </div>
</div>
```

---

## Tabs Variations

### Horizontal Tabs

Default layout with horizontal alignment:

```html
<div class="tabs">
  <!-- tabs structure here -->
</div>
```

### Vertical Tabs

Vertical alignment for sidebar-style navigation:

```html
<div class="tabs-vertical">
  <!-- vertical tabs structure here -->
</div>
```

### Toolbox Tabs

Styled specifically for toolboxes:

```html
<div class="tabs tabs--toolbox">
  <!-- toolbox tabs structure here -->
</div>
```

---

## Component Structure

### Header

Container for tab buttons and active indicator:

```html
<div class="tabs__header">
  <button class="tabs__button">Tab</button>
  <span class="tabs__line"></span>
</div>
```

### Active Indicator Line

Visual indication of the currently active tab:

```html
<span class="tabs__line"></span>
```

### Buttons

Individual clickable tabs:

```html
<button class="tabs__button">Tab Name</button>
```

### Content Panels

Content associated with each tab:

```html
<div class="tabs__content">Tab Content</div>
```

---

## Animations

Smooth transitions for tab switching:

```css
@keyframes tabs_moving {
  from { transform: translateX(2rem); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes tabs_moving_vertical {
  from { transform: translateY(2rem); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

---

## Responsive Behavior

Adapts seamlessly on smaller screens, ensuring usability and readability:

```css
@media(max-width: 750px) {
  .tabs__button { font-size: smaller; padding: reduced; }
  .tabs-vertical { grid-template-columns: 1fr; }
}
```

---

## HTML Usage Examples

### Horizontal Tabs Example

```html
<div class="tabs">
  <div class="tabs__header">
    <button class="tabs__button active">Home</button>
    <button class="tabs__button">Profile</button>
    <span class="tabs__line"></span>
  </div>
  <div class="tabs__body">
    <div class="tabs__content active">Welcome to Home!</div>
    <div class="tabs__content">Profile Content</div>
  </div>
</div>
```

### Vertical Tabs Example

```html
<div class="tabs-vertical">
  <div class="tabs__header">
    <button class="tabs__button active">Dashboard</button>
    <button class="tabs__button">Settings</button>
    <span class="tabs__line"></span>
  </div>
  <div class="tabs__body">
    <div class="tabs__content active">Dashboard Overview</div>
    <div class="tabs__content">Settings Options</div>
  </div>
</div>
```

---

## Customization

Custom styling options via CSS variables:

- Active tab colors (`var(--color-a200)`)
- Font sizes, paddings, animations

---

## Accessibility

- Ensure tabs are keyboard navigable.
- Use clear labeling for tabs and content.
- Maintain high contrast for active/inactive states.

---

## Best Practices

- Limit tab count to essential items.
- Clearly differentiate active/inactive tabs.
- Ensure smooth transitions enhance user experience without causing distraction.

---

Leverage the Tabs Component to effectively organize content and improve navigational clarity across your user interfaces.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
