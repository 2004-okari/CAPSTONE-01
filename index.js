// Popup menu bar

const body = document.querySelector('body');
const navigation = document.querySelector('.nav-bar');
const menu = document.querySelector('.logo');
const menuSec = document.querySelector('.menu-bar');
const closeButton = document.querySelector('#close-btn');
const openButton = document.querySelector('#hamburg-open');
const main = document.querySelector('main');

  const menuBar = () => {
    menu.style.display = 'none';
    navigation.style.boxShadow = 'none';
    body.style.backgroundColor = '#F07F7E';
    body.style.overflow = 'hidden';
    menuSec.style.display = 'block';
    menuSec.style.position = 'absolute';
    menuSec.style.top = '160px';
    menuSec.style.left = '50%';
    menuSec.style.transform = 'translate(-50%, -50%)';
    main.style.visibility = 'hidden';
  };
  openButton.addEventListener('click', menuBar);

  const closeMenu = () => {
    body.style.overflow = '';
    menu.style.display = '';
    navigation.style.boxShadow = '';
    body.style.backgroundColor = '';
    menuSec.style.display = '';
    main.style.visibility = '';
  };

  closeButton.addEventListener('click', closeMenu);

// Section with featured speakers

const presenters = [
  {
    featuredImage: 'images/steve-jobs.jpg',
    name: 'Steve Jobs',
    position: 'Founder of Apple inc',
    shortBackground: 'With an idea of improving the means of communication in the world, he was ridiculed but eventually made the largest breakthrough in the mobile phone industry by creating the so called smart-phones',
  },
  {
    featuredImage: 'images/bill.jpg',
    name: 'Bill Gates',
    position: 'Former CEO and founder of Microsoft Corporation',
    shortBackground: 'Despite the option to return to school after major setbacks during the creation of Microsoft Corporation, he stilled pushed idea and eventually made it. His success made him the richest man for more than a century.',
  },
  {
    featuredImage: 'images/jeff.jpg',
    name: 'Jeff Bezoz',
    position: 'Former CEO and founder of Amazon',
    shortBackground: 'Bezoz built his company amazon from a garage together with some of his friends. Despite being laughed on his work, he kept pushing and eventually became the world richest man the year 2020.',
  },
  {
    featuredImage: 'images/facebook.png',
    name: 'Mark Zuckerburg',
    position: 'CEO of facebook and other major social media apps',
    shortBackground: 'Creator of the famous app facebook. After getting the idea from his friends at Havard, Mark could not let the idea die. Eventually, facebook became a success and he went to dropout of Havard to manage facebook.',
  },
  {
    featuredImage: 'images/warren.jpg',
    name: 'Warren Buffett',
    position: 'Owner of various companies and biggest investor for cocacola',
    shortBackground: 'With the skill of analysing business data, Warren has made major investments to businesses which grew to fortune 500 companies hence the nickname the ORACLE OF OMAHA',
  },
  {
    featuredImage: 'images/adam.jpg',
    name: 'Adam Sandler',
    position: 'Owner and founder of golf studios',
    shortBackground: 'With lack of funding to support his crazy acting career, Adam sought to create his own film company so as to cater for the many actors with no place to go due to lack of funding. He is now rising to riches',
  },
];

let i = 0;
presenters.forEach(() => {
  i += 1;

  const sectionPresenter = document.createElement('div');
  sectionPresenter.classList.add('sec-3-presenter');
  sectionPresenter.innerHTML = `
  <div class="presenter-img">
    <img src='${presenters[i - 1].featuredImage}' alt="presenter" class="presenter-1">
  </div>
  <div class="presenter-text">
    <h5 class="presenter-name">${presenters[i - 1].name}</h5>
    <p class="presenter-position">${presenters[i - 1].position}</p>
    <p class="presenter-description">${presenters[i - 1].shortBackground}</p>
  </div>
  `;
  document.querySelector('.sec-3-container').appendChild(sectionPresenter);
});