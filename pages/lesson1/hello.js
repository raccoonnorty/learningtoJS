var myName = prompt('Как Вас зовут?');
var mySureName = prompt('Введите свою фамилию');
var myBirthYear = prompt('Веедите Ваш год рождения');

var currentYear = 2020;
var age = currentYear - myBirthYear;

if (age < 20) {
  alert('Привет, ' + myName + ' ' + mySureName + '!');
}
else if (age >= 20 && age < 40) {
  alert('Добрый день, ' + myName + ' ' + mySureName + '!');
}
else {
  alert('Здравствуйте, ' + myName + ' ' + mySureName + '!');
}
