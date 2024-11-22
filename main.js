//CSS
import "@/styles/reset.css";

//image example for Vite
import profileImage from "@/images/homepage/gw-profile.png?format=webp";
import rebelleaflogo from "@/images/global/rl-logo.svg";

document.getElementById("profile-image").src = profileImage;
document.getElementById("rebelleaf-logo").src = rebelleaflogo;

const rebelleafLogo = document.querySelector("#rebelleaf-logo");
rebelleafLogo.addEventListener("click", () => {
  alert("Sup!");
});

const btn = document.querySelector("#btn");

function alertFunction() {
  alert("Bugger off!");
}

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
