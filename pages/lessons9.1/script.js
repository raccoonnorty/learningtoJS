let line = document.querySelector('.list__item');
let btn = document.querySelector('button');
let ol = document.querySelector('.list');


ol.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('line-through');
  }
});

btn.addEventListener('click', function() {
  let val = document.querySelector('input').value;
  if (val === '') {
    alert('Вы ничего не ввели.');
  }
  else {
    ol.insertAdjacentHTML('beforeend', `<li class='list__item'>${val}</li>`);
    val = document.querySelector('input').value = '';
  }
});

window.addEventListener('scroll', function() {
  let two = document.querySelector('.two');
  if (window.scrollY === 70) {
    two.classList.toggle('show');
  }
});
