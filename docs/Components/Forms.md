# Form Elements Documentation

Detailed documentation for **Form Elements**, providing flexible input styles and intuitive interactions designed for consistent, user-friendly forms.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Base Structure](#base-structure)
4. [Form Variations](#form-variations)
    - [Dark Theme](#dark-theme)
    - [Custom Select](#custom-select)
    - [Textarea](#textarea)
    - [Toggle Switch](#toggle-switch)
    - [Input with Button](#input-with-button)
    - [Radio Button Group](#radio-button-group)
    - [Search Input](#search-input)
    - [Simple Input](#simple-input)
5. [Floating Labels](#floating-labels)
6. [Interactive States](#interactive-states)
    - [Focus and Validation](#focus-and-validation)
7. [Customization](#customization)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)

---

## Overview

**Form Elements** provide a unified, responsive, and highly customizable solution for various form interactions, ensuring a seamless user experience across your application.

---

## Features

- Customizable input types (select, textarea, radio buttons, toggles)
- Animated floating labels for clarity
- Interactive states for improved UX
- Dark and light theme options
- Responsive layout and intuitive styling

---

## Base Structure

Standard HTML structure for forms:

```html
<div class="form-set">
  <input class="form-set__input" placeholder=" " />
  <label class="form-set__label">Your Label</label>
</div>
```

---

## Form Variations

### Dark Theme

```html
<div class="form-set form-set--dark">
  <input class="form-set__input" placeholder=" " />
  <label class="form-set__label">Dark Theme Input</label>
</div>
```

### Custom Select

```html
<div class="form-set form-set--select">
  <select class="form-set__select">
    <option value="">Select Option</option>
    <option value="1">Option 1</option>
  </select>
  <label class="form-set__label">Custom Select</label>
</div>
```

### Textarea

```html
<div class="form-set form-set--textarea">
  <textarea class="form-set__textarea" placeholder=" "></textarea>
  <label class="form-set__label">Your Message</label>
</div>
```

### Toggle Switch

```html
<div class="form-set form-set--toggle">
  <input type="checkbox" class="form-set__input-toggle" id="toggle" />
  <label class="form-set__switch" for="toggle"></label>
  <label class="form-set__label" for="toggle">Toggle Option</label>
</div>
```

### Input with Button

```html
<div class="form-set form-set--button">
  <input class="form-set__input" placeholder=" " />
  <button class="form-set__button btn">Submit</button>
  <label class="form-set__label">Search</label>
</div>
```

### Radio Button Group

```html
<div class="form-set form-set--radio">
  <input type="radio" class="form-set__radio-input" id="radio1" name="group">
  <label class="form-set__radio-label" for="radio1">Option 1</label>
  
  <input type="radio" class="form-set__radio-input" id="radio2" name="group">
  <label class="form-set__radio-label" for="radio2">Option 2</label>
</div>
```

### Search Input

```html
<div class="form-set-search">
  <input class="form-set-search__input" placeholder="Search..." />
  <button class="form-set-search__submit btn">Go</button>
</div>
```

### Simple Input

```html
<input class="simple-input" placeholder="Enter your text here..." />
```

---

## Floating Labels

Floating labels provide clear context and save space:

```css
.form-set__input:not(:placeholder-shown) ~ .form-set__label,
.form-set__input:focus ~ .form-set__label {
  transform: scale(0.85) translateY(-0.5rem);
  opacity: 0.65;
}
```

---

## Interactive States

### Focus and Validation

Indicate input states visually:

- **Focus State**:
    
    ```css
    .form-set__input:focus { border-color: var(--color-blue-400); }
    ```
    
- **Validation States**:
    
    - Valid: `.valid-password`
    - Invalid: `.invalid-password`

---

## Customization

Customize easily via CSS variables:

- Border, background, text colors (`--color-600`, `--color-900`, etc.)
- Font families (`--ff-heading`, `--ff-body`)

---

## Accessibility

- Clearly associate labels with inputs using the `for` attribute.
- Ensure sufficient contrast and readable labels.

---

## Best Practices

- Clearly distinguish input states (active, focus, error).
- Use intuitive icons and labels to enhance usability.
- Keep forms concise, logical, and easy to navigate.

---

Implement these Form Elements effectively to streamline user interactions and enhance overall form usability.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
