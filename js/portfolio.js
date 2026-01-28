import { createCards } from './createCards.js';
import { projects } from './projects.js';

window.onload = () => {

  projects.forEach(project => {
    createCards(
      project.title,
      project.text,
      project.image,
      project.gif
    );
  });

}

