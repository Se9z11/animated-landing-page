
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const tl = gsap.timeline();
const blobs = document.querySelectorAll(".blob");
const petals = document.querySelectorAll(".petals")


// === BLOB ANIMATIONS ===
// Each blob moves to a random position, then recursively calls moveBlobs() for infinite motion
function moveBlobs(blob){
    gsap.to(blob,{
    x: gsap.utils.random(-200, 200),
    y: gsap.utils.random(-200, 200),
    duration: gsap.utils.random(3, 6),
    ease: "sine.inOut",
    onComplete: ()=> moveBlobs(blob)
    })
}

// === PETAL LOOP ===
// Similar to blobs but with rotation for a drifting particle effect
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


// Start blob + petal infinite animations
blobs.forEach(blob => moveBlobs(blob))
petals.forEach(petal => movePetals(petal))

// === HERO TIMELINE ===
// Intro animations for hero elements on page load
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

// === SCROLL TRIGGER ===
// Applies smooth scroll and allows GSAP scroll-linked animations
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,
  effects: true
});

// Fade + translate hero content when scrolling out of view
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


// === MOTION SECTION ANIMATION ===
// Reveals text block when the motion section enters the viewport
gsap.from(".motion-text",{
  scrollTrigger:{
    trigger: ".motion-section",
    start: "top 70%",
    toggleACtions: "play none none reverse",
  },

  x: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
})


// Smooth background gradient animation for the shine effect
gsap.to(".shine", {
  backgroundPosition: "200% 0",
  duration: 30,
  repeat: -1,
  ease: "sine.inOut"
});
