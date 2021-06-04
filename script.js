'use strict';

function getNum() {
    let num = +prompt('Угадай число от 1 до 100');
    console.log(num);

    let x = 64;

    if (num > x) {
        alert('Загаданное число меньше');
        getNum();
    }

    if (num < x) {
        alert('Загаданное число больше');
        getNum();
    }

    if (isNaN(num)) {
        alert('Введи число!');
        getNum();
    }
    if (num === null) {
        alert('Игра окончена');
    }

    if (num === x) {
        alert('Поздравляю, Вы угадали!!!');
    }
}
console.log(getNum());