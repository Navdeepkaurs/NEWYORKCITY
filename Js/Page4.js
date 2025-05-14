
gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();



var tl = gsap.timeline();

tl.from("#left-column h2", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15
});

tl.from(".small-img", {
    height: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1
}, "-=0.7");

tl.from("#main-img", {
    height: 0,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.8");

tl.from(".middle-img", {
    height: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1
}, "-=0.8");

tl.from(".paragraph", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power2.out",
    stagger: 0.1
}, "-=0.6");

tl.from("#right-column", {
    height: 0,
    duration: 1,
    ease: "power4.out"
}, "-=0.8");

tl.from("#big-heading", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.8");





window.addEventListener("wheel", function (ele) {
    const marquees = document.querySelectorAll("[id='marque']");
    const images = document.querySelectorAll("[id='marque'] img");

    if (ele.deltaY > 0) {
        marquees.forEach(marque => {
            gsap.to(marque, {
                x: "-200%",
                duration: 4,
                repeat: -1,
                ease: "none"
            });
        });

        images.forEach(img => {
            gsap.to(img, {
                rotate: 0
            });
        });

    } else {
        marquees.forEach(marque => {
            gsap.to(marque, {
                x: "0%",
                duration: 4,
                repeat: -1,
                ease: "none"
            });
        });

        images.forEach(img => {
            gsap.to(img, {
                rotate: 180
            });
        });
    }
});




const page2Tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top center",
        toggleActions: "play none none none"
    }
});

page2Tl.from("#line-cont", {
    delay: 0,
    width: "0",
    duration: 2
})
    .from("#page2-1 h4", {
        opacity: 0,
        y: 100,
        stagger: 0.3
    })
    .to("#title-text1 span", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
    })
    .from("#box-cont div", {
        height: "0",
        stagger: 0.15
    })
    .from("#box-cont p", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s")
    .from("#box-cont h1", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s")
    .from("#box-cont h4", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s");



const page3Tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top center",
        toggleActions: "play none none none"
    }
});

page3Tl.from("#line-cont2", {
    delay: 0,
    width: "0",
    duration: 2
})
    .from("#page3-1 h4", {
        opacity: 0,
        y: 100,
        stagger: 0.3
    })
    .to("#title-text2 span", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
    })
    .from("#box-cont2 div", {
        height: "0",
        stagger: 0.15
    })
    .from("#box-cont2 p", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s")
    .from("#box-cont2 h1", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s")
    .from("#box-cont2 h4", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s");



const page4Tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top center",
        toggleActions: "play none none none"
    }
});

page4Tl.from("#line-cont3", {
    delay: 0,
    width: "0",
    duration: 2
})
    .from("#page4-1 h4", {
        opacity: 0,
        y: 100,
        stagger: 0.3
    })
    .to("#title-text3 span", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
    })
    .from("#box-cont3 div", {
        height: "0",
        stagger: 0.15
    })
    .from("#box-cont3 p", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s")
    .from("#box-cont3 h1", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s")
    .from("#box-cont3 h4", {
        y: 200,
        opacity: 0,
        stagger: 0.15
    }, "s");






// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
// });



// // marque effect 
// window.addEventListener("wheel", function (ele) {
//     const marquees = document.querySelectorAll("[id='marque']");
//     const images = document.querySelectorAll("[id='marque'] img");

//     if (ele.deltaY > 0) {
//         // Scroll down
//         marquees.forEach(marque => {
//             gsap.to(marque, {
//                 x: "-200%",
//                 duration: 4,
//                 repeat: -1,
//                 ease: "none"
//             });
//         });

//         images.forEach(img => {
//             gsap.to(img, {
//                 rotate: 0
//             });
//         });

//     } else {
//         // Scroll up
//         marquees.forEach(marque => {
//             gsap.to(marque, {
//                 x: "0%",
//                 duration: 4,
//                 repeat: -1,
//                 ease: "none"
//             });
//         });

//         images.forEach(img => {
//             gsap.to(img, {
//                 rotate: 180
//             });
//         });
//     }
// });





// gsap.registerPlugin(ScrollTrigger);

// const page2Tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "#main",
//         start: "top center",
//         toggleActions: "play none none none"
//     }
// });

// page2Tl.from("#line-cont", {
//     delay: 1,
//     width: "0",
//     duration: 2
// })
//     .from("#page2-2 h1", {
//         opacity: 0,
//         y: 100
//     })
//     .from("#box-cont div", {
//         height: "0",
//         stagger: 0.2
//     })
//     .from("#box-cont p", {
//         opacity: 0,
//         stagger: 0.2
//     });

// const page3Tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page3",
//         scroller: "#main",
//         start: "top center",
//         toggleActions: "play none none none"
//     }
// });

// page3Tl.from("#line-cont2", {
//     delay: 1,
//     width: "0",
//     duration: 2
// })
//     .from("#page3-2 h1", {
//         opacity: 0,
//         y: 100
//     })
//     .from("#box-cont2 div", {
//         height: "0",
//         stagger: 0.2
//     })
//     .from("#box-cont2 p", {
//         opacity: 0,
//         stagger: 0.2
//     });

// const page4Tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page4",
//         scroller: "#main",
//         start: "top center",
//         toggleActions: "play none none none"
//     }
// });

// page4Tl.from("#line-cont3", {
//     delay: 1,
//     width: "0",
//     duration: 2
// })
//     .from("#page4-2 h1", {
//         opacity: 0,
//         y: 100
//     })
//     .from("#box-cont3 div", {
//         height: "0",
//         stagger: 0.2
//     })
//     .from("#box-cont3 p", {
//         opacity: 0,
//         stagger: 0.2
//     });
