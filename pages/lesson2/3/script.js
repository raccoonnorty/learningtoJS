let num;
let numReturn;
let sum = 0;

while (true) {
  num = prompt("Введите число");

  if (num == null) {
    alert("Сумма чисел: " + sum);
    break;
  }
  else if (isNaN(num)) {
    alert("Вы ввели не число");
    numReturn = prompt("Попробуем ещё раз");
    num = numReturn;
    sum += Number(num);
  }
  else if (num == "") {
    alert("Вы ничего не ввели");
    numReturn = prompt("Попробуем ещё раз");
    num = numReturn;
    sum += Number(num);
  }
  else {
    sum += Number(num);
  }
}
