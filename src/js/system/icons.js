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
    const isLocalDev = location.hostname === '[::1]' && location.pathname.startsWith('/verdincms/public');
    const spriteURL = isLocalDev
        ? '/verdincms/public/vernetic/dist/icons/vernetic.svg'
        : 'https://cdn.jsdelivr.net/gh/tompapatolis/vernetic@v7.0.7/dist/icons/vernetic.svg';

    fetch(spriteURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(spriteText => {
            document.body.insertAdjacentHTML('afterbegin', spriteText);
        })
        .catch(error => {
            console.error('Error fetching Vernetic SVG:', error);
        });
}
