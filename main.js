const addBookBtn = document.querySelector('.btn-add');
const modalElement = document.querySelector('.modal');
const submitBtn = document.querySelector('.btn-submit');

addBookBtn.addEventListener(
  'click',
  () => (modalElement.style.visibility = 'visible')
);

// Library

const myLibrary = [];

function Book(bookTitle, authorName, noOfPages, hasRead) {
  this.bookTitle = bookTitle;
  this.authorName = authorName;
  this.noOfPages = noOfPages;
  this.hasRead = hasRead;

  this.info = function () {
    return `${this.bookTitle} by ${this.authorName}, ${this.noOfPages} pages`;
  };
}

function addBookToLibrary(book) {
  const bookGrid = document.querySelector('.books-grid');

  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const buttonGrp = document.createElement('div');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  readBtn.textContent = `${book.hasRead ? 'Read' : 'Not Read'}`;

  bookGrid.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);

  buttonGrp.appendChild(readBtn);
  buttonGrp.appendChild(removeBtn);
  bookCard.appendChild(buttonGrp);

  console.log(book.hasRead);
}

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const bookTitle = document.querySelector('input:nth-child(2)');
  const authorName = document.querySelector('input:nth-child(3)');
  const noOfPages = document.querySelector('input:nth-child(4)');
  const hasRead = document.querySelector('.is-read > input');

  if (bookTitle.value.length == 0) return;
  if (authorName.value.length == 0) return;
  if (noOfPages.value.length == 0) return;

  modalElement.style.visibility = 'hidden';
  const book = new Book(
    bookTitle.value,
    authorName.value,
    noOfPages.value,
    hasRead.checked
  );

  addBookToLibrary(book);
  bookTitle.value = authorName.value = noOfPages.value = '';
  hasRead.checked = false;
});
