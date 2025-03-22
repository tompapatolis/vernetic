# Margin and Padding Utilities Documentation

## Table of Contents

1. [Margin Utilities](#margin-utilities)
    - [Global Margin Classes](#global-margin-classes)
    - [Special Margin Values](#special-margin-values)
    - [Responsive Margins (Small Screens)](#responsive-margins-small-screens)
    - [Auto Margins](#auto-margins)
2. [Padding Utilities](#padding-utilities)
    - [Global Padding Classes](#global-padding-classes)
    - [Special Padding Values](#special-padding-values)
    - [Responsive Paddings (Small Screens)](#responsive-paddings-small-screens)

---

## Margin Utilities

Margin utilities help apply consistent spacing around elements quickly and intuitively.

### Global Margin Classes

Generates margin classes from `0rem` to `15rem` and `0vw` to `5vw`.

| Class      | Effect                  | Example                          | 
| ---------- | ----------------------- | -------------------------------- |
| `.m-{n}`   | Margin (`n` rem)        | `.m-1` → `margin: 1rem;`         |
| `.mt-{n}`  | Top margin (`n` rem)    | `.mt-2` → `margin-top: 2rem;`    |
| `.mr-{n}`  | Right margin (`n` rem)  | `.mr-3` → `margin-right: 3rem;`  |
| `.mb-{n}`  | Bottom margin (`n` rem) | `.mb-4` → `margin-bottom: 4rem;` |
| `.ml-{n}`  | Left margin (`n` rem)   | `.ml-1` → `margin-left: 1rem;`   |
| `.m-{n}vw` | Margin (`n` vw)         | `.m-1vw` → `margin: 1vw;`        |

### Special Margin Values

Special values allow finer control:

| Class     | Value   | Example                   | 
| --------- | ------- | ------------------------- |
| `.m-05`   | 0.5rem  | `margin: 0.5rem;`         |
| `.mt-025` | 0.25rem | `margin-top: 0.25rem;`    |
| `.mb-175` | 1.75rem | `margin-bottom: 1.75rem;` |

### Responsive Margins (Small Screens)

Classes prefixed with `sm-` apply only to screens ≤750px:

| Class       | Effect                   | Example                                | 
| ----------- | ------------------------ | -------------------------------------- |
| `.m-sm-{n}` | Margin (`n` rem)         | `.m-sm-2` → `margin: 2rem;`            |
| `.mb-sm-05` | Bottom margin (`0.5rem`) | `.mb-sm-05` → `margin-bottom: 0.5rem;` |

### Auto Margins

Auto margins align or push elements dynamically:

| Class      | Effect           | Example                                         | 
| ---------- | ---------------- | ----------------------------------------------- |
| `.mt-auto` | Auto top margin  | `.mt-auto` → `margin-top: auto;`                |
| `.ml-auto` | Auto left margin | Align elements rightward (`margin-left: auto;`) |

---

## Padding Utilities

Padding utilities apply consistent spacing within elements.

### Global Padding Classes

Generates padding from `0rem` to `15rem` and `0vw` to `5vw`.

| Class      | Effect                   | Example                           | 
| ---------- | ------------------------ | --------------------------------- |
| `.p-{n}`   | Padding (`n` rem)        | `.p-2` → `padding: 2rem;`         |
| `.pt-{n}`  | Top padding (`n` rem)    | `.pt-1` → `padding-top: 1rem;`    |
| `.pr-{n}`  | Right padding (`n` rem)  | `.pr-3` → `padding-right: 3rem;`  |
| `.pb-{n}`  | Bottom padding (`n` rem) | `.pb-4` → `padding-bottom: 4rem;` |
| `.pl-{n}`  | Left padding (`n` rem)   | `.pl-2` → `padding-left: 2rem;`   |
| `.p-{n}vw` | Padding (`n` vw)         | `.p-1vw` → `padding: 1vw;`        |

### Special Padding Values

Special padding values for precise spacing:

| Class      | Value    | Example                   | 
| ---------- | -------- | ------------------------- |
| `.p-075`   | 0.75rem  | `padding: 0.75rem;`       |
| `.pt-0375` | 0.375rem | `padding-top: 0.375rem;`  |
| `.pb-15`   | 1.5rem   | `padding-bottom: 1.5rem;` |

### Responsive Paddings (Small Screens)

Padding classes with `sm-` prefix apply for viewports ≤750px:

| Class        | Effect                     | Example                                   | 
| ------------ | -------------------------- | ----------------------------------------- |
| `.p-sm-{n}`  | Padding (`n` rem)          | `.p-sm-2` → `padding: 2rem;`              |
| `.pb-sm-065` | Bottom padding (`0.65rem`) | `.pb-sm-065` → `padding-bottom: 0.65rem;` |

---

### Example Usage

```html
<!-- Apply uniform padding of 1rem globally -->
<div class="p-1">Uniform padding 1rem</div>

<!-- Apply responsive top margin of 2rem only on small screens -->
<div class="mt-sm-2">Top margin 2rem on small screens</div>

<!-- Apply precise bottom padding of 0.75rem -->
<div class="pb-075">Bottom padding 0.75rem</div>

<!-- Automatically push element to the right -->
<div class="ml-auto">Aligned to right</div>
```

---

**Note:** The `!important` keyword is used in directional classes (`mt-`, `ml-`, etc.) to ensure these utilities reliably override other styles.

---

| Release Meta             | v7.0.0 |
| ------------------------ | ------ |
| SCSS Code Reviewed       | false  |
| Documentation Reviewed   | false  |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | null   | 
| Icon Dependency          | null   |
