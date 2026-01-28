function createCards(title, text, image, gif) {

const cardContainer = document.querySelector('.cardContainer');

const card = document.createElement('div');
card.className = 'card';
cardContainer.appendChild(card);

const banner = document.createElement('div');
banner.className = 'banner';
banner.style.backgroundImage = 'url("' + image + '")';
card.appendChild(banner);

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

banner.addEventListener('mouseover', () => {
  banner.style.transform = 'scale(1.05)';
  banner.style.backgroundImage = 'url("' + gif + '")';
  banner.style.transition = 'transform 0.3s ease';
});  

banner.addEventListener('mouseout', () => {
  banner.style.transform = 'scale(1)';
  banner.style.transition = 'transform 0.3s ease';
  banner.style.backgroundImage = 'url("' + image + '")';
});
}

export { createCards };