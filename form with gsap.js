// Cursor elements
const cursor = document.querySelector(".cursor");
const blurCursor = document.querySelector(".cursor-blur");

// Animate both cursors on mouse move
document.addEventListener("mousemove", e => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power1.out"
    });

    gsap.to(blurCursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
    });
});

// Scroll animation for form
gsap.registerPlugin(ScrollTrigger);
gsap.from("#formBox", {
    scrollTrigger: {
        trigger: "#formBox",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    scale: 0.9,
    duration: 1.2,
    ease: "power3.out"
});