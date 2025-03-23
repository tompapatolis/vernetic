/******************************************************************************
 * TABS COMPONENT
 *
 * Purpose:
 * - Handles interactive tab navigation for sections with the `.tabs` class.
 *
 * Behavior:
 * - Highlights the active `.tabs__button` and corresponding `.tabs__content`
 * - Animates an underline (`.tabs__line`) to match the active tab
 * - Supports multiple `.tabs` components on the same page
 *
 * Notes:
 * - Exits early if no `.tabs` container is found in the DOM
 * - Each `.tabs` container must include:
 *   • `.tabs__button` elements (one must have `.active` by default)
 *   • `.tabs__content` elements in the same order
 *   • `.tabs__line` for underline animation
 *****************************************************************************/

export function tabs() {
    if (!document.querySelector('.tabs')) return; // Exit early if tabs does not exist

    const tabElements = document.querySelectorAll('.tabs');

    tabElements.forEach( tabElement => {

        // Init
        const activeButton = tabElement.querySelector('.tabs__button.active');
        const line         = tabElement.querySelector('.tabs__line');
        line.style.width   = activeButton.offsetWidth + "px";
        line.style.left    = activeButton.offsetLeft + "px";

        // Do it's thing
        const tabs        = tabElement.querySelectorAll('.tabs__button');
        const contents    = tabElement.querySelectorAll('.tabs__content');

        tabs.forEach( (tab, index) => {
            tab.addEventListener('click', e => {

                tabs.forEach( tab => {tab.classList.remove('active')});
                tab.classList.add('active');

                contents.forEach( content => {content.classList.remove('active')});
                contents[index].classList.add('active');

                line.style.width = e.currentTarget.offsetWidth + "px";
                line.style.left  = e.currentTarget.offsetLeft + "px";

            });
        });
    });
}

/******************************************************************************
 * VERTICAL TABS COMPONENT
 *
 * Purpose:
 * - Handles interactive vertical tab navigation for elements with the
 *   `.tabs-vertical` class.
 *
 * Behavior:
 * - Highlights the active `.tabs-vertical__button` and corresponding
 *   `.tabs-vertical__content`
 * - Animates a vertical `.tabs-vertical__line` alongside the active tab
 * - Remembers the last selected tab using `localStorage` (per page & tab ID)
 *
 * Notes:
 * - Exits early if no `.tabs-vertical` container is found
 * - Each `.tabs-vertical` container must include:
 *   • `.tabs-vertical__button` elements (one with `.active`)
 *   • `.tabs-vertical__content` elements in the same order
 *   • `.tabs-vertical__line` for visual indicator
 * - Relies on a `<meta name="base-url">` tag to namespace localStorage keys
 *****************************************************************************/

export function tabsVertical() {
    if (!document.querySelector('.tabs-vertical')) return; // Exit early if tabs-vertical does not exist

    const tabElements = document.querySelectorAll('.tabs-vertical');
    const baseUrl     = document.querySelector('meta[name="base-url"]')?.getAttribute('content') || '';
    const baseKey     = baseUrl.replace(/(^\w+:|^)\/\//, '').replace(/\W/g, '_');

    tabElements.forEach( tabElement => {

        // Init
        const activeButton = tabElement.querySelector('.tabs-vertical__button.active');
        const line         = tabElement.querySelector('.tabs-vertical__line');
        line.style.height  = activeButton.offsetHeight + "px";
        line.style.top     = activeButton.offsetTop  + "px";

        // localStorage Params
        const tabsId   = tabElement.id;
        const position = localStorage.getItem(baseKey + '-tabIndex-' + tabsId);

        // Do it's thing
        const tabs        = tabElement.querySelectorAll('.tabs-vertical__button');
        const contents    = tabElement.querySelectorAll('.tabs-vertical__content');

        // Restore from localStorage
        if ( tabsId !== null &&  position !== null) {
            contents.forEach( content => {content.classList.remove('active')});
            contents[position].classList.add('active');
            tabs.forEach( tab => {tab.classList.remove('active')});
            tabs[position].classList.add('active');
            line.style.height = tabs[position].offsetHeight + "px";
            line.style.top    = tabs[position].offsetTop + "px";
        }

        // Click Listener
        tabs.forEach( (tab, index) => {
            tab.addEventListener('click', e => {

                tabs.forEach( tab => {tab.classList.remove('active')});
                tab.classList.add('active');

                contents.forEach( content => {content.classList.remove('active')});
                contents[index].classList.add('active');

                line.style.height = e.currentTarget.offsetHeight + "px";
                line.style.top    = e.currentTarget.offsetTop + "px";

                // Save to localStorage
                if ( tabsId !== null ) {
                    localStorage.setItem(baseKey + '-tabIndex-' + tabsId, index);
                }

            });
        });
    });
}