const closeMenuButton = document.querySelector('.header__menu_close');
const openMenuButton = document.querySelector('.header__menu-icon');
const menu = document.querySelector('#header__menu');
const searchPanel = document.querySelector('#search_panel');
const closeSearchButton = document.querySelector('.header__search_panel-close');
const openSearchButton = document.querySelector('#search');
const upButton = document.querySelector('.footer__up-button');
const slides = document.querySelectorAll('#slide');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
	slides[currentSlide].classList.remove('slide-visible');
	currentSlide == slides.length - 1 
		? currentSlide = 0
		: currentSlide++;
	slides[currentSlide].classList.add('slide-visible');
}

openMenuButton.addEventListener('click', () => {
	menu.classList.add('header__menu');
})

closeMenuButton.addEventListener('click', () => {
	menu.classList.remove('header__menu')
})

openSearchButton.addEventListener('click', () => {
	searchPanel.classList.add('header__search_panel');
})

closeSearchButton.addEventListener('click', () => {
	searchPanel.classList.remove('header__search_panel')
})

upButton.addEventListener('click', function() {
	document.body.scrollIntoView( {block: "start", inline: "nearest", behavior: "smooth"});
})