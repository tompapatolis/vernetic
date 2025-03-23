/******************************************************************************
 * DELETE BUTTON INSIDE FORM
 *
 * Purpose:
 * - Triggers form submission with a hidden "delete" flag when a button
 *   containing `[data-delete-setter]` is clicked.
 *
 * Behavior:
 * - Sets `input[name="delete"]` to `1`
 * - Submits the parent form programmatically
 *
 * Notes:
 * - Exits early if the `[data-delete-setter]` button is not found
 * - Assumes an input named "delete" exists within the form
 *****************************************************************************/

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

/******************************************************************************
 * PASSWORD VALIDATION
 *
 * Purpose:
 * - Validates the password field in real time using a regular expression.
 * - Adds/removes CSS classes to indicate valid or invalid state.
 *
 * Behavior:
 * - Requires at least:
 *   • 1 lowercase letter
 *   • 1 uppercase letter
 *   • 1 digit
 *   • 1 special character
 *   • Minimum 8 characters
 *
 * Notes:
 * - Listens to `input` on fields with `[data-validate-password]`
 * - Exits early if no such input field is found
 * - Adds `.valid-password` or `.invalid-password` class accordingly
 *****************************************************************************/

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

/******************************************************************************
 * AUTO-FOCUS NEXT INPUT FIELD
 *
 * Purpose:
 * - Automatically moves focus to the next input field when the current one
 *   reaches its `maxLength`.
 *
 * Behavior:
 * - Targets inputs inside containers with `[data-jump-next]`
 * - On input, checks the length of the current field
 * - If filled, focuses the next input or a `<button>` if it's the last one
 *
 * Notes:
 * - Useful for PIN/OTP input fields
 *****************************************************************************/

export function jumpNext() {
    const inputs = document.querySelectorAll('[data-jump-next] input');
    if (!inputs.length) return; // Exit early if no inputs found

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

/******************************************************************************
 * COPY SHARE URL TO CLIPBOARD
 *
 * Purpose:
 * - Copies a predefined share URL to the clipboard when the user clicks
 *   a share button.
 *
 * Behavior:
 * - Reads the URL from `data-share-url` on the input element
 * - Copies the URL to the clipboard using `navigator.clipboard.writeText()`
 * - Updates the button text to "Copied!", disables the button, and adds a class
 *
 * Notes:
 * - Exits early if either the share button or share input is not found
 * - Logs an error in the console if clipboard copy fails
 *****************************************************************************/

export function copyShareUrl() {
    const copyButton = document.querySelector('[data-share-button]');
    const shareInput = document.querySelector('[data-share-url]');
    if (!copyButton || !shareInput) return; // Exit early if required elements are missing

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
