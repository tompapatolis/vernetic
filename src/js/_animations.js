/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ◌⎯⎯⎯⎯⎯⎯◖ Animations ◗⎯⎯⎯⎯⎯⎯◌
 */

/**
 * Intersection Observer for Elements
 */

export function newObserveElements() {
    const animateElements = document.querySelectorAll('[data-animation]');

    // Function to check if the device is a tablet or smartphone
    const isMobileOrTablet =
        window.innerWidth <= 1024 || // Matches common tablet breakpoint
        'ontouchstart' in window  || // Basic touch capability check
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0); // Modern touch detection

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.dataset.animation);
                observer.unobserve(entry.target);
            }
        });
    };

    // Only enable scroll-triggered animations on desktop
    if (!isMobileOrTablet) {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.25,
        });

        animateElements.forEach((el) => observer.observe(el));
    } else {
        animateElements.forEach((el) => el.removeAttribute("data-animation"));
    }
}

/**
 * Parallax
 */

export function parallax() {
    const heroSection = document.querySelector('.page__hero'); // Target the element
    let ticking = false; // Flag to prevent multiple updates per frame

    const mediaQuery = window.matchMedia('(min-width: 1200px)');
    if (!mediaQuery.matches) return; // Only run the effect if the screen width is larger than 768px

    if (!heroSection) return; // Check if the element exists before proceeding

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrollPosition = window.scrollY; // Get the current scroll position
                const offset = scrollPosition * 0.5; // Adjust parallax speed as needed

                heroSection.style.backgroundPosition = `center ${offset}px`; // Update background position for parallax
                ticking = false; // Reset ticking flag
            });
            ticking = true; // Set ticking to true to prevent redundant calls
        }
    });
}

