/******************************************************************************
 *                                                                            *
 *                              V E R N E T I C                               *
 *                                                                            *
 *                      Lightweight. Smart. Blazing Fast.                     *
 *                                                                            *
 *----------------------------------------------------------------------------*
 * Author       : Tom Papatolis                                               *
 * Website      : https://tpapatolis.com                                      *
 * GitHub       : https://github.com/tompapatolis/vernetic                    *
 * Version      : 7.0.0                                                         *
 *----------------------------------------------------------------------------*
 *                                                                            *
 *      ██    ██ ███████ ██████  ███    ██ ███████ ████████ ██  ██████        *
 *      ██    ██ ██      ██   ██ ████   ██ ██         ██    ██ ██             *
 *      ██    ██ █████   ██████  ██ ██  ██ █████      ██    ██ ██             *
 *       ██  ██  ██      ██   ██ ██  ██ ██ ██         ██    ██ ██             *
 *        ████   ███████ ██   ██ ██   ████ ███████    ██    ██  ██████        *
 *                                                                            *
 ******************************************************************************/

 /**
 * MAIN INITIALIZATION SCRIPT
 *
 * Loads and initializes all core Vernetic UI components on page load.
 * Designed for modularity, performance, and clean separation of concerns.
 *
 * Each component is responsible for guarding its own execution context
 * (e.g. checking if related elements exist before attaching events).
 *
 * Add or remove modules below as needed.
 */

/******************************************************************************
 * COMPONENTS
 *****************************************************************************/

import * as navigation from './components/navigation.js';
navigation.initNavbar();
navigation.activeNav();
navigation.dropdownToggle();
navigation.navChange();
navigation.pagination();

import * as treemenu from './components/treemenu.js'
treemenu.initializeTreeMenu();

import * as draggable from './components/draggable.js';
draggable.draggable();

import * as dropImage from './components/dropImage.js';
dropImage.dropImage();

import * as modals from './components/modals.js';
modals.initModal();

import * as tabs from './components/tabs.js';
tabs.tabs();
tabs.tabsVertical();

/******************************************************************************
 * UTILITIES
 *****************************************************************************/

import * as utils from './utils/utils.js';
utils.deleteButtonInForm();
utils.validatePassword();
utils.jumpNext();
utils.copyShareUrl();

/******************************************************************************
 * SYSTEM
 *****************************************************************************/

import * as icons from './system/icons.js';
icons.injectVerneticIcons();

import * as animations from './system/animations.js';
animations.newObserveElements();
animations.parallax();
