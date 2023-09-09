// // Задание 1
const arrayOfnumber = [1, 5, 4, 10, 0, 3];

for (let item of arrayOfnumber) {
    console.log(item);

    if (item === 10) {
        break;
    }
}

// Задание 2
console.log(`Позиция числа 4 в данном массиве -  [${arrayOfnumber.indexOf(4)}].`);

// Задание 3
const anyArray = [1, 3, 5, 10, 20];

console.log(anyArray.join([' ']));

// Задание 4
let multiArr = [];
let simpleArr = [];

while (multiArr.length < 3) {

    while (simpleArr.length < 3) {
        simpleArr.push(1);
    }

    multiArr.push(simpleArr);
}
console.log(multiArr);

// Задание 5
const ar = [1, 1, 1];

while (ar.length < 6) {

    ar.push(2);
}

console.log(ar);

// Задание 6
const unsortArray = [9, 8, 7, 'a', 6, 5];

unsortArray.sort();

unsortArray.pop()

console.log(unsortArray);

//  Задание 7

let numb = Number(prompt(`Введите цифру от 1 до 9`));
let answ;

for (let i = 0; i < unsortArray.length; i++) {

    if (unsortArray[i] == numb) {
        answ = `Угадал`;
        break;

    } else {
        answ = `Не угадал`;
    }
}

alert(answ);

// Задание 8
const str = 'abcdef';

let strArr = str.split('');

strArr = strArr.reverse();

console.log(strArr.join(''));

// Задание 9
const arrayNum = [[1, 2, 3,], [4, 5, 6]];
let nextArr = [];

nextArr = nextArr.concat(arrayNum[0], arrayNum[1]);

console.log(nextArr);

//  Задание 10
const sumArr = [2, 4, 8, 1, 6, 5, 9];

for (let each = 0; each < sumArr.length - 1; each++) {

    console.log(sumArr[each] + sumArr[each + 1]);
}

// Задание 11
console.log(sumArr);

const newSumArr = sumArr.map(el => el * el);

console.log(newSumArr);
