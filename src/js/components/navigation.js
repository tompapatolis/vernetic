/******************************************************************************
 * NAVBAR TOGGLE & SIDEBAR HANDLING
 *
 * Purpose:
 * - Handles interactions for left and right navbar toggles (hamburger & meatballs)
 * - Toggles corresponding sidebars and overlay visibility
 * - Prevents page scrolling when sidebar is open
 *
 * Behavior:
 * - Left toggle controls `.navbar__sidebar-left`
 * - Right toggle controls `.navbar__sidebar-right`
 * - Overlay click resets all active states and closes both sidebars
 *
 * Notes:
 * - Uses `swapIcon()` and `revertIcon()` to change SVG icons on toggle
 * - Early exit if no relevant elements are found in the DOM
 *****************************************************************************/

export function initNavbar() {
    if (!document.querySelector('.navbar')) return; // Exit early if navbar does not exist

    const navToggleLeft = document.querySelector('.navbar__hamburger');
    const sidebarLeft   = document.querySelector('.navbar__sidebar-left');
    const overlay       = document.querySelector('.overlay');
    const body          = document.body;

    if (navToggleLeft) {
        navToggleLeft.addEventListener('click', () => {
            navToggleLeft.classList.toggle('active');
            swapIcon(navToggleLeft.querySelector('use'), 'nav', 'close');
            sidebarLeft.classList.toggle('show');
            overlay.classList.toggle('show');
            body.classList.toggle('no-scroll');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            navToggleLeft.classList.remove('active');
            revertIcon(navToggleLeft.querySelector('use'), '#nav');
            sidebarLeft.classList.remove('show');
            overlay.classList.remove('show');
            body.classList.remove('no-scroll');
        });
    }
}

function swapIcon(element, icon1, icon2) {
    // Get the current href attribute value
    let currentHref = element.getAttribute('href');

    // Toggle between icon1 and icon2
    let newHref = currentHref.includes(icon1) ? currentHref.replace(icon1, icon2) : currentHref.replace(icon2, icon1);

    // Update the href attribute of the element
    element.setAttribute('href', newHref);
}

function revertIcon(element, icon) {
    // Get the current href attribute value
    let currentHref = element.getAttribute('href');

    // Replace everything after '#' with the provided icon
    let newHref = currentHref.replace(/#.*$/, icon);

    // Update the href attribute of the element
    element.setAttribute('href', newHref);
}

/******************************************************************************
 * HIGHLIGHT ACTIVE NAVIGATION ITEM
 *
 * Purpose:
 * - Highlights the active navigation link within containers that use the
 *   `data-nav-active` attribute to indicate which link should be marked active.
 *
 * Behavior:
 * - Loops through each group with `[data-nav-active]`
 * - Compares each link’s `data-match` to the group’s `data-nav-active` value
 * - Adds the `active` class to matching link(s)
 *
 * Notes:
 * - Exits early if no `[data-nav-active]` containers are found
 *****************************************************************************/

export function activeNav() {
    const navActive = document.querySelectorAll('[data-nav-active]');
    if (!navActive.length) return; // Exit early if '[data-nav-active]' does not exist

    navActive.forEach(itemGroup => {

        const navActiveSelected = itemGroup.dataset.navActive;
        const navActiveItems    = itemGroup.querySelectorAll('a');

        navActiveItems.forEach(item => {

            const matchCriteriaString = item.dataset.match ?? '';

            if (!matchCriteriaString) return;

            const matchValues = matchCriteriaString.split(',').map(value => value.trim());
            if (matchValues.includes(navActiveSelected)) {
                item.classList.add('active');
            }

        });

    });
}

/******************************************************************************
 * DROPDOWN MENUS
 *
 * Source:
 * - Inspired by Web Dev Simplified:
 *   https://www.youtube.com/watch?v=S-VeYcOCFZw
 *   https://github.com/WebDevSimplified/advanced-dropdown/blob/main/script.js
 *
 * Purpose:
 * - Toggles visibility of `.dropdown` menus on click
 * - Closes other open dropdowns when a new one is toggled
 * - Collapses all dropdowns when clicking outside
 *
 * Behavior:
 * - Adds/removes `.dropdown--show` class on click
 * - Listens to clicks outside to close any open dropdowns
 *
 * Notes:
 * - Exits early if no `.dropdown` exists in the DOM
 *****************************************************************************/

export function dropdownToggle() {
    if (!document.querySelector('.dropdown')) return; // Exit early

    const dropdowns       = document.querySelectorAll('.dropdown');
    const dropdownToggles = document.querySelectorAll('.dropdown__toggle');

    dropdownToggles.forEach( dropdownToggle => {
        dropdownToggle.addEventListener('click', e => {

            // Cool! Find other Drowdowns
            const currentDropdown = dropdownToggle.parentElement;
            const otherDrowdowns = [...dropdowns].filter(dropdown => {
                return dropdown !== currentDropdown;
            });

            otherDrowdowns.forEach(item => {item.classList.remove('dropdown--show')});
            currentDropdown.classList.toggle('dropdown--show');

        });
    });

    // Collapse if clicked outside
    document.addEventListener("click", e => {
        if ( e.target.closest('.dropdown') ) {return;}
        dropdowns.forEach(item => {item.classList.remove('dropdown--show')});
    })

}

/******************************************************************************
 * NAVBAR STYLE ON SCROLL
 *
 * Purpose:
 * - Dynamically changes the navbar’s appearance when the user scrolls past
 *   a specific marker element (`.navbar__observe`)
 *
 * Behavior:
 * - Adds `.navbar--scrolled` to `.navbar--dynamic` when `.navbar__observe`
 *   leaves the viewport
 * - Removes the class when the marker is back in view
 *
 * Notes:
 * - Exits early if `.navbar--dynamic` is not found in the DOM
 * - Uses IntersectionObserver for efficient scroll detection
 *****************************************************************************/

export function navChange() {
    const navbarDynamic = document.querySelector('.navbar--dynamic');
    if ( !navbarDynamic ) {return;}
    const navbarObserve = document.querySelector('.navbar__observe');

    // Set up the intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio === 0) {
                navbarDynamic.classList.add('navbar--scrolled');
            } else {
                navbarDynamic.classList.remove('navbar--scrolled');
            }
        });
    }, { threshold: [0] });

    // Start observing the navbar observe element
    observer.observe(navbarObserve);
}

/******************************************************************************
 * PAGINATION TOGGLE
 *
 * Purpose:
 * - Toggles the visibility of additional pagination items when the user
 *   clicks the "More" button (`.pagination__more`)
 *
 * Behavior:
 * - Clicking the button shows/hides the `.pagination__list`
 * - Clicking anywhere outside the button hides the list
 *
 * Notes:
 * - Exits early if `.pagination__more` is not found in the DOM
 *****************************************************************************/

export function pagination() {
    const paginationButton = document.querySelector('.pagination__more');
    if ( !paginationButton ) {return;}

    const paginationList   =  document.querySelector('.pagination__list');

    paginationButton.addEventListener('click', e => {
        paginationList.classList.toggle('hidden');
    });

    // Check if the clicked element is not inside the pagination button
    document.addEventListener('click', e => {
        if (!paginationButton.contains(e.target)) {
            paginationList.classList.add('hidden');
        }
    });
}