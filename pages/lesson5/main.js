function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  }
  else {
    no();
  }
}

function showOk() {
  startGame();
}

function showCancel() {
  alert("Ок. В другой раз");
}

ask("Поиграем?", showOk, showCancel);
