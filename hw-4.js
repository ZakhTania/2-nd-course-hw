// // Задание 1
// for (let i = 0; i < 2; i++) {
//     console.log(`Привет`);
// }

// // Задание 2
// for (let number = 1; number < 6; number++) {
//    console.log(number);
// 1   
// }

// // Задание 3
// for (let num = 7; num < 23; num++){
// console.log(num);
// }

// Задание 4
const obj = {
    Коля: `200`,
    Вася: `300`,
    Петя: `400`
}
for (let name in obj) {
    console.log(`${name} -  зарплата ${obj[name]} долларов`);
}