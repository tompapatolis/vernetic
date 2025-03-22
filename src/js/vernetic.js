/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2024
 * Author  : Tom Papatolis
 * ♛ Your daily dosage of awesomeness
 * ◌⎯⎯⎯⎯⎯⎯◖ ROOT ◗⎯⎯⎯⎯⎯⎯◌
 */

import * as navigation from './_navigation.js';
import * as utils from './_utils.js';
import * as component from './_components.js';
// import * as content from './_content.js';
import * as animations from './_animations.js';

/**
 * Loader
 */

(function verneticLoader() {
    // Get the id attribute of the body tag
    const bodyId = document.body.id;

    // Use a switch statement based on the body id
    switch (bodyId) {
        case 'members-register':
            utils.validatePassword();
            break;
        case 'members-activate':
            utils.jumpNext();
            break;
        case 'admin-edit':
            component.dropImage();
            break;
        case 'admin-page_order':
        case 'admin-sort_settings':
        case 'admin-sort_sections':
            component.draggable();
            break;
        case 'site-page':
            animations.parallax();
            break;
        case 'site-post':
            utils.copyShareUrl();
            break;
        default:
            // Code to execute when body id does not match any case
    }

    // Load for all pages
    navigation.initNavbar();
    navigation.activeNav();
    navigation.dropdownToggle();
    navigation.navChange();
    navigation.pagination();
    utils.deleteButtonInForm();
    component.initModal();
    component.tabs();
    component.tabsVertical();

})();

/**
 * Disabled
 */

// utils.copyThis();
// utils.sharePopupCentered();
// utils.showIconsList();
// utils.convToSymbol();
// utils.escapeHtml();
// utils.syntaxHighlight();
// utils.copyCode();
// utils.copyTableCell();
// animations.newObserveElements();
// component.incPanels();
// component.accordion();
// component.panels();
