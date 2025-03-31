# Margin and Padding Utilities

Utility classes for applying spacing (`margin` and `padding`) using `rem` or `vw` units. Includes support for small-screen variants, precise values, and auto alignment.

---

### Table of Contents

#### Margin Utilities

- [Standard Margin Classes (rem)](#standard-margin-classes-rem)
- [Special Margin Sizes (rem)](#special-margin-sizes-rem)
- [Viewport-Based Margin Classes (vw)](#viewport-based-margin-classes-vw)
- [Responsive Margin Classes (Small Screens)](#responsive-margin-classes-small-screens)
- [Auto Margin Utilities](#auto-margin-utilities)

#### Padding Utilities

- [Standard Padding Classes (rem)](#standard-padding-classes-rem)
- [Special Padding Sizes (rem)](#special-padding-sizes-rem)
- [Viewport-Based Padding Classes (vw)](#viewport-based-padding-classes-vw)
- [Responsive Padding Classes (Small Screens)](#responsive-padding-classes-small-screens)

---

## Margin Utilities

### Standard Margin Classes (`rem`)

**Available values:**  
`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`

| Class Prefix  | Description        | 
| ------------- | ------------------ |
| `.m-{value}`  | Sets all margins   |
| `.mt-{value}` | Sets top margin    |
| `.mr-{value}` | Sets right margin  |
| `.mb-{value}` | Sets bottom margin |
| `.ml-{value}` | Sets left margin   |

**Example:**

```html
<div class="m-2">...</div>
<div class="mt-4 mb-2">...</div>
```

---

### Special Margin Sizes (`rem`)

**Available values:**  
`0125`, `025`, `0375`, `045`, `05`, `065`, `075`, `15`, `175`

#### Utility Variants

| Class Prefix    | Description        | 
| --------------- | ------------------ |
| `.m-{special}`  | Sets all margins   |
| `.mt-{special}` | Sets top margin    |
| `.mr-{special}` | Sets right margin  |
| `.mb-{special}` | Sets bottom margin |
| `.ml-{special}` | Sets left margin   |

#### Value Reference

| Class Prefix | Output Value (rem) | 
| ------------ | ------------------ |
| `.m-0125`    | `0.125rem`         |
| `.m-025`     | `0.25rem`          |
| `.m-0375`    | `0.375rem`         |
| `.m-045`     | `0.45rem`          |
| `.m-05`      | `0.5rem`           |
| `.m-065`     | `0.65rem`          |
| `.m-075`     | `0.75rem`          |
| `.m-15`      | `1.5rem`           |
| `.m-175`     | `1.75rem`          |

**Example:**

```html
<div class="ml-05 mb-15">...</div>
```

---

### Viewport-Based Margin Classes (`vw`)

**Available values:**  
`0vw`, `1vw`, `2vw`, `3vw`, `4vw`, `5vw`

| Class Prefix    | Description                          | 
| --------------- | ------------------------------------ |
| `.m-{value}vw`  | Sets all margins in viewport width   |
| `.mt-{value}vw` | Sets top margin in viewport width    |
| `.mr-{value}vw` | Sets right margin in viewport width  |
| `.mb-{value}vw` | Sets bottom margin in viewport width |
| `.ml-{value}vw` | Sets left margin in viewport width   |

**Example:**

```html
<div class="m-2vw">...</div>
```

---

### Responsive Margin Classes (Small Screens)

Same classes as above, with `sm-` prefix. Active on screen widths ≤ 750px.

| Class Prefix     | Description              | 
| ---------------- | ------------------------ |
| `.m-sm-{value}`  | Responsive margin        |
| `.mt-sm-{value}` | Responsive top margin    |
| `.mr-sm-{value}` | Responsive right margin  |
| `.mb-sm-{value}` | Responsive bottom margin |
| `.ml-sm-{value}` | Responsive left margin   |

**Example:**

```html
<div class="m-5 m-sm-2">...</div>
```

---

### Auto Margin Utilities

| Class      | Description                       | 
| ---------- | --------------------------------- |
| `.mt-auto` | `margin-top: auto !important;`    |
| `.mb-auto` | `margin-bottom: auto !important;` |
| `.ml-auto` | `margin-left: auto !important;`   |
| `.mr-auto` | `margin-right: auto !important;`  |

**Example:**

```html
<div class="ml-auto">Align right</div>
```

---

## Padding Utilities

### Standard Padding Classes (`rem`)

**Available values:**  
`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`

| Class Prefix  | Description         | 
| ------------- | ------------------- |
| `.p-{value}`  | Sets all padding    |
| `.pt-{value}` | Sets top padding    |
| `.pr-{value}` | Sets right padding  |
| `.pb-{value}` | Sets bottom padding |
| `.pl-{value}` | Sets left padding   |

**Example:**

```html
<div class="p-3">...</div>
<div class="pt-5 pr-2">...</div>
```

---

### Special Padding Sizes (`rem`)

**Available values:**  
`0125`, `025`, `0375`, `045`, `05`, `065`, `075`, `15`, `175`

#### Utility Variants

| Class Prefix    | Description         | 
| --------------- | ------------------- |
| `.p-{special}`  | Sets all padding    |
| `.pt-{special}` | Sets top padding    |
| `.pr-{special}` | Sets right padding  |
| `.pb-{special}` | Sets bottom padding |
| `.pl-{special}` | Sets left padding   |

#### Value Reference

| Class     | Output Value (`rem`) | 
| --------- | -------------------- |
| `.p-0125` | `0.125rem`           |
| `.p-025`  | `0.25rem`            |
| `.p-0375` | `0.375rem`           |
| `.p-045`  | `0.45rem`            |
| `.p-05`   | `0.5rem`             |
| `.p-065`  | `0.65rem`            |
| `.p-075`  | `0.75rem`            |
| `.p-15`   | `1.5rem`             |
| `.p-175`  | `1.75rem`            |

**Example:**

```html
<div class="pb-05 pr-15">...</div>
```

---

### Viewport-Based Padding Classes (`vw`)

**Available values:**  
`0vw`, `1vw`, `2vw`, `3vw`, `4vw`, `5vw`

| Class Prefix    | Description                           | 
| --------------- | ------------------------------------- |
| `.p-{value}vw`  | Sets all padding in viewport width    |
| `.pt-{value}vw` | Sets top padding in viewport width    |
| `.pr-{value}vw` | Sets right padding in viewport width  |
| `.pb-{value}vw` | Sets bottom padding in viewport width |
| `.pl-{value}vw` | Sets left padding in viewport width   |

**Example:**

```html
<div class="p-3vw">...</div>
```

---

### Responsive Padding Classes (Small Screens)

Same classes as above, with `sm-` prefix. Active on screen widths ≤ 750px.

| Class Prefix     | Description               | 
| ---------------- | ------------------------- |
| `.p-sm-{value}`  | Responsive padding        |
| `.pt-sm-{value}` | Responsive top padding    |
| `.pr-sm-{value}` | Responsive right padding  |
| `.pb-sm-{value}` | Responsive bottom padding |
| `.pl-sm-{value}` | Responsive left padding   |

**Example:**

```html
<div class="p-4 p-sm-1">...</div>
```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
