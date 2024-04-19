const addBookBtn = document.querySelector('.btn-add');
const modalElement = document.querySelector('.modal');
const submitBtn = document.querySelector('.btn-submit');

addBookBtn.addEventListener(
  'click',
  () => (modalElement.style.visibility = 'visible')
);

submitBtn.addEventListener('click', function () {
  if (document.querySelector('input:nth-child(2)').textContent.length == 0)
    return;
  if (document.querySelector('input:nth-child(3)').textContent.length == 0)
    return;
  if (document.querySelector('input:nth-child(4)').textContent.length == 0)
    return;

  modalElement.style.visibility = 'hidden';
});
