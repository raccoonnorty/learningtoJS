(function() {
  window.startGame = function() {

    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let random = getRandom(1, 1000);
    random = parseInt(random);
    console.log(random); //Для проверки


    let i = 1;

    while (i < 11) {
      let num = prompt("Введите число");


      if (num == null) {
        alert("Жаль. До новых встреч");
        break;
      }
      else if (num == "") {
        alert("Вы ничего не ввели.");
        ask("Попробуем ещё раз?", showOk, showCancel);
        break;
      }
      else if (num < random) {
        alert("Больше! Попытка: " + i + " из 10. Подсказка в консоле.");
      }
      else if (num > random) {
        alert("Меньше! Попытка: " + i + " из 10. Подсказка в консоле.");
      }
      else if (num == random) {
        alert("Правильно!");
        ask("Хотите ещё разок?", showOk, showCancel);
        break;
      }
      else {
        alert("Вы ввели не число.");
        ask("Попробуем ещё раз?", showOk, showCancel);
        break;
      }
      i++;
      if (i > 10) {
        alert("Ваши попытки закончились.");
        ask("Попробуем ещё раз?", showOk, showCancel);
      }
    }
  }
})()
