// // Задание 1
// let stringJs = 'какая-то строка';

// stringJs = stringJs.toUpperCase();

// console.log(stringJs);

// // Задание 2
// function searchStart(arrayStrings, str) {

//     let strArrayFilter = arrayStrings.filter((arrayString) => arrayString.substring(0, str.length).toLowerCase() === str.toLowerCase());

//     return strArrayFilter;

// }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// // Задание 3
// const number = 32.58884;

// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));

// // Задание 4
// function minMaxNumber(numberArray) {

//     const min = Math.min(...numberArray);
//     const max = Math.max(...numberArray);

//     return `Наименьшее число ${min}, наибольшее число ${max}.`;
// }

// console.log(minMaxNumber([52, 53, 49, 77, 21, 32]));

// // Задание 5
// const randomNuber = () => Math.floor(Math.random() * 10) + 1;

// console.log(randomNuber());

// // Задание 6
// const getRandomArrNumbers = (number) => {

//     const randomArrNumbers = [];

//     for (let el; randomArrNumbers.length < Math.floor(number / 2);) {

//         el = Math.floor(Math.random() * (number + 1));

//         randomArrNumbers.push(el);
//     }

//     return randomArrNumbers;
//  } 

//  console.log(getRandomArrNumbers(7));
//  console.log(getRandomArrNumbers(12));

// // Задание 7
//  const getRandomFromNumbers = (num1, num2) => {

//     let max = Math.max(num1, num2);
//     let min = Math.min(num1, num2);

//     return Math.round(Math.random() * (max - min)) + min;
//  }

//  console.log(getRandomFromNumbers(5, 15));

// // Задание 8
// let todaysDate = new Date();

// console.log(todaysDate);

// // Задание 9
// let currentDate = new Date();
// let futureDate = new Date();

// futureDate.setDate(currentDate.getDate() + 73);

// console.log(futureDate);

// Задание 10
const dataRu = (data) => {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    return `Дата: ${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()} - это ${days[data.getDay()]}.

Время: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
}
console.log(dataRu(new Date()));