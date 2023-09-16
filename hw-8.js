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
 