const addBookBtn = document.querySelector('.btn-add');
const modalElement = document.querySelector('.modal');
const submitBtn = document.querySelector('.btn-submit');

addBookBtn.addEventListener(
  'click',
  () => (modalElement.style.visibility = 'visible')
);

submitBtn.addEventListener(
  'click',
  () => (modalElement.style.visibility = 'hidden')
);
