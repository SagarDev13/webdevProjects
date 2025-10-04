export default function homePage() {
  const element = document.createElement('div');
  element.classList.add('page');

  const heading = document.createElement('h1');
  heading.textContent = "Welcome to Manjil's Restaurant 🍽️";

  const para = document.createElement('p');
  para.textContent = "Delicious food made with love since 2025.";

  element.appendChild(heading);
  element.appendChild(para);

  return element;
}
