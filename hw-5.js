// // Задание 1
// let maxNumber = (firstNumber, secondNumber) => {
//     let max = firstNumber > secondNumber ? firstNumber : secondNumber;
//     return max;
// }
// console.log(maxNumber(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`))));

// // Задание 2
// let num;
// let evenOrodd = () => {
//     do {
//         num = prompt(`Введите число`);
//     } while (isNaN(num));
//     num = Number(num) % 2 === 0 ? `Число четное` : 'Число нечетное';
//     return num;
// }
// console.log(evenOrodd());

// // Задание 3
// // 3.1.
// let squareOfnum = (anyNumber) => {
//     let sqr = anyNumber * anyNumber;
//     console.log(`Квадрат чила ${anyNumber} равен ${sqr}`);
// }
// squareOfnum(8);

// // 3.2.
// let sqrFnmbr = (nmbr) => nmbr *nmbr;

// // Задание 4
// let greeting = () => {
//     let howOld = Number(prompt(`Сколько Вам лет?`));
//     if (howOld < 0) {
//         howOld = `Вы ввели неправильное значение`;
//     } else {
//         howOld = howOld < 13 ? `Привет, друг!` : `Добро пожаловать!`;
//     }
//     alert(howOld);
// }
// console.log(greeting());

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