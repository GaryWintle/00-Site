import "./style.css";

//image example for Vite
import profileImage from "./src/assets/home/gw-profile.png?format=webp";
document.getElementById("profile-image").src = profileImage;

setupCounter(document.querySelector("#counter"));
