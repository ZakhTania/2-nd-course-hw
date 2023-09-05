// // Задание 1
// let maxNumber = (firstNumber, secondNumber) => {
//     let max = firstNumber > secondNumber ? firstNumber : secondNumber;
//     return max;
// }
// console.log(maxNumber(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`))));

// Задание 2
let num;
let evenOrodd = () => {
    do {
        num = prompt(`Введите число`);
    } while (isNaN(num));
    num = Number(num) % 2 === 0 ? `Число четное` : 'Число нечетное';
    return num;
}
console.log(evenOrodd());