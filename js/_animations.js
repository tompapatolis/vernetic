/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ◌⎯⎯⎯⎯⎯⎯◖ Animations ◗⎯⎯⎯⎯⎯⎯◌
 */

/**
 * Intersection Observer for Elements
 *      Adds .show to element
 */

export function observeElements() {
    if ( window.innerWidth < 1200 ) {return;}
    const exists = document.querySelector('.observe');
    if ( !exists ) {return;}

    const observeElements = document.querySelectorAll(".observe");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                let animation = entry.target.dataset.animation;
                entry.target.classList.toggle(animation, entry.isIntersecting);
                if (entry.isIntersecting) {observer.unobserve(entry.target);}
            })
        },
        {
            threshold: 0.5,
        }
    )

    observeElements.forEach(el => {
        observer.observe(el);
    })
}

/**
 * Typewriter Effect
 */

export function typewriter() {
    // https://openjavascript.info/2022/09/05/typewriter-typing-effect-with-javascript/

    if ( window.innerWidth < 1200 ) {return;}
    const typewriter = document.querySelector('.typewriter');
    if ( !typewriter ) {return;}

    const height = typewriter.offsetHeight;
    typewriter.setAttribute("style","min-height:" + height + "px");

    let txt = typewriter.innerHTML;
    txt = txt.replace(/(<([^>]+)>)/gi, "");
    typewriter.innerHTML = '';

    let i = 0;
    const timerId = setInterval(() => {
        typewriter.innerHTML += txt.charAt(i);
        i++;
        if (i === txt.length) {
            clearInterval(timerId);
        }
    },50);
}

export async function typewriterParagraphs() {
    const exists = document.querySelector('[data-typewriter="paragraphs"]');
    if ( !exists ) {return;}

    const typewriter = document.querySelector('[data-typewriter="paragraphs"]');
    const paragraphs = typewriter.querySelectorAll('p');

    paragraphs.forEach( p => {
        const height = p.offsetHeight;
        p.setAttribute("style","height:" + height + "px");
        let txt = p.innerHTML;
        txt = txt.replace(/(<([^>]+)>)/gi, "");
        p.dataset.content = txt;
        p.innerHTML = '';
    });

    for (let i = 0; i < paragraphs.length; i++) {
        const txt = paragraphs[i].dataset.content;
        await typeDown(paragraphs[i], txt);
    }
}

function typeDown(el, txt) {
    return new Promise((resolve) => {

        let i = 0;
        const timerId = setInterval(() => {
            el.innerHTML += txt.charAt(i);
            i++;
            if (i === txt.length) {
                clearInterval(timerId);
                resolve();
            }
        }, 40);

    });
}

/**
 * Changing a navigation's style on scroll
 * https://github.com/kevin-powell/navbar-change-on-scroll
 */

export function navChange() {
    const nav = document.querySelector(".navbar");
    const sectionHero = document.querySelector(".section-hero");
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

/**
 * Sequential Fade-in
 */

export function sequentialFadeIn() {
    const exists = document.querySelector('[data-animation="sequential-fade-in"]');
    if ( !exists ) {return;}

    const aniContainers = document.querySelectorAll('[data-animation="sequential-fade-in"]');

    let observer = new MutationObserver(containers => {
        containers.forEach( container => {
            const elements = container.target.querySelectorAll('.btn');

            elements.forEach( (el, index) => {
                setTimeout( () => {
                    el.style.opacity = 1;
                }, 150 * index);
            });

        });
        observer.disconnect(); // Needs testing
    })

    aniContainers.forEach( container => {
        observer.observe(container, {attributes: true,attributeFilter: ['class']});
    });
}