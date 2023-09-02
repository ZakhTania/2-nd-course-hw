// Задание 1
for (let i = 0; i < 2; i++) {
    console.log(`Привет`);
}

// Задание 2
for (let number = 1; number < 6; number++) {
   console.log(number);
1   
}

// Задание 3
for (let count = 7; count < 23; count++){
console.log(count);
}

// Задание 4
const obj = {
    Коля: `200`,
    Вася: `300`,
    Петя: `400`
}
for (let name in obj) {
    console.log(`${name} -  зарплата ${obj[name]} долларов`);
}

// Задание 5
let num = 0;
let n = 1000;
do {
    n /= 2;
    num++
} while (n > 50);
console.log(`Получившееся число ${n}, необходимое количество итераций ${num}`);

// Задание 6
for (let friday = 4; friday <=31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}