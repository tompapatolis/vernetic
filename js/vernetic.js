/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ♛ Your daily dosage of awesomeness
 * ◌⎯⎯⎯⎯⎯⎯◖ ROOT ◗⎯⎯⎯⎯⎯⎯◌
 */

/**
 * Imports
 */

import * as navigation from './_navigation.js';
import * as utils from './_utils.js';
import * as content from './_content.js';
import * as animations from './_animations.js';
import * as component from './_components.js';

/**
 * Navigation
 */

navigation.initNavbar();
navigation.activeNav();
navigation.dropdownToggle();

/**
 * Utilities
*/

utils.copyThis();
utils.default();
utils.showIconsList();
utils.convToSymbol();
utils.escapeHtml();
utils.syntaxHighlight();
utils.copyCode();
utils.copyTableCell();

/**
 * Content
 */

content.loadMorePosts();

/**
 * Animations
*/

animations.observeElements();
animations.typewriter();
animations.sequentialFadeIn();
animations.navChange();

/**
 * Components
*/

component.draggableElements();
component.incPanels();
component.accordion();
component.initModal();
component.tabs();
component.panels();