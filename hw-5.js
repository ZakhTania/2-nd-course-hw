// Задание 1
let maxNumber = (firstNumber, secondNumber) => {
    let max = firstNumber > secondNumber ? firstNumber : secondNumber;
    return max;
}
console.log(maxNumber(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`))));