// // Задание 1
// let stringJs = 'какая-то строка';

// stringJs = stringJs.toUpperCase();

// console.log(stringJs);

// // Задание 2
// function searchStart(arrayStrings, str) {

//     let strArrayFilter = arrayStrings.filter((arrayString) => arrayString.toLowerCase().startsWith(str.toLowerCase()));

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

//     for (let i = 0; i < Math.floor(number / 2); i++) {

//        let el = Math.floor(Math.random() * (number + 1));

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

//     return Math.floor(Math.random() * (max - min + 1)) + min;
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

// // Задание 10
// const dataRu = (data) => {

// const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
// const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

// let getDate = data.getDate();
// if (getDate < 10 ) {
//   getDate = '0' + data.getDate();
// }

// let getHours = data.getHours();
// if (getHours < 10 ) {
//   getHours = '0' + data.getHours();
// }

// let getMinutes = data.getMinutes();
// if (getMinutes < 10 ) {
//   getMinutes = '0' + data.getMinutes();
// }

// let getSeconds = data.getSeconds();
// if (getSeconds < 10 ) {
//   getSeconds = '0' + data.getSeconds();
// }

// return `Дата: ${getDate} ${month[data.getMonth()]} ${data.getFullYear()} - это ${days[data.getDay()]}.
// Время: ${getHours}:${getMinutes}:${getSeconds}`

// }

// console.log(dataRu(new Date(1682989448000)));

// Задание 11
const rememberWord = () => {

  let fruitsList = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  fruitsList = fruitsList.sort(() => Math.random() - 0.5);

  let usersFruit = fruitsList.map(el => {
    if (fruitsList.indexOf(el) === 0) {

      return el;
    }
    return el.toLowerCase();
  })

  alert(usersFruit.join(', ') + ".");

  let firstItem = prompt(`Какой фрукт был первым?`);
  let lastItem = prompt(`Какой фрукт был последним?`);

  const kindOfFruit = () => {
    if (firstItem === null || lastItem === null) {
      return `Ой, что-то пошло не так!`
    }

    if (fruitsList[0].toLowerCase() === firstItem.toLocaleLowerCase() && fruitsList[fruitsList.length - 1].toLowerCase() === lastItem.toLocaleLowerCase()) {

      return `Поздравляю, вы выиграли!`;
    }

    if (fruitsList[0].toLowerCase() === firstItem.toLocaleLowerCase() || fruitsList[fruitsList.length - 1].toLowerCase() === lastItem.toLocaleLowerCase()) {

      return `Вы были близки к победе!`;
    }

    if (fruitsList[0].toLowerCase() !== firstItem.toLocaleLowerCase() && fruitsList[fruitsList.length - 1].toLowerCase() !== lastItem.toLocaleLowerCase()) {

      return `Очень жаль, вы ответили неверно!`;
    }
  }

  return alert(kindOfFruit());
}