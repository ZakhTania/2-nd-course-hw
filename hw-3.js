// Задание 1
let password = 'пароль';
let verification = prompt(`Введите пароль`);
if (password === verification) {
    alert(`Пароль введен верно`);
} else {
    alert(`Пароль введен неправильно`);
};

// Задание 2
let c = Number(prompt(`Запишите любое число`));
if (c > 0 && c < 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
};

// Задание 3
let d = 45;
let e = 101;
if (d > 100 || e > 100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
};

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = Number(prompt(`Введите номер месяца`));
if (monthNumber > 0 && monthNumber < 13) {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            console.log(`Зима`);
            break;
        case 3:
        case 4:
        case 5:
            console.log(`Весна`);
            break;
        case 6:
        case 7:
        case 8:
            console.log(`Лето`);
            break;
        case 9:
        case 10:
        case 11:
            console.log(`Осень`);
            break;
        default:
            break;
    }
} else {
    console.log(`Некорректное число`);
};

// Задание 7
let anyNumber = prompt(`Пожалуйста, введите любое число`);
if (!isNaN(anyNumber) && anyNumber.trim() != '' && anyNumber !== null) {
    let result = anyNumber % 2 === 0 ? `Число четное` : `Число нечетное`;
    alert(result);
} else {
    alert(`Некорректное число`)
};

// Задание 8
let clientOS = confirm(`Используете Android?`)
if (clientOS) {
    alert(`Установите версию приложения для Android по ссылке`);
} else {
    alert(`Установите версию приложения для iOS по ссылке`);
};

// // Альтернативный способ
// alert(`Установите версию приложения для ${ clientOS ? `Android` : `iOS`}  по ссылке`);

// Задание 9
let clientDeviceOS = confirm(`Используете Android?`)
let clientDeviceYear = confirm(`Ваш телефон произведен после 2014 года?`)
if (clientDeviceOS) {
    if (clientDeviceYear) {
        alert(`Установите версию приложения для Android по ссылке`);
    } else {
        alert(`Установите облегченную версию приложения для Android по ссылке`);
    }
} else {
    if (clientDeviceYear) {
        alert(`Установите версию приложения для iOS по ссылке`);
    } else {
        alert(`Установите облегченную версию приложения для iOS по ссылке`);
    }
}

// // Альтернативный способ
// alert(`Установите ${ clientDeviceYear ? `` : `облегченную`} версию приложения для ${ clientDeviceOS ? `Android` : `iOS`} по ссылке`);