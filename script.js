// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Animate hero content
gsap.from('.hero-content', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power3.out'
});

// Animate sections on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',

::contentReference[oaicite:0]{index=0}
 
