/******************************************************************************
 * DRAGGABLE SORTABLE LIST
 *
 * Purpose:
 * - Enables drag-and-drop reordering of list items inside a `.draglist` container.
 *
 * Behavior:
 * - Adds `draglist__dragging` class when a list item is being dragged
 * - Calculates the closest drop position based on cursor Y position
 * - Reorders items in the DOM as the user drags
 *
 * Notes:
 * - Exits early if `.draglist` is not found in the DOM
 * - Requires `draggable="true"` to be set on `.draglist__item` elements
 * - Uses a helper function `findClosest()` to determine drop position
 *****************************************************************************/

export function draggable() {
    if (!document.querySelector('.draglist')) return; // Exit early if draglist does not exist

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