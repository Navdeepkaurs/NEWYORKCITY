var tl = gsap.timeline();

tl.from("#line", {
    height: "0",
    duration: 2,
    ease: "sine.inOut"
}, "a");


tl.from("#header h1", {
    y: 200,
    opacity: 0,
    scaleY: 0.8,
    duration: 1.2,
    ease: "power3.out"
}, "a");

tl.from("#p-2 h1 span:nth-child(1)", {
    y: 20,
    // scaleY: 0.8,
    duration: 1.2,
    ease: "power3.out"
}, "a");

tl.from("#p-2 h1 span:nth-child(2)", {
    y: -10,
    // scaleY: 0.8,
    duration: 1.2,
    ease: "power3.out"
}, "a");

tl.from("#p-2 h1 span:nth-child(3)", {
    y: 12,
    // scaleY: 0.8,
    duration: 1.2,
    ease: "power3.out"
}, "a");

tl.from("#p-2 h1 span:nth-child(4)", {
    y: -18,
    // scaleY: 0.8,
    duration: 1.2,
    ease: "power3.out"
}, "a");


tl.to(".highlight-text", {
    backgroundSize: "100% 100%",
    duration: 1.5,
    ease: "power2.out",
    fontWeight: "500",
}, "a");