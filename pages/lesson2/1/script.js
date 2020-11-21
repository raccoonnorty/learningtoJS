let firstNumber = prompt("Введите первое число");
let secondNumber;
let firstNumberReturn;
let secondNumberReturn;

if (isNaN(firstNumber)) {
  alert("Вы ввели не число");
  firstNumberReturn = prompt("Попробуем ещё раз");
  firstNumber = firstNumberReturn;
  secondNumber = prompt("Отлично. Введите второе число");
}
else {
  secondNumber = prompt("Введите второе число");
}

if (isNaN(secondNumber)) {
  alert("Вы ввели не число");
  secondNumberReturn = prompt("Попробуем ещё раз");
  secondNumber = secondNumberReturn;
}

if (firstNumber < secondNumber) {
  alert("Первое число меньше второго");
}
else if (firstNumber > secondNumber) {
  alert("Первое число больше второго");
}
else if (firstNumber = secondNumber) {
  alert("Числа равны");
}
else {
  alert("Вы ничего не ввели");
}
