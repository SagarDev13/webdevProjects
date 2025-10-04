export default function contactPage() {
  const element = document.createElement('div');
  element.classList.add('page');

  const heading = document.createElement('h1');
  heading.textContent = "Contact Us";

  const phone = document.createElement('p');
  phone.textContent = "📞 Phone: +977-123456789";

  const email = document.createElement('p');
  email.textContent = "✉️ Email: manjil@restaurant.com";

  element.appendChild(heading);
  element.appendChild(phone);
  element.appendChild(email);

  return element;
}
