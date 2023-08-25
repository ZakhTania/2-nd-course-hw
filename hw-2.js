
// Задание 1 
let x = 20;
alert(x);

// Задание 2
let yearFirstIphone = 2007;
alert(`Год выпуска первого iPhone ${yearFirstIphone}`);

// Задание 3
let creatorsName = 'Brendan Eich'
alert(creatorsName);

// Задание 4
let firstNum = 10;
let secondNum = 2;
alert(`a + b = ${firstNum + secondNum};
a - b = ${firstNum - secondNum};
a * b = ${firstNum * secondNum};
a / b = ${firstNum / secondNum}.`);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
let a = 9;
let b = 2;
alert(a % b);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = prompt(`Сколько вам лет?`);
alert(age);

// Задание 9
let user = {
    name: 'Tanya',
    age: 34,
    isAdmin: false
};
user['city of residence'] = 'Orel';
user.age = 35;
delete user['city of residence'];
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert(user[info]);

// Задание 10
let userName = prompt(`Как вас зовут?`);
alert(`Привет, ${userName}!`);


