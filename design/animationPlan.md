# NovaMotion — GSAP Animation Plan

## Global Motion System
- Smooth scroll with ScrollTrigger for all sections.
- Light parallax applied on background blobs and section transitions.
- Animation timing follows “ease-out” flow (natural cinematic pacing).

---

## HERO SECTION
**Goal:** Establish visual depth and identity through light motion.

- **Background blobs:**  
  - Pulsating scale (1 → 1.1 → 1)  
  - Random floating movement (X ±40px, Y ±30px, infinite, yoyo)
- **Headline (h1):**  
  - Fade-in + upward motion (Y: 40 → 0, opacity 0 → 1)
  - Slight delay before subtext and CTA appear (stagger +0.2s)
- **Subtext & CTA:**  
  - Staggered entrance (fade + translateY)
  - Hover glow on CTA button (GSAP hover effect)

---

## MOTION SECTION
**Goal:** Communicate dynamism and futuristic energy.

- **Main visual:**  
  - Replaced static image with looping video background.
- **Text block:**  
  - Animate-in from right (X: 50 → 0, opacity 0 → 1)
  - Infinite “light wave” animation across text for subtle motion.
- **Floating particles (“petals”):**  
  - Constant rightward drift (X + random 100–200px)
  - Loop with small random offsets (infinite timeline)

---

## CRAFT SECTION
**Goal:** Showcase service variety through clean, modular motion.

- **Cards (3x):**  
  - Fade-in + upward motion (stagger 0.2s)
  - Hover: slight scale-up (1 → 1.05)
- **Green line animation:**  
  - GSAP `strokeDashoffset` from 100% → 0% on scroll
  - Trigger: enters viewport

---

## PROCESS SECTION
**Goal:** Highlight precision and flow through interactive storytelling.

- **Purple line animation:**  
  - Reverse direction of green line (0% → 100%)
- **Step cards (01–03):**  
  - Parallax motion: depth layers move at different speeds.
  - Sequential reveal (GSAP stagger)
  - Fade + translateY entrance
- **Buttons (discover / insights):**  
  - Fade + stagger-in with 0.1s delay
  - Hover: pulse glow

---

## CTA SECTION
**Goal:** Evoke inspiration and futuristic precision.

- **Blue particle field:**  
  - Glow pulse (opacity 0.6 → 1 → 0.6, duration 2s, infinite)
  - Slight drift (X/Y random movement, slow loop)
- **Text + buttons:**  
  - Fade + scale-up (stagger 0.15s)
  - Hover: subtle color glow

---

## FOOTER SECTION
**Goal:** Keep interaction minimal, clean, and consistent.

- **“Made with motion” line:**  
  - Light text glow pulse loop (opacity 0.8 → 1 → 0.8)
- **Links:**  
  - Hover: opacity 0.7 → 1 (GSAP transition 0.2s)
- **Video background:**  
  - Infinite loop (soft playback, muted)
