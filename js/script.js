
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const blobs = document.querySelectorAll(".blob");

blobs.forEach(blob =>{
    gsap.to(blob,{
        x: ()=> gsap.utils.random(-200, 200),
        y: ()=> gsap.utils.random(-300,300),
        duration: ()=> gsap.utils.random(2, 4),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    });
});

tl.from(".hero h1",{
    y:40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
},0.5);

tl.from(["#hero-p", ".people-wrapper", ".btn"],{
    y:20,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2, 
    ease: "power2.out"
}, "-=0.6")
