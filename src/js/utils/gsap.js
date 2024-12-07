import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export function gsapAnimations() {
  // testimonials
  gsap.from("#test-anim", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#test-anim",
      //   scrub: true,
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "restart none none reverse",
      // onEnter onLeave onEnterBack onLeaveBack
      //   markers: true,
    },
  });

  ScrollTrigger.create({
    trigger: "h1",
    start: "top 10%",
    markers: true,
    toggleClass: { targets: "h1 > span", className: "--green-text" },
    toggleActions: "restart none none reverse",
    scrub: 4,
  });
  //   gsap.to("span", {
  //     duration: 11,
  //     scrollTrigger: {
  //       trigger: "h1",
  //       start: "top -40px",
  //       markers: true,
  //       toggleClass: "--green-text",
  //     },
  //   });
}
