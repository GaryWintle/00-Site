//JS Imports
import { updateBookingsMonth } from "@/js/utils/dateHelpers.js";
import { initDynamicImageCollage } from "@/js/components/imageCollage.js";

// CSS Imports
import "@/styles/components.css";
import "@/styles/layout.css";
import "@/styles/reset.css";
import "@/styles/typography.css";
import "@/styles/variables.css";

// Image Imports
import rebelleaflogo from "@/images/global/rl-logo.svg";
import rlhero from "@/images/homepage/rl-hero.webp";
import beaverbasic from "@/images/homepage/beaver-cartoon.svg";
import herobottom from "@/images/homepage/hero-bottom.svg";

// Direct DOM manipulation
document.addEventListener("DOMContentLoaded", () => {
  // Rebel Leaf Logo
  const rebelleafLogo = document.querySelector("#rebelleaf-logo");
  if (rebelleafLogo) rebelleafLogo.src = rebelleaflogo;

  // Hero Image
  const rlHero = document.querySelector(".hero-image");
  if (rlHero) rlHero.style.backgroundImage = `url(${rlhero})`;

  // Cartoon Beaver
  const beaverBasic = document.querySelector(".beaver-basic");
  if (beaverBasic) beaverBasic.src = beaverbasic;

  // Hero Bottom
  const heroBottom = document.querySelector(".hero-bottom");
  if (heroBottom) heroBottom.src = herobottom;

  //Booking Date
  updateBookingsMonth();

  // Image Collage
  initDynamicImageCollage();
});
