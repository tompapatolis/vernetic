/******************************************************************************
 * SCROLL-TRIGGERED ANIMATION OBSERVER
 *
 * Purpose:
 * - Observes elements with [data-animation] and triggers their animation
 *   when they enter the viewport (25% visible).
 *
 * Behavior:
 * - Only activates on non-touch desktop devices (screen > 1024px)
 * - Removes the [data-animation] attribute on mobile/tablet devices
 * - Uses IntersectionObserver for performance and flexibility
 *
 * Notes:
 * - Exits early if no elements with [data-animation] are found
 * - Animation class is added only once, then element is unobserved
 *****************************************************************************/

export function newObserveElements() {
    const animateElements = document.querySelectorAll('[data-animation]');

    // Exit early if there are no animated elements on the page
    if (!animateElements.length) return;

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

/******************************************************************************
 * HERO SECTION PARALLAX EFFECT
 *
 * Purpose:
 * - Creates a parallax scrolling effect on the hero section’s background
 *   by adjusting its background position relative to scroll.
 *
 * Behavior:
 * - Activates only on screens wider than 1200px
 * - Uses requestAnimationFrame to throttle scroll updates for performance
 * - Multiplies scroll offset by 0.5 to simulate depth
 *
 * Notes:
 * - Exits early if the hero section is not found in the DOM
 * - Uses a `ticking` flag to avoid redundant calls per animation frame
 *****************************************************************************/

export function parallax() {
    const heroSection = document.querySelector('.page__hero'); // Target the element
    if (!heroSection) return; // Check if the element exists before proceeding

    const mediaQuery = window.matchMedia('(min-width: 1200px)');
    if (!mediaQuery.matches) return; // Only run the effect if the screen width is larger than 768px

    let ticking = false; // Flag to prevent multiple updates per frame

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

