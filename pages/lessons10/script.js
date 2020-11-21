let edit = document.querySelector('.btn__edit');
let save = document.querySelector('.btn__save');
let cancel = document.querySelector('.btn__cancel');
let content = document.querySelector('.container__content');
// localStorage.clear();

edit.addEventListener('click', function() {
  content.setAttribute('contenteditable', 'true');
  edit.setAttribute('disabled', 'true');
  save.removeAttribute('disabled');
  cancel.removeAttribute('disabled');
});

save.addEventListener('click', function() {
  content.removeAttribute('contenteditable');
  localStorage.setItem('newValue', content.innerHTML)
  edit.removeAttribute('disabled');
  save.setAttribute('disabled', 'true');
  cancel.setAttribute('disabled', 'true');
});

cancel.addEventListener('click', function() {
  content.removeAttribute('contenteditable');
  content.textContent = localStorage.getItem('newValue');
  edit.removeAttribute('disabled');
  save.setAttribute('disabled', 'true');
  cancel.setAttribute('disabled', 'true');
});
