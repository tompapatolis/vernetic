/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ◌⎯⎯⎯⎯⎯⎯◖ Navigation ◗⎯⎯⎯⎯⎯⎯◌
 */



/**
 * Initialize Navbar
 */

export function initNavbar() {
    const navToggleLeft  = document.querySelector('.navbar__hamburger');
    const navToggleRight = document.querySelector('.navbar__meatballs');
    const sidebarLeft    = document.querySelector('.navbar__sidebar-left');
    const sidebarRight   = document.querySelector('.navbar__sidebar-right');
    const overlay        = document.querySelector('.overlay');
    const body           = document.body;


    if ( navToggleLeft )  {
        navToggleLeft.addEventListener('click', (e) => {
            navToggleLeft.classList.toggle('active');
            swapIcon(navToggleLeft.querySelector('use'), 'nav', 'close');
            sidebarLeft.classList.toggle('show');

            if ( !sidebarRight.classList.contains('show') ) {
                overlay.classList.toggle('show');
                body.classList.toggle('no-scroll');
            }

        });
    }

    if ( navToggleRight )  {
        navToggleRight.addEventListener('click', (e) => {
            navToggleRight.classList.toggle('active');
            swapIcon(navToggleRight.querySelector('use'), 'meatballs', 'close');
            sidebarRight.classList.toggle('show');

            if ( !sidebarLeft.classList.contains('show') ) {
                overlay.classList.toggle('show');
                body.classList.toggle('no-scroll');
            }
        });
    }

    if ( overlay )  {
        overlay.addEventListener('click', (e) => {
            navToggleLeft.classList.remove('active');
            revertIcon(navToggleLeft.querySelector('use'), '#nav');

            navToggleRight.classList.remove('active');
            revertIcon(navToggleRight.querySelector('use'), '#meatballs');

            sidebarLeft.classList.remove('show');
            sidebarRight.classList.remove('show');
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

/**
 * Highlight Active Navigation Item
 */

 export function activeNav() {
    const navActive = document.querySelectorAll('[data-nav-active]');

    navActive.forEach(itemGroup => {

        const navActiveSelected = itemGroup.dataset.navActive;
        const navActiveItems    = itemGroup.querySelectorAll('a');

        navActiveItems.forEach(item => {
            if ( item.dataset.match == navActiveSelected ) {
                item.classList.add('active');
            }
        });

    });
}

/**
 * Dropdown Menus
 * https://www.youtube.com/watch?v=S-VeYcOCFZw
 * https://github.com/WebDevSimplified/advanced-dropdown/blob/main/script.js
 *
 */

export function dropdownToggle() {
    const exists = document.querySelector('.dropdown');
    if ( !exists ) {return;}

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

/**
 * Changing a navigation's style on scroll
 */

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

/**
 * Pagination
 */

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