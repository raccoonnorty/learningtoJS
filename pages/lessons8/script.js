function showArgs() {
  // console.log('Передно аргументов:' + arguments.length);
  // console.log(arguments);
  // console.log(arguments.constructor.name);
  // console.log([1,2,3].constructor.name);

  return arguments.join(', '); //ошибка потому что arguments - обьект

  //ES5
  // let args = Array.prototype.slice.call(arguments);

  //ES6
  // let args = Array.form(arguments);
  let args = [...arguments]; //spread operator

  return args.join(', '); //теперь заработает, благодаря строке выше
}

// showArgs('foo', 'bar', 'hello');

//setTimeout

// setTimeout(function () {
//   alert('Прошла секунда!');
// }, 1000);

let car = {
  sayHello: function() {
    console.log('Поехали!');
  },

  start: function() {
    console.log('Заводимся...');
    // let self = this;

    //как вариант
    function sayHelloLetter() {
      this.sayHello();
    }

    sayHelloLetter = sayHelloLetter.bind(this);

    setTimeout(sayHelloLetter, 1000)
  }
}

car.start();

//try & catch
function calcBirthYear() {
  let age = prompt('press your age');
  let birthYear = new Date().getFullYear() - age;

  if (isNaN(birthYear)) {
    throw('Введено не числовое значение.');
  }
  else if (age !== null) {
    alert('Ваш год рождения: ' + birthYear);
  }
}
//
// try {
//   calcBirthYear();
// }
// catch (ex) {
//   alert('Такая вот ошибка, Господа.' + ex);
// }

//регулярные выражения
let phone = prompt('введите номер телефона');
let isValidPhone = /\d{3} \d{2} \d{2}/.test(phone); //для меня это как америку открыл))

if (isValidPhone) {
  alert('ty');
}
else {
  alert('errore');
}
