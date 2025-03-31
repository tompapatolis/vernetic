# Alert Component

The `alert` component is a flexible layout for presenting feedback messages such as informational notes, warnings, or success confirmations.

It supports:

- Semantic variants: `info`, `success`, `warning`
- Right alignment option
- Styled icon section and message body

---

### Table of Contents

- [Structure](#structure)
- [Variants](#variants)
- [Right-Aligned Alerts](#right-aligned-alerts)
- [Usage Example](#usage-example)

---

## Structure

Each alert is composed of two primary parts:

| Element        | Description                                             | 
| -------------- | ------------------------------------------------------- |
| `.alert`       | Main container (`display: flex`) with border and radius |
| `.alert__icon` | Icon wrapper with background color per variant          |
| `.alert__body` | Text content area (supports headings and paragraphs)    |

---

### Component Anatomy

```html
<div class="alert alert--info">
	<div class="alert__icon">
		<svg class="svg-icon" aria-hidden="true">
			<use href="#info"></use>
		</svg>
	</div>
	<div class="alert__body">
		<h3>Information</h3>
		<p>This is an info alert.</p>
	</div>
</div>
```

---

## Variants

| Modifier Class    | Icon Background     | Purpose                            | 
| ----------------- | ------------------- | ---------------------------------- |
| `.alert--info`    | `--color-800`       | Neutral/informational notices      |
| `.alert--success` | `--color-green-600` | Positive feedback or confirmations |
| `.alert--warning` | `--color-red-600`   | Errors or critical alerts          |

---

## Right-Aligned Alerts

Use the `.alert--right` modifier to push the alert to the right in a flex container.

```html
<div class="alert alert--info alert--right">...</div>
```

---

## Typography

- **Headings** inside `.alert__body` use `color: var(--color-100)` with minimal spacing.
- **Paragraphs** use `--fs-300` with controlled spacing (`0.5rem` bottom margin).

---

## Usage Example

### Info Alert

```html
<div class="alert alert--info">
    <div class="alert__icon">
        <svg class="svg-icon" aria-hidden="true">
            <use href="#info"></use>
        </svg>
    </div>
    <div class="alert__body">
        <h4>Info</h4>
        <p>This is an informational alert. It provides neutral context or clarification.</p>
    </div>
</div>
```

---

### Success Alert

```html
<div class="alert alert--success">
    <div class="alert__icon">
        <svg class="svg-icon" aria-hidden="true">
            <use href="#success"></use>
        </svg>
    </div>
    <div class="alert__body">
        <h4>Success</h4>
        <p>Your action was completed successfully.</p>
    </div>
</div>
```

---

### Warning Alert

```html
<div class="alert alert--warning">
    <div class="alert__icon">
        <svg class="svg-icon" aria-hidden="true">
            <use href="#warning"></use>
        </svg>
    </div>
    <div class="alert__body">
        <h4>Warning</h4>
        <p>Please review this information before proceeding.</p>
    </div>
</div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | true   | 
