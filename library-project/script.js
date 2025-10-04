const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID(); // unique ID
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype method to toggle read status
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Add book to library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

// Display books on the page
function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; // Clear existing display

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", book.id);

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? "Read ✅" : "Not Read ❌"}</p>
    `;

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Read";
    toggleBtn.classList.add("toggleBtn");
    toggleBtn.addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeBtn");
    removeBtn.addEventListener("click", () => {
      removeBook(book.id);
    });

    card.appendChild(toggleBtn);
    card.appendChild(removeBtn);

    libraryDiv.appendChild(card);
  });
}

// Remove book from library
function removeBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

// DOM Elements
const newBookBtn = document.getElementById("newBookBtn");
const bookDialog = document.getElementById("bookDialog");
const bookForm = document.getElementById("bookForm");
const cancelBtn = document.getElementById("cancelBtn");

// Open dialog
newBookBtn.addEventListener("click", () => {
  bookDialog.showModal();
});

// Cancel dialog
cancelBtn.addEventListener("click", () => {
  bookDialog.close();
});

// Handle form submission
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  bookForm.reset();
  bookDialog.close();
});

// Add some sample books (for testing)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
