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

    const isLargeScreen = window.innerWidth > 1200;

    // Get all elements with the class '[data-animation]'
    const animateElements = document.querySelectorAll('[data-animation]');

    // Intersection Observer callback function
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.dataset.animation);
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an Intersection Observer only for larger screens
    if (isLargeScreen) {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Adjust the threshold as needed
        });

        // Observe each element with the attribute 'data-animation'
        animateElements.forEach((el) => {
            observer.observe(el);
        });
    } else {
        animateElements.forEach((el) => {
            el.removeAttribute("data-animation");
        });
    }
}

/**
 * Changing a navigation's style on scroll
 * https://github.com/kevin-powell/navbar-change-on-scroll
 */

export function navChange() {
    const nav = document.querySelector(".navbar");
    const sectionHero = document.querySelector(".js-glass");
    if ( !sectionHero ) {return;}

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            nav.classList.toggle('nav-glass', entry.isIntersecting);
        });
    },
    {
        threshold: 0.8,
    });
    observer.observe(sectionHero);
}
