var tl = gsap.timeline();

tl.to('#title-text span', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    stagger: 0.1
}, "same");


tl.from('#heading #paragraph span', {
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 0.9,
    ease: "power2.out",
    delay: 1
}, "same")


tl.from('#back', {
    y: 100,
    opacity: 0,
    duration: 1.2,
}, "same");

tl.from('#boxes', {
    opacity: 0,
    delay: 0.3,
    duration: 1.2,
    ease: "expo.out"
});




const box1 = document.getElementById("box1");

document.getElementById("boxes").addEventListener("mouseenter", () => {
    gsap.to(".tri", {
        visibility: "visible",
    });
    gsap.to("#box1", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        visibility: "visible"
    });
    gsap.to("#box3", {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        visibility: "visible"
    });
    gsap.to("#text-box-1", {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        visibility: "visible"
    });
    gsap.to("#text-box-2", {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        visibility: "visible"
    });
    gsap.to("#text-box-3", {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        visibility: "visible"
    });
    gsap.to("#text-box-4", {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        visibility: "visible"
    });
    gsap.to("#box8", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        visibility: "visible",
        zIndex: 1
    });
    gsap.to("#box10", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        visibility: "visible",
        zIndex: 1
    });

});

document.getElementById("boxes").addEventListener("mouseleave", () => {
    gsap.to(".tri", {
        visibility: "hidden"
    });
    gsap.to("#box1", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in"
    });
    gsap.to("#box3", {
        x: -15,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in"
    });
    gsap.to("#text-box-1", {
        x: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in"
    });
    gsap.to("#text-box-2", {
        x: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in"
    });
    gsap.to("#text-box-3", {
        x: -15,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in"
    });
    gsap.to("#text-box-4", {
        x: -15,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in"
    });
    gsap.to("#box8", {
        y: -40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in"
    });
    gsap.to("#box10", {
        y: -40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in"
    });
});