/**
 * Initializes a single tree menu with toggle functionality and state persistence.
 *
 * Purpose:
 * - Adds click event listeners to folder items in the tree menu.
 * - Toggles the expanded state of folders and saves the state to localStorage.
 * - Ensures that only one tree menu is initialized at a time.
 *
 * Assumptions:
 * - The tree menu has a class of `.tree-menu` or a custom selector provided.
 * - Folders are identified with `data-type="folder"`, and files with `data-type="file"`.
 * - State persistence is managed via the `data-path` attribute for folders.
 *
 * @param {string} treeMenuSelector - CSS selector for the tree menu (default: '.tree-menu').
 */
export function initializeTreeMenu(treeMenuSelector = '.tree-menu') {
    // Select the tree menu
    const treeMenu = document.querySelector(treeMenuSelector);

    // If no tree menu is found, exit
    if (!treeMenu) {
        return;
    }

    // Restore tree menu state
    restoreTreeMenuState();

    // Get all list items in the tree menu
    const listItems = treeMenu.querySelectorAll('li');

    listItems.forEach(item => {
        const isFileLink = item.dataset.type === 'file'; // Check if the item is a file (via data-type attribute)

        // Prevent link clicks from toggling the folder
        const links = item.querySelectorAll('a'); // Get all <a> elements within the <li>
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the <li>'s click event
            });
        });

        // Only attach the toggle to the folder's <span>, not the entire <li>
        if (!isFileLink) {
            const folderLabel = item.querySelector('span');
            if (folderLabel) {
                folderLabel.addEventListener('click', e => {
                    e.stopPropagation();
                    item.classList.toggle('expanded');
                    saveTreeMenuState(treeMenuSelector);
                });
            }
        }

    });
}

function saveTreeMenuState(treeMenuSelector = '.tree-menu') {
    const treeMenu = document.querySelector(treeMenuSelector);

    if (!treeMenu) return;

    const expandedItems = [];
    treeMenu.querySelectorAll('li[data-type="folder"].expanded').forEach(folder => {
            const id = folder.dataset.id;
            if (id) {
                expandedItems.push(id);
            }
    });

    // Save the expanded folder paths to localStorage
    localStorage.setItem('treeMenuState', JSON.stringify(expandedItems));
}

function restoreTreeMenuState(treeMenuSelector = '.tree-menu') {
    const treeMenu = document.querySelector(treeMenuSelector);

    if (!treeMenu) return;

    // Get the saved expanded paths from localStorage
    const expandedItems = JSON.parse(localStorage.getItem('treeMenuState')) || [];

    // Iterate over all folders and restore their expanded state
    treeMenu.querySelectorAll('li[data-type="folder"]').forEach(folder => {
        const id = folder.dataset.id;
        if (id && expandedItems.includes(id)) {
            folder.classList.add('expanded'); // Add the expanded class
        }
    });
}