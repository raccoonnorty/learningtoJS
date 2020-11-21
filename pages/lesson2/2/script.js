let firstYear = prompt("Введите начальный год");
let secondYear = prompt("Введите конечный год");

if (firstYear > secondYear) {
  alert("Операция невозможна")
}

for (let i = firstYear; i <= secondYear; i++) {
  if (i % 4 == 0) {
    alert(i);
  }
}
