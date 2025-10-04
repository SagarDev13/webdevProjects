const myLibrary = [];
let title, author, pages, read;

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let book = new Book();
    myLibrary.push(book);
    displayBook();
}

const dialog = document.querySelector("dialog");
const form = 

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
     title = form.elements["title"].value;
     author = form.elements["author"].value;
     pages = form.elements["pages"].value;
     read = form.elements["read"].value;
     addBookToLibrary();
});

document.querySelector(".add-book-btn").addEventListener("click", () => {
    dialog.showModal();
});

document.querySelector(".cancel-btn").addEventListener("click", () => {
    dialog.close();
});

function displayBook() {
    const displayBook = document.querySelector(".display-book");
    displayBook.innerHTML = "";
    forEach(book) => {
        const card = document.createElement("div");
        card.classList.add("card");

    }
    displayBook.classList.add("card");
    document.createElement("p");

}