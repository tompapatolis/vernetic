/**
 * initTypewriter
 * ---------------
 * Applies a typewriter-style animation to all elements with the [data-typewriter] attribute.
 * The text is revealed character by character using requestAnimationFrame for smooth, frame-synced animation.
 *
 * The animation starts only when the element becomes visible in the viewport.
 *
 * Features:
 * - Optional typing speed via [data-delay] (in milliseconds per character, default: 80)
 * - Starts once per element when it enters view
 *
 * @param {string} selector - CSS selector to target typewriter elements (default: '[data-typewriter]')
 */

export function initTypewriter(selector = '[data-typewriter]') {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const fullText = el.getAttribute('data-typewriter');
            const delay = parseInt(el.getAttribute('data-delay'), 10) || 80;

            let currentText = '';
            let index = 0;
            let lastFrameTime = performance.now();

            function type(timestamp) {
                const elapsed = timestamp - lastFrameTime;
                if (elapsed >= delay) {
                    currentText += fullText.charAt(index++);
                    el.textContent = currentText;
                    lastFrameTime = timestamp;
                }

                if (index < fullText.length) {
                    requestAnimationFrame(type);
                }
            }

            requestAnimationFrame(type);
            observer.unobserve(el); // Only animate once
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}
