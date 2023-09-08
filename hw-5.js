// Задание 1
let maxNumber = (firstNumber, secondNumber) => {
    let max = firstNumber > secondNumber ? firstNumber : secondNumber;
    return max;
}
console.log(maxNumber(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`))));

// Задание 2
let num;
let evenOrodd = (num) => {
    num = num % 2 === 0 ? `Число четное` : 'Число нечетное';
    return num;
}
console.log(evenOrodd(8));

// Задание 3
// 3.1.
let squareOfnum = (anyNumber) => {
    let sqr = anyNumber * anyNumber;
    console.log(`Квадрат чила ${anyNumber} равен ${sqr}`);
}
squareOfnum(8);

// 3.2.
let sqrFnmbr = (nmbr) => nmbr *nmbr;
sqrFnmbr(5);

// Задание 4
let greeting = () => {
    let howOld = Number(prompt(`Сколько Вам лет?`));
    if (howOld < 0) {
        howOld = `Вы ввели неправильное значение`;
    } else {
        howOld = howOld < 13 ? `Привет, друг!` : `Добро пожаловать!`;
    }
    alert(howOld);
}

// Задание 5
let multTwoNum = () => {
    let a = prompt(`Введите первое число`);
    let b = prompt(`Введите второе число`);
    let result;
    if (!isNaN(a) && !isNaN(b)) {
        result = a * b;
    } else {
        result = 'Одно или оба значения не являются числом';
    }
    return result;
}
console.log(multTwoNum());

// Задание 6
let n = prompt(`Введите число`);
let result;
let cubicN = () => {
    if (!isNaN(n) && n != '' && n != null) {
        let cube = n * n * n;
        result = `${n} в кубе равняется ${cube}`
    } else {
        result = `Переданный параметр не является числом`;
    }
    return result;
}
console.log(cubicN());

// Задание 7
function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

// Задание 8
let seasons = () => {
    let month;
    let output;
    let play;
    do {
        month = Number(prompt(`Введите номер месяца (от 1 до 12)`))
        if (month > 0 && month < 13) {
            if (month === 1 || month === 2 || month === 12) {
                output = `Зима`;
            } else if (month === 3 || month === 4 || month === 5) {
                output = `Весна`;
            } else if (month === 6 || month === 7 || month === 8) {
                output = `Лето`;
            } else if (month === 9 || month === 10 || month === 11) {
                output = `Осень`;
            }
        } else {
            output = `Неверно введен номер месяца`
        }
        alert(output);
        play = confirm(`Повторить?`)
    } while (play === true);
}