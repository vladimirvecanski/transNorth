'use strict';

const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  link.addEventListener('click', () => {
    removeActiveClasses();
    link.classList.add('active');
  });
});

const removeActiveClasses = () => {
  links.forEach((link) => {
    link.classList.remove('active');
  });
};
