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
}

function addBookToLibrary(book) {
  console.log(book.bookTitle);
  console.log(book.authorName);
  console.log(book.noOfPages);
  console.log(book.hasRead);
}

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const bookTitle = document.querySelector('input:nth-child(2)').value;
  const authorName = document.querySelector('input:nth-child(3)').value;
  const noOfPages = document.querySelector('input:nth-child(4)').value;
  const hasRead = document.querySelector('.is-read > input');

  if (bookTitle.length == 0) return;
  if (authorName.length == 0) return;
  if (noOfPages.length == 0) return;

  modalElement.style.visibility = 'hidden';
  const book = new Book(bookTitle, authorName, noOfPages, hasRead.checked);
  addBookToLibrary(book);
});
