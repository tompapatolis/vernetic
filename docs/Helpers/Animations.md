# Animation Utilities

Reusable utility classes and keyframe animations for visual effects like spinning, sliding, scaling, and fading.

---

### Table of Contents

- [Standard Animations](#standard-animations)
- [Border Pulsate Animation](#border-pulsate-animation)
- [Hover Effect](#hover-effect)
- [Circular Spinner](#circular-spinner)
- [Animated Bubble Button](#animated-bubble-button)
- [Observer-Based Animations](#observer-based-animations)

---

## Standard Animations

These classes apply predefined CSS keyframe animations.

| Class                          | Animation               | Description                                   | 
| ------------------------------ | ----------------------- | --------------------------------------------- |
| `.animate-rotate`              | `rotating`              | Rotates element clockwise continuously        |
| `.animate-rotate-counterclock` | `rotating-counterclock` | Rotates element counterclockwise continuously |
| `.animate-heartbeat`           | `heartbeat`             | Pulses the element with a heartbeat effect    |
| `.animate-breathing`           | `breathing`             | Smooth in-out scale effect like breathing     |
| `.animate-deform`              | `deform`                | Alternating squish/stretch animation          |

**Example:**

```html
<div class="animate-rotate">🔄</div>
```

---

## Border Pulsate Animation

| Class             | Description                                | 
| ----------------- | ------------------------------------------ |
| `.border-pulsate` | Pulses the border color between two values |

**Keyframes:**

```css
@keyframes border-pulsate {
	0%, 100% { border-color: var(--color-red-500); }
	50%      { border-color: var(--color-black); } }
}
```

---

## Hover Effect

Adds a shadow and lightens child text on hover/focus.

| Class           | Description                                     | 
| --------------- | ----------------------------------------------- |
| `.hover-effect` | Adds shadow and light text color on hover/focus |

**Effect:**

- `box-shadow: var(--shadow-focus);`
- Text color: `var(--color-50)` (on all child elements)

**Example:**

```html
<div class="hover-effect">Hover me</div>
```

---

## Circular Spinner

Used to center and size a spinner image, responsive for small screens.

| Class      | Description                       | 
| ---------- | --------------------------------- |
| `.spinner` | Centers and sizes spinner element |

**Default Size:** `10rem`  
**Mobile Size:** `4rem` at `max-width: 750px`

**Example:**

```html
<div class="spinner">
	<img src="spinner.svg" />
</div>
```

---

## Animated Bubble Button

Adds a spinning conic background to buttons.

| Class                 | Description                                      | 
| --------------------- | ------------------------------------------------ |
| `.btn-bubble.animate` | Adds a rotating conic gradient around the button |

**Effect:**

- Uses `::after` with a `conic-gradient`
- Rotates using `@keyframes orbit`

**Example:**

```html
<button class="btn-bubble animate">Click me</button>
```

---

## Observer-Based Animations

These animations are applied using `data-animation` attributes and are triggered by an intersection observer when the element enters the viewport.

| Attribute/Class                       | Description                                | 
| ------------------------------------- | ------------------------------------------ |
| `data-animation="slide-left"`         | Slides in from the right                   |
| `data-animation="slide-right"`        | Slides in from the left                    |
| `data-animation="slide-up"`           | Slides in from below                       |
| `data-animation="slide-down"`         | Slides in from above                       |
| `data-animation="slide-grow"`         | Fades in and scales up                     |
| `data-animation="rotate-right"`       | Rotates element in 3D                      |
| `data-animation="spin"`               | Rotates 180° from below                    |
| `data-animation="spin-more"`          | Rotates element fully                      |
| `data-animation="sequential-fade-in"` | Sequentially fades in children             |

**Example:**

```html
<div data-animation="slide-up">Slide Up on View</div>
```

**Sequential Example:**

```html
<nav data-animation="sequential-fade-in">
	<a>Link 1</a>
	<a>Link 2</a>
	<a>Link 3</a>
</nav>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | true   | 
| JavaScript Dependency    | true   |
| Icon Dependency          | false  |
