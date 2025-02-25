// JS scripts placed here
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('offcanvas-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded',!expanded);
  menu.classList.toggle('expanded');
});


const idElement = document.getElementById('top');
console.log('idElement', idElement);

const classElements = document.getElementsByClassName('purple-giraffe-container');
console.log('classElements', classElements);

const tagElements = document.getElementsByTagName('p');
console.log('tagElement', tagElements);

const QSelement = document.querySelector('.purple-giraffe-container');
console.log('QSelement', QSelement);

const QSAelement = document.querySelectorAll('.purple-giraffe-container');
console.log('QSAelement', QSAelement);

const beforGiraffes = document.querySelector('h1');
console.log('beforGiraffes', beforGiraffes);
// beforGiraffes.textContent = 'New content';
beforGiraffes.innerHTML = '<p>New HTML content</p>';;