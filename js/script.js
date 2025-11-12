
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const tl = gsap.timeline();

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,
  effects: true
});

const blobs = document.querySelectorAll(".blob");
const petals = document.querySelectorAll(".petals")

function moveBlobs(blob){
    gsap.to(blob,{
    x: gsap.utils.random(-200, 200),
    y: gsap.utils.random(-200, 200),
    duration: gsap.utils.random(3, 6),
    ease: "sine.inOut",
    onComplete: ()=> moveBlobs(blob)
    })
}

function movePetals(petal){
  gsap.to(petal,{
    x: gsap.utils.random(-200, 200),
    y: gsap.utils.random(-200, 200),
    duration: gsap.utils.random(3, 10),
    rotationZ: gsap.utils.random(-360, 0) ,
    ease: "sine.inOut",
    onComplete: ()=> movePetals(petal)
  })
}


blobs.forEach(blob => moveBlobs(blob))
petals.forEach(petal => movePetals(petal))


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

gsap.to(".hero-content", {
  scrollTrigger: {
    trigger: ".hero",       
    start: "top -30%",        
    end: "bottom top",       
    scrub: true,             
  },
  y: -100,                  
  opacity: 0,                
  ease: "power2.out"
});
