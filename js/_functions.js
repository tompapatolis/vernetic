/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ◌⎯⎯⎯⎯⎯⎯◖ Functions ◗⎯⎯⎯⎯⎯⎯◌
 */

export function baseUrl() {
    let path = '';
    if ( window.location.origin == 'http://[::1]' ) {
        let folders = window.location.pathname.split('/').slice(0, 3);
        path = window.location.origin + folders.join('/') + '/';
    } else {
        path = window.location.origin + '/';
    }
    return path;
}