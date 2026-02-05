export function scrollerImage(){
  const scrollerImage = document.createElement("div");
 
  scrollerImage.innerHTML = `
    <div class="header flex flex-col pointer-events-none z-1 fixed items-center justify-center h-full w-full bg-black" >
      <div class="headerContent flex flex-col items-center justify-evenly md:flex-row">
        <p class="headerText text-white text-5xl text-center md:tracking-widest">WELCOME TO MY WORLD!</p>
        <canvas class="viewer w-[90%] md:w-[40%] mt-0" id="viewer"> </canvas>
      </div>
      <div class="scrollDown flex flex-col items-center gap-1 fixed z-1 translate-x-[-50%] bottom-5 text-center left-1/2 text-white">
        <p class= "text-lg text-white font-medium m-0">SCROLL DOWN</p>
        <img class="-mt-6 w-17.5 h-auto" src="resources/downarrow.svg" alt="" class="w-20 h-auto">
      </div>
    </div>

    <div class="content flex flex-col fixed h-full w-full items-center justify-center" id="content">
      <div class="flex flex-col items-center justify-center gap-16 m-2.5">
        <p class="description hidden text-white text-2xl text-center wrap-normal md:w-175"> Hello world! I'm<span class="text-red-700"> Alexandre Ferreira</span>, a Full-Stack Developer based in Porto, Portugal.</p> 
        <p class="bigText hidden text-white w-full h-auto text-center md:text-6xl">I CODE STUFF!</p>
        <div class="buttonsCointainer">
          <a href="https://github.com/KuRo-AlexandreFerreira" target="_blank" title="Visit my Github page!" class="icon hidden mr-5 outline-none decoration-0" >
            <img src="resources/githubLogo.png" alt="" >
          </a>
          <a href="https://www.linkedin.com/in/alexandreferreira-dev/" target="_blank" title="Visit my LinkedIn profile!" class="icon hidden mr-5 outline-none decoration-0">
            <img src="resources/linkedinLogo.png" alt="">
          </a>
          <a href="https://www.instagram.com/_alexandre.f_/" target="_blank" title="Visit my Instagram profile!" class="icon hidden mr-5 outline-none decoration-0">
            <img src="resources/instagramLogo.png" alt="">
          </a>  
        </div>
      </div>
    </div>`

    return scrollerImage;
}

export function scrollerbehaviour(){
    const html = document.documentElement;

    const frameCount = 150;
    const currentFrame = index => (
    `../../resources/animation/frames_${index.toString().padStart(5, '0')}.webp`
    )

    const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        }
    };

    preloadImages();

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

    const content = document.querySelector('.content');
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
        content.style.opacity = 0 + ((scrollFraction - animationScrollFraction) / (fadeScrollFraction - animationScrollFraction));
    }
    if (content.style.opacity >= 1){
        document.querySelectorAll(".bigText, .description, .icon").forEach((element) => {
        element.style.display = "inline-block";
        });
    } else if (content.style.opacity <= 0.2){
        document.querySelectorAll(".bigText, .description, .icon").forEach((element) => {
        element.style.display = "none";
        });
    }

    });
}