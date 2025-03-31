# Form System

Forms and inputs are the main way of entering data into a web application. Styling them has historically been tricky, but recent techniques have improved the experience significantly.

This form system provides flexible, accessible components with consistent styling. Inputs support floating labels, dark mode, read-only states, and more. The approach uses utility-based classes for extensibility and theme support across input types.

---

## Text Input

The standard single-line input field. This is the most commonly used form element for collecting basic text values like names, emails, or titles.

**Key Features**:

- Fully responsive
- Floating label
- Transitions on focus
- Customizable placeholder

**Syntax**

```html
<div class="form-set">
    <input class="form-set__input" type="text" placeholder="#" />
    <label class="form-set__label">Input Text</label>
</div>
```

---

## Date Input

This version supports datetime-local inputs, providing native OS date pickers where available. Useful for scheduling, reminders, or timestamps.

**Syntax**

```html
<div class="form-set">
    <input class="form-set__input" type="datetime-local" value="2025-12-31T10:10" />
    <label class="form-set__label">Input Date</label>
</div>
```

---

## Toggle

Custom toggle switches use a hidden checkbox for styling but remain fully accessible and form-compliant. A hidden input is included to ensure a `0` is submitted when unchecked.

**Use Cases**:

- Enable/disable settings
- Binary features (e.g., dark mode, notifications)

**Syntax**

```html
<div class="form-set form-set--toggle">
    <input type="hidden" name="toggle-id" value="0" />
    <input class="form-set__input-toggle" id="toggle-id" name="toggle-id" type="checkbox" value="1" />
    <label class="form-set__switch" for="toggle-id"></label>
    <span class="form-set__label">Toggle This</span>
</div>
```

---

## Select

Custom select elements use floating labels and an embedded SVG for a better native look. The class `.form-set--select` styles the dropdown icon and spacing.

**Use Cases**:

- Category selection
- Options with limited choices

**Syntax**

```html
<div class="form-set form-set--select">
    <select class="form-set__select">
        <option value="">Choose one</option>
        <option value="option_1">Option 1</option>
        <option value="option_2">Option 2</option>
        <option value="option_3">Option 3</option>
    </select>
    <label class="form-set__label">Select</label>
</div>
```

---

## Radio Buttons

These custom radio buttons are visually grouped and styled with consistent height, spacing, and interactive focus states. Ideal for exclusive-choice fields.

**Accessibility Tip**: Make sure all radios share the same `name` attribute and each `label` is linked to an `id`.

**Syntax**

```html
<div class="form-set form-set--radio">
    <input class="form-set__radio-input" type="radio" value="1" name="myRadio" id="myRadio1" checked />
    <label class="form-set__radio-label" for="myRadio1">Active</label>

    <input class="form-set__radio-input" type="radio" value="2" name="myRadio" id="myRadio2" />
    <label class="form-set__radio-label" for="myRadio2">Disabled</label>

    <input class="form-set__radio-input" type="radio" value="3" name="myRadio" id="myRadio3" />
    <label class="form-set__radio-label" for="myRadio3">Deleted</label>

    <label class="form-set__label">Radio Buttons</label>
</div>

```

---

## Text Input with Button

Perfect for fields that need a quick action beside them — like searching, adding items, or triggering uploads. The button stays visually connected to the input field.

**Styling Notes**:

- Button is styled with `.form-set__button`
- Works with `.btn` styles and icons

**Syntax**

```html
<div class="form-set form-set--button">
    <input class="form-set__input" type="text" placeholder="#" />
    <label class="form-set__label">Input Text</label>
    <button class="btn btn-700 form-set__button">
        <svg class="svg-icon svg-icon-md" aria-hidden="true">
            <use href="#add-photo"></use>
        </svg>
    </button>
</div>
```

---

## Textarea

Used for multi-line input like messages, comments, or descriptions. The floating label supports interaction based on content or focus. Scrollbars are also custom styled.

**Features**:

- Styled scrollbars
- Full floating label support
- Works with `rows`, `maxlength`, etc.

**Syntax**

```html
<div class="form-set form-set--textarea">
    <textarea class="form-set__textarea" placeholder="#" rows="5">Your text.</textarea>
    <label class="form-set__label">Textarea</label>
</div>
```

---

## Readonly Attribute

Readonly states are visually distinct and show a contextual label using `data-readonly`. The label appears only when the field is focused, acting like a temporary warning or notice.

**Use Cases**:

- Fields locked based on user permissions
- Inputs with calculated values

**Syntax**

```html
<div class="form-set" data-readonly="No Input for you!">
    <input class="form-set__input" type="text" placeholder="#" readonly />
    <label class="form-set__label">Input Text</label>
</div>

<div class="form-set" data-readonly="No Date for you!">
    <input class="form-set__input" type="datetime-local" value="2025-12-31T10:10" readonly />
    <label class="form-set__label">Input Text</label>
</div>

<div class="form-set form-set--button" data-readonly="No Input & Button for you!">
    <input class="form-set__input" type="text" placeholder="#" readonly />
    <label class="form-set__label">Input Text</label>
    <button class="btn btn-700 form-set__button">
        <svg class="svg-icon svg-icon-md" aria-hidden="true">
            <use href="#add-image"></use>
        </svg>
    </button>
</div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
