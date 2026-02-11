import render from "../views/pages/portfolio.js"

export function init() {
    const app = document.getElementById("app");

    if (app.classList.contains("h-1100")){
        app.classList.replace("h-1100", "h-auto")
    }

    render();
}