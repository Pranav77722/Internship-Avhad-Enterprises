gsap.to("#page2 h1",{
    transform : "translateX(-150%)",
    scrollTrigger: {
        trigger : "#page2",
        scroller : "body",
        markers : true,
        start : "top 0%",
        scrub : 3,
        end : "bottom -150%",
        pin : true
    }
})