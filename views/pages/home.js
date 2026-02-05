import { scrollerbehaviour, scrollerImage } from "../components/scrollerImage.js";

export default function render(){
    
    const main = document.getElementById("main");

    main.innerHTML= "";

    const scroller = scrollerImage();

    main.appendChild(scroller);
    scrollerbehaviour();
}