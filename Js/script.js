// Locomotive Scroll init
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});




//path animation
const path = document.querySelector('#path');
const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;




// ScrollTrigger + Locomotive Scroll sync
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

// gsap.registerPlugin(ScrollTrigger);

const shouldPlayLoader = sessionStorage.getItem("playLoader");
const tl = gsap.timeline();

if (!shouldPlayLoader) {
    sessionStorage.setItem("playLoader", "played");

    tl.to("#div2", {
        width: "250px",
        delay: 1,
        duration: 1,
    });

    tl.to("#div2", {
        width: "550px",
        height: "550px",
        duration: 1
    });

    tl.to("#div2", {
        width: "250px",
        height: "250px",
        ease: "back.out(1.7)"
    });

    tl.to("#div1", {
        width: "150px",
        ease: "back.out(1.7)"
    });

    tl.to("#div3", {
        width: "200px",
        duration: 0.3,
        ease: "back.out(1.7)"
    });

    tl.to("#div4", {
        delay: 0.2,
        width: "100px",
        ease: "back.out(1.7)"
    });

    tl.to("#div2", {
        width: "0px",
        ease: "back.in(1.7)"
    });

    tl.to("#div1", {
        width: "0px",
        ease: "back.in(1.7)"
    });

    tl.to("#div3", {
        width: "0px",
        ease: "back.in(1.7)"
    });

    tl.to("#div4", {
        width: "0px",
        ease: "back.in(1.7)"
    });

    tl.to(".loader-div span", {
        fontSize: "10rem",
        fontWeight: "600"
    });

    tl.to(".loader-div span", {
        y: -100,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.5
    });

    tl.to("#loader", {
        y: -1000,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            document.getElementById("loader").style.display = "none";
        }
    });

} else {
    document.getElementById("loader").style.display = "none";
}









//center part animations
gsap.set("#center h1, #center h4", {
    y: 100,
    opacity: 0
});

tl.to("#center h1", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "expo.out"
});

tl.to("#center h4", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power3.out"
});




// page 2 animationss

document.getElementById("img-div").addEventListener("mouseenter", () => {

    gsap.to("#sub-img-1", {
        top: "4%",
        left: "3%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-2", {
        top: "10%",
        left: "25%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-3", {
        top: "40%",
        left: "15%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-4", {
        bottom: "8%",
        left: "3%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-5", {
        bottom: "5%",
        left: "25%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-6", {
        bottom: "2%",
        left: "45%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-7", {
        top: "2%",
        left: "55%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-8", {
        top: "10%",
        right: "17%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-9", {
        top: "6%",
        right: "2%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-10", {
        top: "40%",
        right: "2%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-11", {
        top: "45%",
        right: "21%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-12", {
        bottom: "5%",
        right: "25%",
        transform: "rotate(0)"
    })
    gsap.to("#sub-img-13", {
        bottom: "4%",
        right: "4%",
        transform: "rotate(0)"
    })

});


let page3tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
page3tl.from("#top-line", {
    width: 0,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
}, "a");
page3tl.to("#path", {
    strokeDashoffset: 0,
    duration: 4,
    ease: "power2.out"
}, "a");

page3tl.to(".reveal-text span", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    stagger: 0.1
});
page3tl.from("#box-1", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
});
page3tl.from("#box-2", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
});
page3tl.from("#box-3", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
});
page3tl.from("#box-4", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
});
page3tl.from("#box-5", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
});



let footertl = gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
footertl.to('#taxi', {
    delay: 0.2,
    left: "120%",
    duration: 8,
    repeat: -1,
    ease: "none"
})






// page3
// tl.to(".reveal-text span", {
//     y: 0,
//     opacity: 1,
//     duration: 1.5,
//     ease: "power4.out",
//     stagger: 0.1,
// });
// tl.from("#box-1", {
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out",
// });
// tl.from("#box-2", {
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out",
// });
// tl.from("#box-3", {
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out",
// });
// tl.from("#box-4", {
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out",
// });
// tl.from("#box-5", {
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out",
// });



// gsap.from("#path", {
//     strokeDashoffset: 0,
//     duration: 5,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: "#page3",
//         scroller: ".main",
//         start: "top 80%",
//         toggleActions: "play none none none"
//     }
// });


