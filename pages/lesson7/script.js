//транспортное средство
//было лень придумывать новые названия для переменных
function Transport(enige, wheel, window, body) {
  this.enige = enige;
  this.wheel = wheel;
  this.window = window;
  this.body = body;

  this.getFullMessage = function() {
    return this.enige + ' '
    + this.wheel + ' '
    + this.window + ' '
    + this.body;
  }
}

//автомобили
function Auto(enige, wheel, window, body) {
  Transport.apply(this, arguments);

  this.arg1 = 'anotherD';
  this.arg2 = 'anotherD2';
  this.arg3 = 'anotherD3';

  this.otherDetails = function() {
    return this.arg1 + ' '
    + this.arg2 + ' '
    + this.arg3;
  }
}

//корабли
function Ship(enige, wheel, window, body) {
  Auto.apply(this, arguments);

  this.arg4 = 'anotherD4';
  this.arg5 = 'anotherD5';
  this.arg6 = 'anotherD6';

  this.otherDetailsForShip = function() {
    return this.arg4 + ' '
    + this.arg5 + ' '
    + this.arg6;
  }
}

//самолеты
function Plane(enige, wheel, window, body) {
  Ship.apply(this, arguments);

  this.arg7 = 'another7';
  this.arg8 = 'anotherD8';
  this.arg9 = 'anotherD9';

  this.otherDetailsForPlane = function() {
    return this.arg7 + ' '
    + this.arg8 + ' '
    + this.arg9;
  }
}

let t = new Transport(1, 2, 3, 4);
let a = new Auto(1, 2, 3, 4);
let s = new Ship(1, 2, 3, 4);
let p = new Plane(1, 2, 3, 4);
