import {createNavbar} from "./components/navbar.js"
import router from "../js/router.js";

window.addEventListener("DOMContentLoaded", () => {

    initPages();
    
    
});

const initPages = () => {
    const app = document.getElementById("app");

    const main = document.createElement("main");
    main.id = "main";

    app.appendChild(createNavbar())
    app.appendChild(main);

    router.start();
}