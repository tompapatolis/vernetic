# Divider Utilities Documentation

Comprehensive documentation for **Divider Utilities**, designed to provide visually appealing, customizable dividers to enhance layout design and content separation.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Basic Divider](#basic-divider)
4. [Divider Variants](#divider-variants)
5. [Position Modifiers](#position-modifiers)
6. [Usage](#usage)
    - [HTML Example](#html-example)
7. [Customization](#customization)
8. [Best Practices](#best-practices)
9. [Accessibility Considerations](#accessibility-considerations)

---

## Overview

**Divider Utilities** offer elegant and versatile dividers designed to visually separate content sections, enhancing readability and visual interest.

---

## Features

- Multiple customizable divider variants
- Background image support for engaging visuals
- Full-width responsiveness
- Customizable positions (top or bottom)
- Precisely adjustable positioning through negative margins

---

## Basic Divider

Base structure for dividers:

```html
<div class="divider divider--one" data-position="top"></div>
```

---

## Divider Variants

Available variants providing distinct visual styles:

| Class             | Aspect Ratio | Image Source   | 
| ----------------- | ------------ | -------------- |
| `.divider--one`   | `960/200`    | `divider1.svg` |
| `.divider--two`   | `960/200`    | `divider2.svg` |
| `.divider--three` | `960/100`    | `divider3.svg` |
| `.divider--four`  | `960/100`    | `divider4.svg` |
| `.divider--five`  | `960/100`    | `divider5.svg` |

---

## Position Modifiers

Easily control divider placement relative to sections:

- Top position:
    
    ```html
    <div class="divider divider--three" data-position="top"></div>
    ```
    
- Bottom position:
    
    ```html
    <div class="divider divider--three" data-position="bottom"></div>
    ```
    

Modifiers apply negative margins for seamless integration:

```css
[data-position="top"]    { margin-bottom: -1.3px; }
[data-position="bottom"] { margin-top: -1.3px; }
```

---

## Usage

### HTML Example

```html
<section class="content-section">
  <div class="divider divider--two" data-position="top"></div>
  <!-- Content Here -->
  <div class="divider divider--two" data-position="bottom"></div>
</section>
```

---

## Customization

- Adjust images by modifying the `background-image` URL.
- Maintain responsive aspect ratios by using the provided ratios.

Example CSS customization:

```css
.divider--custom {
  background-image: url('path/to/custom-image.svg');
  aspect-ratio: 960/150;
}
```

---

## Best Practices

- Use dividers sparingly to avoid overwhelming visual complexity.
- Match dividers stylistically to overall site aesthetics.
- Ensure consistency in aspect ratios and visual style.

---

## Accessibility Considerations

- Ensure decorative dividers are marked with appropriate ARIA attributes if necessary.
- Dividers should not convey critical information.

---

Utilize Divider Utilities effectively to create visually appealing and clearly structured layouts.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
