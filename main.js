//CSS
import "@/styles/components.css";
import "@/styles/layout.css";
import "@/styles/reset.css";
import "@/styles/typography.css";
import "@/styles/variables.css";

//image example for Vite
// import profileImage from "@/images/homepage/gw-profile.png?format=webp";

// Rebel Leaf Logo
import rebelleaflogo from "@/images/global/rl-logo.svg";
const rebelleafLogo = document.querySelector("#rebelleaf-logo");
rebelleafLogo.src = rebelleaflogo;

// Hero Image
import rlhero from "@/images/homepage/rl-hero.webp";
const rlHero = document.querySelector(".hero-image");
rlHero.style.backgroundImage = `url(${rlhero})`;
