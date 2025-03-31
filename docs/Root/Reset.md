# Vernetic Modern CSS Reset

This CSS reset normalizes styles across browsers to eliminate inconsistencies and create a clean, reliable base for modern web development. It avoids opinionated styles while optimizing for responsiveness, readability, and accessibility.

---

### Features Overview

| Feature                             | Description                                                                                                 | 
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Universal Box-Sizing**            | Applies `box-sizing: border-box` to all elements and pseudo-elements, and resets margin and padding to `0`. |
| **Full Height Layout**              | Ensures `html` and `body` span the full viewport height (`min-height: 100vh`).                              |
| **Base Body Styles**                | Sets a readable font size, resets default bold weight, and sets `line-height: 1.5`.                         |
| **Link Reset**                      | Removes the default underline on `<a>` tags.                                                                |
| **Responsive Media**                | Makes `img`, `video`, and `picture` elements responsive (`max-width: 100%`).                                |
| **Image Fallback Styling**          | Adds fallback background styling and vertical alignment for images.                                         |
| **Form Font Inheritance**           | Inputs, buttons, textareas, and selects inherit font styles from `body`.                                    |
| **Input Reset**                     | Removes default appearance, outline, and border-radius for consistent styling.                              |
| **Textarea Reset**                  | Prevents resizing, removes borders and shadows, and enables smooth scrolling.                               |
| **Submit Button Fix**               | Keeps `<input type="submit">` width set to `auto`.                                                          |
| **Chrome Autofill Fix**             | Overrides yellow autofill background and sets readable text color.                                          |
| **Table Reset**                     | Collapses table borders for a cleaner look.                                                                 |
| **Button Reset**                    | Removes all native button styling and outline.                                                              |
| **Button Interaction Enhancements** | Ensures buttons are accessible and retain inherited text color.                                             |
| **Content Responsiveness**          | Applies `max-width: 100%` to images, iframes, and tables to prevent overflow.                               |
| **Text Overflow Protection**        | Applies `overflow-wrap: anywhere` to paragraphs, links, and tables.                                         |
| **Contenteditable Focus Reset**     | Removes outlines from focused `[contenteditable]` elements.                                                 |

---

### Why Use This Reset?

- Removes inconsistent default browser styles
- Sets a clean foundation for responsive, accessible UI
- Works seamlessly with utility-first or component-based CSS systems
- Minimal but effective — avoids heavy opinionation

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | false  |
| JavaScript Dependency    | false  |
| Icon Dependency          | false  | 
