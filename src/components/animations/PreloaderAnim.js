import gsap from "gsap";

const tl = gsap.timeline();
const mm = gsap.matchMedia();

export const preLoaderAnim = () => {

    mm.add("all and (max-width: 1100px)", () => {
        tl.to("body", {
            overflowY: "hidden",
        })
        .to("#landing, .name", {
            visibility: "hidden",
            overflowY: "hidden",
            overflowX: "hidden",
        })
        .from(".char", {
            opacity: 0,
            y: 20,
            duration: 2,
            stagger: 0.01,
            ease: "Power4.easeOut"
        })
        .to(".char", {
            opacity: 0,
            y: 20,
            duration: 0.1,
            stagger: 0.01,
        })
        .to("body", {
            duration: 0,
            overflowY: "auto",
            ease: "Circ.easeout",
        })
        .to("#landing, .name", {
            visibility: "visible"
        })
        .to(".name", {
            visibility: "visible",
            stagger: 0.5,
            ease: "Power3.easeOut"
        })
        .to(".preloader", {
            duration: 0.5,
            opacity: 0,
            ease: "Circ.easeout",
        })
    });

    mm.add("all and (min-width: 1101px)", () => {
        tl.to("body", {
            overflowY: "hidden",
        }).to("#landing, .name", {
            visibility: "hidden",
            overflowY: "hidden",
            overflowX: "hidden",
        }).from(".char", {
            opacity: 0,
            y: 20,
            duration: 2,
            stagger: 0.01,
            ease: "Power4.easeOut"
        }).to(".char", {
            opacity: 0,
            y: 20,
            duration: 0.1,
            stagger: 0.01,
        }).to(".preloader", {
            duration: 0.5,
            opacity: 0,
            ease: "Circ.easeout",
        })
        .to("body", {
            duration: 0,
            overflowY: "auto",
            ease: "Circ.easeout",
        }).to("#landing, .name", {
            visibility: "visible"
        })
        .to(".preloader", {
            visibility: "hidden"
        }).from(".landing-picture", {
            duration: 1,
            translateY: "200%",
            ease: "Power4.easeOut"
        });
    });
    
  };