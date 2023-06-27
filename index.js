//Popup menu bar

const body = document.querySelector('body');
const social = document.querySelector('.social-icons');
const navigation = document.querySelector('.nav-bar');
const menu = document.querySelector('.logo');
const menuSec = document.querySelector('.menu-bar');
const closeButton = document.querySelector('#close-btn');
const openButton = document.querySelector('#hamburg-open');
const main = document.querySelector('main')

if (window.innerWidth < 768) {
  let menuBar = () => {
    menu.style.display = 'none';
    navigation.style.boxShadow = 'none';
    body.style.backgroundColor = '#F07F7E';
    menuSec.style.display = 'block';
    menuSec.style.position = 'absolute';
    menuSec.style.top = '30%';
    menuSec.style.left = '50%';
    menuSec.style.transform = 'translate(-50%, -50%)';
    main.style.visibility = 'hidden';

  }
  openButton.addEventListener('click', menuBar);

  let closeMenu = () => {
    menu.style.display = '';
    navigation.style.boxShadow = '';
    body.style.backgroundColor = '';
    menuSec.style.display = '';
    main.style.visibility = '';
  }

  closeButton.addEventListener('click', closeMenu);
}