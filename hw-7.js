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

// Задание 4
function minMaxNumber(numberArray) {

    const min = Math.min(...numberArray);
    const max = Math.max(...numberArray);

    return `Наименьшее число ${min}, наибольшее число ${max}.`;
}

console.log(minMaxNumber([52, 53, 49, 77, 21, 32]));