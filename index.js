//Задание 1
function Calculator() {
  this.read = function () {
    this.a = +prompt("Введите 1 число");
    this.b = +prompt("Введите 2 число");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());



//Задание 2
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value =
      this.value +
      +prompt("Введите сколько нужно прибавить к текущему значению");
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);



// Доп.задание
function TextFormat() {
  this.text = "";
  this.listSymbols = ["/", "*", "_"];
  this.getText = function () {
    this.text = prompt("Введите текст");
  };
  this.check = function () {
    let found = false;
    for (i = 0; i < this.listSymbols.length; i++) {
      if (this.text.includes(this.listSymbols[i])) {
        found = true;
      }
      continue;
    }
    return found;
  };
  this.add = function () {
    this.startText = prompt("Введите текст который нужо вставить в начале");
    this.middleText = prompt("Введите текст который нужо вставить в середине");
    this.endText = prompt("Введите текст который нужо вставить в конце");
    this.middleText =
      this.text.slice(0, this.text.length / 2) +
      this.middleText +
      this.text.slice(this.text.length / 2);
    this.text = this.startText + this.middleText + this.endText;
    return this.text;
  };
}
let formatText = new TextFormat();
formatText.getText();
console.log(formatText.check());
console.log(formatText.add());
