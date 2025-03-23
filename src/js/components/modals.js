/******************************************************************************
 * MODAL INITIALIZATION
 *
 * Purpose:
 * - Enables opening and closing of modals via `[data-show-modal]` triggers
 *   and `.modal__close` buttons.
 *
 * Behavior:
 * - Shows the modal and overlay when a trigger is clicked
 * - Hides the modal and overlay when the close button is clicked
 * - Dynamically creates `.modal__overlay` if not present in the DOM
 *
 * Notes:
 * - Exits early if no `.modal` elements are found
 * - Each modal should have a unique `id` to match the `data-show-modal` value
 * - Close button inside modal must have the `.modal__close` class
 *****************************************************************************/

export function initModal() {
    if (!document.querySelector('.modal')) return; // Exit early if modal does not exist

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