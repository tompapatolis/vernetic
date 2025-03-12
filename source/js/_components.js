/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ◌⎯⎯⎯⎯⎯⎯◖ Components ◗⎯⎯⎯⎯⎯⎯◌
 */

/**
 * Draggable
 */

export function draggable() {
    const exists = document.querySelector('.draglist');
    if ( !exists ) {return;}

    const dragContainer = document.querySelector('.draglist');
    const draggables    = document.querySelectorAll('.draglist__item');

    draggables.forEach( draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('draglist__dragging');
        })

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('draglist__dragging');
        })
    })

    dragContainer.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = findClosest(e.clientY);
        const draggable = document.querySelector('.draglist__dragging');
        if (afterElement == null) {
            dragContainer.appendChild(draggable);
        } else {
            dragContainer.insertBefore(draggable, afterElement);
        }
    })
}

function findClosest(y) {
    const draggableElements = [...document.querySelectorAll('.draglist__item:not(.draglist__dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

/**
 * Panels with Incremental Tiles
 */

// export function incPanels() {

//     const panels = document.querySelectorAll('.panel-inc');

//     panels.forEach( panel => {
//         const tiles = panel.querySelectorAll('.tile');
//         tiles.forEach( (tile, index) => {
//             let newDiv = document.createElement("div");
//             newDiv.innerText = String(index + 1).padStart(2, '0');
//             newDiv.classList.add('tile-header');
//             tile.appendChild(newDiv);
//         });
//     });

// }


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

// function showModal(modal) {
//     const overlay = document.querySelector('.modal__overlay');
//     modal.classList.add('modal--show');
//     overlay.classList.add('modal__overlay--show');
// }

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
 * Tabs Vertical
 */

export function tabsVertical() {
    const exists = document.querySelector('.tabs-vertical');
    if ( !exists ) {return;}

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

/**
 * Drop Image
 */

export function dropImage() {
    const imageDrops = document.querySelectorAll('.drop-image');

    imageDrops.forEach( imageDrop => {
        const inputFile = imageDrop.querySelector('#input-file');
        const imageView = imageDrop.querySelector('.drop-image__view');

        inputFile.addEventListener('change', e => {
            uploadImage(imageDrop);
        });

        imageDrop.addEventListener('dragover', e => {
            e.preventDefault();
        });

        imageDrop.addEventListener('drop', e => {
            e.preventDefault();
            inputFile.files = e.dataTransfer.files;
            uploadImage(imageDrop);
        });
    });
}

function uploadImage(imageDrop) {
    const inputFile  = imageDrop.querySelector('#input-file');
	const form       = inputFile.form;
	const action     = form.dataset.action;
    const share      = form.dataset.shareInput;
    const imageView  = imageDrop.querySelector('.drop-image__view');

    // Effects
    imageView.innerHTML = '&nbsp;';
    imageDrop.style.border = '3px solid #000';
    imageDrop.classList.add('drop-image--pulsate');

	fetch(action, {method: 'POST', body: new FormData(form), cache: 'no-cache'})
    	.then(res => res.json())
    	.then(response => {
            const imgLink = response.baseurl + "/images/" + response.filename + ".webp";
            imageView.style.backgroundImage = `url(${imgLink})`;
            imageDrop.classList.remove('drop-image--pulsate');
            imageDrop.style.border = 0;
            if ( share ) {
                const shareInput = document.querySelector(`input[name="${share}"]`);
                shareInput.value = response.filename;
            }
    	})
	    .catch(err => {console.log(err);});
}