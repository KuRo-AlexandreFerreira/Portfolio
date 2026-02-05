import routes from "./routes.js";

function handlePopState(event) {
    const { state } = event;

    const route = state || routes.home;

    setCurrentRoute(route);
    launchController(route.controller);
}

function setAnchorEventListener() {

    const anchors = document.querySelectorAll(".pageLink");

    anchors.forEach(anchor => {
        anchor.addEventListener("click", event => {
            event.preventDefault();
            navigate(anchor.pathname);
        })
    })

}

async function launchController(controllerName) {

    try {
        const controllerModule = await import(`../controllers/${controllerName}.js`);
        controllerModule.init();
    } catch(error) {
        console.error(error);
    }

}


function setCurrentRoute(route) {

    routes.currentPath.path = route.path;
    routes.currentPath.controller = route.controller;

}

function navigate(path, firstLoad = false) {

    if (path == routes.currentPath.path) {
        return;
    }

    const routeKey = Object.keys(routes).find(key => routes[key].path === path);

    const route = routes[routeKey] || routes.home;

    setCurrentRoute(route);

    firstLoad ?
        history.replaceState(route, "", route.path) :
        history.pushState(route, "", route.path);

    launchController(route.controller);


}

function start() {

    const path = window.location.pathname;
    console.log(path);

    navigate(path, true);
    addEventListener("popstate", handlePopState);
    setAnchorEventListener();

}

export default { start };