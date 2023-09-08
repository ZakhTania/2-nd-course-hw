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