/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ◌⎯⎯⎯⎯⎯⎯◖ Utilities ◗⎯⎯⎯⎯⎯⎯◌
 */

import {baseUrl} from './_functions.js';

/**
 * Share Pop-up Window Centered
 */

export function sharePopupCentered() {

    const shareItem = document.querySelectorAll('.popup-centered');

    shareItem.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            PopupCenter(item.href,'Share','700','600');
        })
    });

}

function PopupCenter(url, title, w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    if (window.focus) {newWindow.focus();}
}

/**
 * Copy text to Clipboard
 */

// export function copyThis() {
//     const copyButtons = document.querySelectorAll('.copy-this');
//     copyButtons.forEach( item => {
//         item.addEventListener('click', e => {
//             const copyText = item.parentElement.querySelector('[data-copy-url]').value;
//             copyClipboard(copyText);
//             item.classList.add('btn-blue-200');
//             item.classList.add('disabled');
//             item.blur();

//             // How to replace zmdi crap
//             const use = item.querySelector('use');
//             const url = use.getAttribute('href').split('#')[0];
//             use.setAttribute('href', url + '#done');
//         });
//     });
// }

// function copyClipboard(str) {
//     navigator.clipboard.writeText(str).then( () => {
//         // console.log('clipboard successfully set');
//       /* clipboard successfully set */
//     }, () => {
//         // console.log('clipboard write failed');
//       /* clipboard write failed */
//     });
// }

/**
 * Show sprites in SVG for VerdinCSS Framework
 */

export function showIconsList() {
    const exists = document.querySelector('.elements-icons-list');
    if ( !exists ) {return;}

    const sprite    = document.querySelector("#verdin-icons");
    const symbols   = sprite.querySelectorAll("symbol");
    const iconsList = document.querySelector('.elements-icons-list');

    const symbolsArr = [...symbols];

    symbolsArr.sort(function(a, b) {
        return a.id - b.id  ||  a.id.localeCompare(b.id);
    });

    symbolsArr.forEach( symbol => {
        let el = document.createElement('div');
        el.innerHTML  = `<svg class="svg-icon"><use href="#${symbol.id}"></use></svg>`;
        el.innerHTML += `<span>${symbol.id}</span>`;
        el.classList.add('elements-icon');
        iconsList.appendChild(el);

        el.addEventListener('click', e => {
            const copyText = symbol.id;
            copyClipboard(copyText);

            document.querySelectorAll('.elements-icon').forEach( item => {item.classList.remove('elements-icon--copied')});
            el.classList.add('elements-icon--copied');
        });
    });

    // Search
    const search = document.querySelector('input[name="framework-search"]');

    search.addEventListener('input', e => {
        searchIconsList(search.value);
    });
}

function searchIconsList(term) {
    const icons = document.querySelectorAll('.elements-icon');

    icons.forEach( icon => {
        const span = icon.querySelector('span');
        if ( span.innerText.includes(term) ) {
            icon.classList.remove('hidden');
        } else {
            icon.classList.add('hidden');
        }

    });
}

/**
 * Convert Google Material Icon to Symbol
 */

export function convToSymbol() {
    const exists = document.querySelector('.elements-converter[data-type="svg"]');
    if ( !exists ) {return;}

    const textSource = document.querySelector('textarea[name="elements-svg-source"]');
    const textDest   = document.querySelector('textarea[name="elements-svg-dest"]');

    textSource.addEventListener('paste', e => {
    	setTimeout( () => {

            let text = textSource.value.trim();
            text = text.replace('<svg', '<symbol');
            text = text.replace('</svg>', '\r\n</symbol>');
            text = text.replace('xmlns="http://www.w3.org/2000/svg"', 'id="icon"');
            text = text.replace('height="24" ', '');
            text = text.replace(' width="24"', '');
            text = text.replace('<path', '\r\n\    <path');
            textDest.value = text;
            copyClipboard(text);
        });


    });

}

/**
 * Escape HTML Code
 */

export function escapeHtml() {
    const exists = document.querySelector('.elements-converter[data-type="html"]');
    if ( !exists ) {return;}

    const textSource = document.querySelector('textarea[name="elements-html-source"]');
    const textDest   = document.querySelector('textarea[name="elements-html-dest"]');

    textSource.addEventListener('paste', e => {
    	setTimeout( () => {
            let text = textSource.value.trim();
            text = escHtml(text);
            textDest.value = text;
            copyClipboard(text);
        });
    });

}

function escHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

/**
 * Verdin Syntax Highlighter
 */

export function syntaxHighlight() {
    // https://www.regextester.com/

    const exists = document.querySelector('.syntax-highlight');
    if ( !exists ) {return;}

    const codeTags = document.querySelectorAll('.syntax-highlight');

    codeTags.forEach( codeTag => {
        const code = codeTag.innerHTML;

        // Attributes
        const regexAttributes = /(\s[\w-]+)=("|')([^"']*)("|')/g;
        let result = code.replace(regexAttributes, '<span class="cl2">$1</span>=$2<span class="cl3">$3</span>$4');

        // Tags
        const regexTag =/&lt;(\/?)(\w+\s?)/g;
        result = result.replace(regexTag, '&lt;$1<span class="cl1">$2</span>');

        // Comments
        const regexComments =/(&lt;!--.*?--&gt;)/g;
        result = result.replace(regexComments, '<span class="cl0">$1</span>');
        codeTag.innerHTML = result;
    });
}

/**
 * Copy Code
 */

export function copyCode() {
    const exists = document.querySelector('.code');
    if ( !exists ) {return;}

    const codeWrappers = document.querySelectorAll('.code');

    codeWrappers.forEach( codeWrapper => {
        const actualCode  = codeWrapper.querySelector('code');

        let copyButton = document.createElement('button');
        let icon = baseUrl() + 'assets/verdin-icons/verdin-icons.svg#copy';
        copyButton.innerHTML = '<svg class="svg-icon"><use href="'+ icon +'"></use></svg>';
        copyButton.classList.add('btn','btn-900','code-copy');

        copyButton.addEventListener('click', e => {
            copyClipboard(actualCode.innerText);

            icon = baseUrl() + 'assets/verdin-icons/verdin-icons.svg#done';
            copyButton.innerHTML = '<svg class="svg-icon"><use href="'+ icon +'"></use></svg>';
            copyButton.classList.add('btn-green-300');
            copyButton.blur();
        });
        codeWrapper.appendChild(copyButton);
    });
}

/**
 * Copy Table Cell
 */

export function copyTableCell() {
    if ( window.innerWidth < 1200 ) {return;}
    const exists = document.querySelector('.table');
    if ( !exists ) {return;}

    const table = document.querySelector('.table');
    table.addEventListener('click', e => {
        const el = e.target;
        if (el.tagName === 'TD') {
            table.querySelectorAll('td').forEach( td => {td.classList.remove('set-green-300')});
            copyClipboard(el.innerText);
            el.classList.add('set-green-300');
        }
    });
}

/**
 * Delete Button (in Form) *** All-Purpose Function
 */

export function deleteButtonInForm() {
    const button = document.querySelector('[data-delete-setter]');
    if ( !button ) {return;}

    const inputDelete = document.querySelector('input[name="delete"]');
    const form = inputDelete.closest('form');

    button.addEventListener('click', e => {
        inputDelete.value = 1;
        form.submit();
    });
}

/**
 * Validate Password
 */

export function validatePassword() {
    const passwordInput = document.querySelector('[data-validate-password]');
    if ( !passwordInput ) {return;}

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\-+_:\;\(\)§])[A-Za-z\d@$!%*?&#\-+_:\;\(\)§]{8,}$/;

        if (passwordPattern.test(password)) {
            passwordInput.classList.remove('invalid-password');
            passwordInput.classList.add('valid-password');
        } else {
            passwordInput.classList.remove('valid-password');
            passwordInput.classList.add('invalid-password');
        }
    });

}

/**
 * Jump to next input
 */

export function jumpNext() {
    const inputs = document.querySelectorAll('[data-jump-next] input');

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length >= input.maxLength) {
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    document.querySelector('button').focus();
                }
            }
        });
    });
}

/**
 * Copy Share URL
 */

export function copyShareUrl() {

    const copyButton = document.querySelector('[data-share-button]');
    const shareInput = document.querySelector('[data-share-url]');

    if (copyButton && shareInput) {
        copyButton.addEventListener('click', function () {
            // Get the URL from the data-share-url attribute
            const shareUrl = shareInput.dataset.shareUrl;

            // Copy the URL to the clipboard
            navigator.clipboard.writeText(shareUrl)
                .then(() => {
                    // Change button text to "Copied!"
                    copyButton.querySelector('span').textContent = 'Copied!';

                    // Add the disabled class
                    copyButton.classList.add('disabled');

                    // Disable the button entirely
                    copyButton.disabled = true;
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    }

}
