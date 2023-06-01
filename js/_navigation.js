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


    // Sidenav Toggle
    const navToggleLeft  = document.querySelector('.navbar__hamburger');
    const navToggleRight = document.querySelector('.navbar__meatballs');
    const sidebarLeft    = document.querySelector('.navbar__sidebar-left');
    const sidebarRight   = document.querySelector('.navbar__sidebar-right');
    const overlay        = document.querySelector('.overlay');

    if ( navToggleLeft )  {
        navToggleLeft.addEventListener('click', (e) => {
            navToggleLeft.classList.toggle('active');
            sidebarLeft.classList.toggle('show');

            if ( !sidebarRight.classList.contains('show') ) {
                overlay.classList.toggle('show');
            }

        });
    }

    if ( navToggleRight )  {
        navToggleRight.addEventListener('click', (e) => {
            navToggleRight.classList.toggle('active');
            sidebarRight.classList.toggle('show');

            if ( !sidebarLeft.classList.contains('show') ) {
                overlay.classList.toggle('show');
            }
        });
    }

    if ( overlay )  {
        overlay.addEventListener('click', (e) => {
            navToggleLeft.classList.remove('active');
            navToggleRight.classList.remove('active');
            sidebarLeft.classList.remove('show');
            sidebarRight.classList.remove('show');
            overlay.classList.remove('show');
        });
    }

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
