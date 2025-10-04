export default function menuPage() {
  const element = document.createElement('div');
  element.classList.add('page');

  const heading = document.createElement('h1');
  heading.textContent = "Our Menu";

  const list = document.createElement('ul');
  const items = ["Pizza 🍕", "Burger 🍔", "Pasta 🍝", "Salad 🥗"];

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  element.appendChild(heading);
  element.appendChild(list);

  return element;
}
