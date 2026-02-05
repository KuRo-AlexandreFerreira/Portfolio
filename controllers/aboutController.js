import render from "../views/pages/about.js"

export function init() {
    const app = document.getElementById("app");

    if (app.classList.contains("h-2000")){
        app.classList.replace("h-2000", "h-auto")
    }

    render();
}