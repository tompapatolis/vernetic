# Tree Menu

The Tree Menu is a collapsible, nested navigation component ideal for file browsers, documentation structures, and multi-level category trees. It supports folders and files, visual indicators, sticky positioning, and a compact variation for smaller layouts.

---

## Table of Contents

- [Overview](#overview)
- [Expanded and Active States](#expanded-and-active-states)
- [Folder and File Behavior](#folder-and-file-behavior)
- [Standard Tree Menu](#standard-tree-menu)
- [Compact Tree Menu](#compact-tree-menu)
- [Copy-Paste Example](#copy-paste-example)

---

## Overview

The Tree Menu is built with nested `<ul>` and `<li>` elements. It can:

- Visually distinguish **folders** and **files**
- Allow **collapsible folder trees**
- Automatically highlight the **active file**
- Stick to the top of the viewport with `position: sticky`

It supports visual folder/file icons using inline SVGs and is fully accessible with keyboard navigation.

---

## Expanded and Active States

- Folders are **collapsed** by default.
- To **open a folder**, add the `.expanded` class to its `<li>`.
- The currently active file link gets the `.active` class and is usually matched via JavaScript using `data-nav-active` and `data-match`.

--- 
## Folder and File Behavior

| Attribute / Class    | Purpose                                                                | 
| -------------------- | ---------------------------------------------------------------------- |
| `data-type="folder"` | Applies folder icon and makes item expandable                          |
| `data-type="file"`   | Applies file icon and styles links                                     |
| `.expanded`          | When applied to a folder `<li>`, shows its nested contents             |
| `.active`            | Applies to a link (`<a>`) to indicate the current file                 |
| `data-nav-active`    | Optional attribute used to mark a specific `data-match` link as active |
| `data-match`         | Used to match against `data-nav-active` for dynamic activation         |

---

## Standard Tree Menu

A sticky menu that supports expanding/collapsing nested levels. Use this for main sidebar menus or complex navigation.

```html
<ul class="tree-menu">
    <li data-type="folder" class="expanded">
        <span>Documentation</span>
        <ul>
            <li data-type="file"><a href="#introduction">Introduction</a></li>
            <li data-type="folder" class="expanded">
                <span>Getting Started</span>
                <ul>
                    <li data-type="file"><a href="#installation">Installation</a></li>
                    <li data-type="file"><a href="#configuration">Configuration</a></li>
                </ul>
            </li>
            <li data-type="file"><a href="#faq">FAQ</a></li>
        </ul>
    </li>
</ul>
```

### Features:

- Sticky at the top of the screen (`top: 6rem`)
- Folder icon rotates when `.expanded` is added
- Only shows subfolders when expanded
- File links highlight on hover or with `.active`

---

## Folder and File Behavior

### Folder `<li>`:

- Must include `data-type="folder"` and a `<span>` label
- Automatically gets a folder icon
- Expands when the `expanded` class is present

### File `<li>`:

- Must include `data-type="file"` and a nested `<a>`
- Gets a file icon positioned before the link
- Can use `.active` on `<a>` to indicate current file

---

## Compact Tree Menu

Use `.tree-menu-compact` for a smaller, color-coded version ideal for small viewports or inline menu panels.

```html
<ul class="tree-menu tree-menu-compact">
    <li data-type="folder">
        <span>Main Folder</span>
        <ul>
            <li data-type="folder">
                <span>Subfolder</span>
                <ul>
                    <li data-type="file"><a href="#">File One</a></li>
                    <li data-type="file"><a href="#">File Two</a></li>
                </ul>
            </li>
            <li data-type="file"><a href="#">Another File</a></li>
        </ul>
    </li>
</ul>
```

### Features:

- More compact line height
- Colored folders based on depth level
- Minimal spacing for deeply nested trees

---

## Copy-Paste Example

Here's a full example of the **standard tree menu** with a basic interactive structure:

```html
<div class="tree-menu" data-nav-active="mark/16">
    <ul>
        <li data-type="folder" class="expanded">
            <span>Components</span>
            <ul>
                <li data-type="file"><a href="/mark/14" data-match="mark/14">Tables</a></li>
                <li data-type="file"><a href="/mark/15" data-match="mark/15">Tabs</a></li>
                <li data-type="file"><a href="/mark/16" data-match="mark/16" class="active">Tiles</a></li>
                <li data-type="file"><a href="/mark/17" data-match="mark/17">Tree Menu</a></li>
            </ul>
        </li>

        <li data-type="folder">
            <span>Helpers</span>
            <ul>
                <li data-type="file"><a href="/mark/21" data-match="mark/21">Animations</a></li>
                <li data-type="file"><a href="/mark/22" data-match="mark/22">Containers</a></li>
                <li data-type="file"><a href="/mark/23" data-match="mark/23">Dimensions</a></li>
            </ul>
        </li>

        <li data-type="folder">
            <span>Root</span>
            <ul>
                <li data-type="file"><a href="/mark/31" data-match="mark/31">Base</a></li>
                <li data-type="file"><a href="/mark/32" data-match="mark/32">Colors</a></li>
                <li data-type="file"><a href="/mark/33" data-match="mark/33">Reset</a></li>
                <li data-type="file"><a href="/mark/34" data-match="mark/34">Typography</a></li>
            </ul>
        </li>

        <li data-type="file"><a href="/mark/1" data-match="mark/1">about</a></li>
        <li data-type="file"><a href="/mark/18" data-match="mark/18">contact</a></li>
    </ul>
</div>

```

---

| Release Meta             | v7.0.x |
| ------------------------ | ------ |
| SCSS Code Reviewed       | true   |
| Documentation Reviewed   | true   |
| JavaScript Code Reviewed | true   |
| JavaScript Dependency    | true   |
| Icon Dependency          | false  | 
