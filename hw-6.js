// // Задание 1
const arrayOfnumber = [1, 5, 4, 10, 0, 3];
for (let el = 0; el < arrayOfnumber.length; el++) {
    console.log(arrayOfnumber[el]);
    if (arrayOfnumber[el] === 10) {
        break;
    }
}

// Задание 2
console.log(`Позиция числа 4 в данном массиве -  [${arrayOfnumber.indexOf(4)}].`);
