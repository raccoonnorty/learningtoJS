document
  .querySelector('.col-buttons')
  .addEventListener('click', function(ev) {
    // console.log(ev.target);
    if (ev.target.tagName === 'BUTTON') {
      alert(ev.target.textContent);
    }
  })













// let btn1 = document.querySelector('.button-1');
// let btn2 = document.querySelector('.button-2');
// let link = document.querySelector('.link');
//
// btn1.addEventListener('click', function() {
//   alert('Нажата кнопка');
// });
//
// function onClickBtn2() {
//   alert('Нажата кнопка 2');
//   btn2.removeEventListener('click', onClickBtn2);
// }
//
// btn2.addEventListener('click', onClickBtn2);
//
// link.addEventListener('click', function(e) {
//   e.preventDefault(); //чтобы ссылка перестала работать
//   console.log(e);
// });
//
// let textarea = document.querySelector('textarea');
// let keyCode = document.querySelector('.key-code');
// textarea.addEventListener('keydown', function(e) {
//   if (e.keyCode == 13) {
//     e.preventDefault();
//     keyCode.innerHTML = 'error';
//   }
//   else {
//     keyCode.innerHTML = 'Код нажатой кнопки: ' + e.keyCode;
//   }
// });
//
// let coords = document.querySelector('.col-coords');
// let coordsText = coords.textContent;
// coords.addEventListener('mousedown', function() {
//   console.log('mousedown');
// });
// coords.addEventListener('mouseup', function() {
//   console.log('mouseup');
// });

// coords.addEventListener('mouseover', function() {
//   console.log('mouseover');
// });
// coords.addEventListener('mouseout', function() {
//   coords.textContent = coordsText;
// });
// coords.addEventListener('mousemove', function(ev) {
//   coords.textContent = ev.screenX + ',' + ev.screenY;
// });
