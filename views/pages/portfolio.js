import { createCards } from '../components/portfolioCards.js';
import { projects } from '../../js/projects.js';

export default function render(){
    
    const main = document.getElementById("main");
    
    main.innerHTML = `
        <div class= "content flex flex-col m-0 p-0 h-full w-full">
            <h1 class="portfolioTitle text-white text-center text-5xl mt-24 font-bold">Portfolio</h1>
            <div class="cardContainer flex flex-wrap justify-center items-center m-5 p-5"></div>
        </div>
    `

    projects.forEach(project => {
        createCards(
          project.title,
          project.text,
          project.image,
          project.videoSrc,
          project.githubLink
        )
    });

}