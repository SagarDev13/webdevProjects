import './style.css';     // Import CSS so Webpack bundles it
import {homePage} from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

// Get content div
const content = document.getElementById('content');

// Create navigation buttons
const nav = document.createElement('nav');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');

homeBtn.textContent = 'Home';
menuBtn.textContent = 'Menu';
contactBtn.textContent = 'Contact';

// Append buttons to nav
nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);
document.body.insertBefore(nav, content); // place nav above content

// Load pages on click
homeBtn.addEventListener('click', () => {
  content.innerHTML = ''; // clear old content
  content.appendChild(homePage());
});

menuBtn.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menuPage());
});

contactBtn.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(contactPage());
});

// Default load = Home page
content.appendChild(homePage());

