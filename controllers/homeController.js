import render from "../views/pages/home.js"

export function init() {
    const app = document.getElementById("app");

    if (app.classList.contains("h-auto")){
        app.classList.replace("h-auto", "h-2000")
    }

    render();
}