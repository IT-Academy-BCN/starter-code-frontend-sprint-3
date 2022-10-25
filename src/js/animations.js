import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Observer } from "gsap/Observer";
gsap.registerPlugin(Observer);

const main = document.querySelector("main");
const header = document.querySelector("header");
const headerContent = document.querySelector(".header-content");
const subheading = document.querySelector(".subheading");
const arrow = document.querySelector(".arrow");
const headerHeight = window.innerHeight * 0.35;
const ITHeading = document.querySelector("#it-heading");
const frontHeading = document.querySelector("#front-heading");

const headings = gsap.utils.toArray(".home-heading");
const front = document.querySelector("#front");
const back = document.querySelector("#back");
const data = document.querySelector("#data");
const sections = [front, back, data];

export function fadeIn() {
  gsap.fromTo(
    [ITHeading, subheading, arrow],
    { y: 50, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.2, ease: "power3.inOut" }
  );
}

// Do not animate header if coming from the inside the site
export function doNotAnimateHeader() {
  if (document.referrer === `${window.location.origin}/checkout.html`) {
    header.classList.add("responsive-header");
    animateRespHeadings();
  }
}

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

export function animateHeader() {
  // Prevent scroll on main
  main.addEventListener("touchmove", preventScroll, { passive: false });
  main.addEventListener("wheel", preventScroll, { passive: false });

  Observer.create({
    target: header, // can be any element (selector text is fine)
    type: "wheel,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
    // onUp: () => previous(),
    onDown: () => next(),
    tolerance: 30,
    preventDefault: true,
  });

  function next() {
    const tl = gsap.timeline();

    tl.to(header, {
      height: headerHeight,
      onComplete: animateRespHeadings,
    });
    tl.to([ITHeading, frontHeading], { top: "65%" }, "<");
    tl.to([ITHeading, arrow, subheading], { autoAlpha: 0 }, "<");
    tl.to([frontHeading, headerContent], { autoAlpha: 1 }, "<");
  }

  arrow.addEventListener("click", function () {
    next();
  });
}

export function animateRespHeadings() {
  enableScrollHeader();
  disableScrollHeader();
  addRespHeaderHeight();
  animateHeadings();
}

function enableScrollHeader() {
  setTimeout(() => {
    main.removeEventListener("wheel", preventScroll, { passive: false });
    main.removeEventListener("touchmove", preventScroll, { passive: false });
  }, "500");
}

function disableScrollHeader() {
  header.addEventListener("wheel", preventScroll, { passive: false });
  header.addEventListener("touchmove", preventScroll, { passive: false });
}

export function addRespHeaderHeight() {
  header.classList.add("responsive-header");
}

export function animateHeadings() {
  const mm = gsap.matchMedia();

  mm.add(
    {
      isMobile: "(max-width: 779px",
      isDesktop: "(min-width: 780px",
    },
    (context) => {
      const { isMobile } = context.conditions;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: front,
          // markers: true,
          scrub: true,
          start: "bottom bottom",
          end: isMobile ? "700% bottom" : "300% bottom",
        },
      });

      tl.to(headings[0], { autoAlpha: 0, delay: 3 });
      tl.fromTo(
        headings[1],
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
        },
        "<"
      );
      tl.to(headings[1], { autoAlpha: 0, delay: 3 });
      tl.fromTo(
        headings[2],
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
        },
        "<"
      );
    }
  );
}
