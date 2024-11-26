//CSS
import "@/styles/components.css";
import "@/styles/layout.css";
import "@/styles/reset.css";
import "@/styles/typography.css";
import "@/styles/variables.css";

// Rebel Leaf Logo
import rebelleaflogo from "@/images/global/rl-logo.svg";
const rebelleafLogo = document.querySelector("#rebelleaf-logo");
rebelleafLogo.src = rebelleaflogo;

// Hero Image
import rlhero from "@/images/homepage/rl-hero.webp";
const rlHero = document.querySelector(".hero-image");
rlHero.style.backgroundImage = `url(${rlhero})`;

// Cartoon Beaver
import beaverbasic from "@/images/homepage/beaver-cartoon.svg";
const beaverBasic = document.querySelector(".beaver-basic");
beaverBasic.src = beaverbasic;

//Hero Bottom
import herobottom from "@/images/homepage/hero-bottom.svg";
const heroBottom = document.querySelector(".hero-bottom");
heroBottom.src = herobottom;
