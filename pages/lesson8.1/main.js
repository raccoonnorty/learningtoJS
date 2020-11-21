function code() {
  'use strict';
  let pressCode = prompt('Введите кусок JS кода:');

  let tryCode = eval(pressCode);

  if (tryCode) {
    alert('Результат в консоле');
    console.log(tryCode);
  }
}

try {
  code();
}
catch (ex) {
  alert('Вот ошибка: ' + ex);
}

//Проверка программы
//let a = 'new var'; console.log(a);
//a = 'new var'; console.log(a);
