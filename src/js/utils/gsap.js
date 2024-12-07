import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export function gsapAnimations() {
  gsap.from("#test-anim", {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#test-anim",
      end: "bottom center",
      markers: true,
    },
  });
  //   gsap.to(".--green-text", {
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".--green-text",
  //       start: 20,
  //     },
  //   });
}
