/******************************************************************************
 * VERNETIC ICON INJECTION
 *
 * Injects:
 * - The entire Vernetic SVG icon sprite into the DOM on page load
 * - Enables usage of <svg><use xlink:href="#icon-name"></use></svg> across app
 *
 * Source:
 * - Fetched from: jsDelivr CDN (vernetic@v7.0.2)
 *   URL: https://cdn.jsdelivr.net/gh/tompapatolis/vernetic@v7.0.4/dist/icons/vernetic.svg
 *
 * Notes:
 * - Fetch uses CORS mode
 * - SVG is injected at the beginning of <body>
 * - Logs an error in the console if fetching fails
 *****************************************************************************/

export function injectVerneticIcons() {
    fetch('https://cdn.jsdelivr.net/gh/tompapatolis/vernetic@v7.0.6/dist/icons/vernetic.svg', { mode: 'cors' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(spriteText => {
            // Insert the <svg>...</svg> content into the DOM
            document.body.insertAdjacentHTML('afterbegin', spriteText);
        })
        .catch(error => {
            console.error('Error fetching Vernetic SVG:', error);
        });
}