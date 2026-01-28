const html = document.documentElement;

switch (true) {
  case window.location.href.endsWith("index.html"):
    showHome();
    break;
}

function showAbout() {
  const content = document.getElementById("content");
  content.innerHTML = '';

  const body = document.getElementById("body");
  body.style.height = '100vh';

  scrollTo({ top: 0, behavior: 'auto' });

  content.innerHTML = `
    <div class="about" id="about">
      <div class="spacer"></div>
      <div class="">
        <p class="aboutDescription">Hello world, I'm <span class="highlighted">Alexandre Ferreira</span> a Full-Stack Developer based in Porto, Portugal.
        <p class="aboutDescription">I began my career in <span class="highlighted">2019</span> teaching little kids Taekwondo, imparting valuable skills like discipline and perseverance.</p> 
        <p class="aboutDescription">As a lifetime tech geek I developed a passion for programming in my free time by creating projects in order to transform my curiosity into ability. 
          I now devote all of my attention to software development, focusing my energies on creating solutions that have an impact.</p> 
        <p class="aboutDescription">I can't wait to have a positive impact on the world by writing meaningful code and continuing to advance in the computer industry.</p>
        <div class="buttonsCointainer">
          <a href="https://github.com/KuRo-AlexandreFerreira" target="_blank" title="Visit my Github page!" class="icon" >
            <img src="resources/githubLogo.png" alt="" >
          </a>
          <a href="https://www.linkedin.com/in/alexandreferreira-dev/" target="_blank" title="Visit my LinkedIn profile!" class="icon">
            <img src="resources/linkedinLogo.png" alt="">
          </a>
          <a href="https://www.instagram.com/_alexandre.f_/" target="_blank" title="Visit my Instagram profile!" class="icon">
            <img src="resources/instagramLogo.png" alt="">
          </a>  
        </div> 
      </div>
      
    </div>
  `;

  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.style.display = "inline-block";
  });
}

function showHome() {
  const content = document.getElementById("content");

  content.innerHTML = '';

  const body = document.getElementById("body");
  body.style.height = '700vh';

  scrollTo({ top: 0, behavior: 'auto' });
  
  const frameCount = 150;
  const currentFrame = index => (
  `resources/animation/frames_${index.toString().padStart(5, '0')}.webp`
  )

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };
  preloadImages();

  
  content.innerHTML = `
    <div class="header">
      <div class="headerContent">
        <p class="headerText">WELCOME TO MY WORLD!</p>
        <canvas class="viewer" id="viewer"> </canvas>
      </div>
      <div class="scrollDown">
        <p>SCROLL DOWN</p>
        <img src="resources/downarrow.svg" alt="">
      </div>
    </div>

    <div class="main" id="main">
      <div></div>
      <div>
        <p class="description"> Hello world! I'm<span class="highlighted"> Alexandre Ferreira</span>, a Full-Stack<br> Developer based in Porto, Portugal.</p> 
        <p class="bigText">I CODE STUFF!</p>
        <div class="buttonsCointainer">
          <a href="https://github.com/KuRo-AlexandreFerreira" target="_blank" title="Visit my Github page!" class="icon" >
            <img src="resources/githubLogo.png" alt="" >
          </a>
          <a href="https://www.linkedin.com/in/alexandreferreira-dev/" target="_blank" title="Visit my LinkedIn profile!" class="icon">
            <img src="resources/linkedinLogo.png" alt="">
          </a>
          <a href="https://www.instagram.com/_alexandre.f_/" target="_blank" title="Visit my Instagram profile!" class="icon">
            <img src="resources/instagramLogo.png" alt="">
          </a>  
        </div>
      </div>
    </div>
  `;

const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.style.display = "none";
  });

const canvas = document.getElementById("viewer");
const context = canvas.getContext("2d");



const img = new Image()
img.src = currentFrame(1);
canvas.width=950;
canvas.height=1000;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const scrollDown = document.querySelector('.scrollDown');

const animationScrollFraction = 0.7;
const fadeScrollFraction = 0.9;
window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  let scrollFraction = scrollTop / maxScrollTop;
  
  if (scrollFraction <= animationScrollFraction) {
    header.style.opacity = 1;
    header.style.position = 'fixed';
    scrollDown.style.opacity = 1 - (scrollFraction / animationScrollFraction) * 2;

    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor((scrollFraction / animationScrollFraction) * frameCount)
    );
    requestAnimationFrame(() => updateImage(frameIndex + 1));
  } else {
    header.style.opacity = 1 - ((scrollFraction - animationScrollFraction) / (fadeScrollFraction - animationScrollFraction));
    main.style.opacity = 0 + ((scrollFraction - animationScrollFraction) / (fadeScrollFraction - animationScrollFraction));
  }
  if (main.style.opacity >= 1){
    document.querySelectorAll(".bigText, .description, .icon").forEach((element) => {
      element.style.display = "inline-block";
    });
  } else if (main.style.opacity <= 0.2){
    document.querySelectorAll(".bigText, .description, .icon").forEach((element) => {
      element.style.display = "none";
    });
  }

});


}