
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const blobs = document.querySelectorAll(".blob");

function moveBlobs(blob){
    gsap.to(blob,{
    x: gsap.utils.random(-200, 200),
    y: gsap.utils.random(-200, 200),
    duration: gsap.utils.random(3, 6),
    ease: "sine.inOut",
    onComplete: ()=> moveBlobs(blob)
    })
}

blobs.forEach(blob => moveBlobs(blob))

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
