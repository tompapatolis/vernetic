/**
 * initCountUp
 * ------------
 * Animates number counters with a smooth, frame-synced counting effect using requestAnimationFrame.
 *
 * This function observes all elements with the [data-count-up] attribute and triggers the count-up
 * animation when they become visible in the viewport.
 *
 * Features:
 * - Supports integers and decimals
 * - Optional suffix via [data-count-suffix]
 * - Optional decimal precision via [data-count-decimals]
 * - Triggers once per element for performance
 *
 * @param {string} selector - CSS selector to target count-up elements (default: '[data-count-up]')
 */

export function initCountUp(selector = '[data-count-up]') {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.getAttribute('data-count-up'));
                if (isNaN(target)) return;

                const suffix = el.getAttribute('data-count-suffix') || '';
                const decimals = parseInt(el.getAttribute('data-count-decimals')) || 0;
                const duration = 2500;
                const startTime = performance.now();

                function animate(now) {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = (target * progress).toFixed(decimals);

                    el.textContent = suffix ? `${current} ${suffix}` : current;

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        el.textContent = suffix ? `${target.toFixed(decimals)} ${suffix}` : target.toFixed(decimals);
                    }
                }

                requestAnimationFrame(animate);
                observer.unobserve(el); // run only once
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}
