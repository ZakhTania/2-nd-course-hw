// Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

const sortByField = (fieldName) => {
   return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

console.log(people.sort(sortByField('age')));

//   Задание 2
function isPositive(el) {

   return el > 0 ? true : false;
}
function isMale(i) {

   return i['gender'] === 'male' ? true : false;
}
function filter(arr, ruleFunction) {
   const output = [];

   for (let i = 0; i < arr.length; i++) {

      if (ruleFunction(arr[i])) {
         output.push(arr[i]);
      }
   }

   return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const peopleGender = [
   { name: 'Глеб', gender: 'male' },
   { name: 'Анна', gender: 'female' },
   { name: 'Олег', gender: 'male' },
   { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleGender, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3
const timer = (deadline) => {

	const interval = setInterval(() => {
		console.log(new Date());
	}, 3 *1000);


	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, deadline * 1000)
};

timer(30);

// Задание 4
function delayForSecond(callback) {

   setTimeout(() => {
        callback();
        }, 1000)
   
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})