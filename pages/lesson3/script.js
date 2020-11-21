function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  }
  else {
    no();
  }
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  let random = getRandom(1, 1000);
  random = parseInt(random);
  console.log(random); //Для проверки

  while (true) {
    let num = prompt("Введите число");

    if (num == null) {
      alert("Жаль. До новых встреч");
      break;
    }
    else if (num == "") {
      alert("Вы ничего не ввели");
      ask("Попробуем ещё раз?", showOk, showCancel);
      break;
    }
    else if (num < random) {
      alert("Больше! Подсказка в консоле.");
    }
    else if (num > random) {
      alert("Меньше! Подсказка в консоле.");
    }
    else if (num == random) {
      alert("Правильно!");
      ask("Хотите ещё разок?", showOk, showCancel);
      break;
    }
    else {
      alert("Вы ввели не число");
      ask("Попробуем ещё раз?", showOk, showCancel);
      break;
    }
  }
}

function showOk() {
  startGame();
}

function showCancel() {
  alert("Ок. В другой раз");
}

ask("Поиграем?", showOk, showCancel);
