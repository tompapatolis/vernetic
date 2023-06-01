/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ◌⎯⎯⎯⎯⎯⎯◖ Components ◗⎯⎯⎯⎯⎯⎯◌
 */

/**
 * Draggable Elements
 */

export function draggableElements() {
    const exists = document.querySelector('.draggable');
    if ( !exists ) {return;}

    const draggables    = document.querySelectorAll('.draggable');
    const draggableList = document.querySelectorAll('.draggable-list');

    draggables.forEach(draggable => {
        draggable.setAttribute('draggable', true);

        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
        });
    });

    draggableList.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElement);
            }

            let i = 0;
            const newDraggables = document.querySelectorAll('.draggable')
            newDraggables.forEach(d => {
                d.dataset.position = i;
                i++;
            });

        });
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/**
 * Panels with Incremental Tiles
 */

export function incPanels() {

    const panels = document.querySelectorAll('.panel-inc');

    panels.forEach( panel => {
        const tiles = panel.querySelectorAll('.tile');
        tiles.forEach( (tile, index) => {
            let newDiv = document.createElement("div");
            newDiv.innerText = String(index + 1).padStart(2, '0');
            newDiv.classList.add('tile-header');
            tile.appendChild(newDiv);
        });
    });

}


/**
 * Accordions
 */

export function accordion() {

    const exists = document.querySelector('.accordion');
    if ( !exists ) {return;}

    const accordionHeaders = document.querySelectorAll('.accordion__header');

    const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>';

    accordionHeaders.forEach( item => {
        item.firstElementChild.insertAdjacentHTML('afterbegin', icon);

        item.addEventListener('click', e => {
            e.currentTarget.closest('.accordion').classList.toggle('accordion--open');
        });

    });
}

/**
 * Modals
 */

// Initialize
export function initModal() {
    const exists = document.querySelector('.modal');
    if ( !exists ) {return;}

    // Overlay
    let overlay = document.querySelector('.modal__overlay');
    if ( !overlay ) {
        overlay = document.createElement('div');
        overlay.classList.add('modal__overlay');
        document.body.appendChild(overlay);
    }

    const modals = document.querySelectorAll('.modal');

    // Close buttons
    modals.forEach( modal => {
        const closeModal = modal.querySelector('.modal__close');
        closeModal.addEventListener('click', e => {
            modal.classList.remove('modal--show');
            overlay.classList.remove('modal__overlay--show');
        });
    });

    // Open buttons
    const openModalButtons = document.querySelectorAll('[data-show-modal]');
    openModalButtons.forEach( btn => {
        btn.addEventListener('click', e => {
            const modalId = btn.dataset.showModal;
            const curModal = document.querySelector('#' + modalId);
            curModal.classList.add('modal--show');
            overlay.classList.add('modal__overlay--show');
        });
    });
}

/**
 * Tabs
 */

export function tabs() {
    const exists = document.querySelector('.tabs');
    if ( !exists ) {return;}

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

/**
 * Panels
 */

export function panels() {
    const exists = document.querySelector('.panel');
    if ( !exists ) {return;}

    const panels = document.querySelectorAll('.panel');

    panels.forEach( panel => {
        const panelHeader = panel.querySelector('.panel__header');
        const panelBody   = panel.querySelector('.panel__body');

        // Create Toggle
        let panelToggle = document.createElement('button');

        panelToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="m283 711-43-43 240-240 240 239-43 43-197-197-197 198Z"/></svg>';

        panelToggle.classList.add('panel__toggle');
        panelToggle.type = "button";
        panelHeader.appendChild(panelToggle);

        panelHeader.addEventListener('click', () => {
            panel.classList.toggle('panel--open');
        });

    });
}