function createCards(title, text, image, videoSrc) {

const cardContainer = document.querySelector('.cardContainer');

const card = document.createElement('div');
card.className = 'card';
cardContainer.appendChild(card);

const banner = document.createElement('div');
banner.className = 'banner';
banner.style.backgroundImage = 'url("' + image + '")';
card.appendChild(banner);

const video = document.createElement('video');
video.className = 'bannerVideo';
video.muted = true;
video.loop = true;
video.playsInline = true;
video.style.height = "150px";
video.style.objectFit = "cover";
video.style.width = "100%";
video.style.borderRadius = "8px";
video.preload = 'metadata';
banner.appendChild(video);

const cardTitle = document.createElement('div');
cardTitle.className = 'card-title';
card.appendChild(cardTitle);

const titleText = document.createElement('h1');
titleText.textContent = title;
cardTitle.appendChild(titleText);

const cardBody = document.createElement('div');
cardBody.className = 'card-body';
card.appendChild(cardBody);

const bodyText = document.createElement('p');
bodyText.textContent = text;
cardBody.appendChild(bodyText);

let hasLoaded = false;

banner.addEventListener('mouseover', () => {
  banner.style.transform = 'scale(1.05)';
  banner.style.transition = 'transform 0.3s ease';

  if(!hasLoaded){
    video.src = videoSrc;
    video.load;
    hasLoaded = true;
    video.currentTime = 0;
    
  }

  video.play();
  video.style.opacity = '1';
});  

banner.addEventListener('mouseout', () => {
  banner.style.transform = 'scale(1)';
  banner.style.transition = 'transform 0.3s ease';
  banner.style.backgroundImage = 'url("' + image + '")';

  video.pause();
  video.style.opacity = '0';
});
}

export { createCards };