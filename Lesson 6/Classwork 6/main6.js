// // - Дано список імен.
// //      let n1 = 'Harry..Potter'
// //      let n2 = 'Ron---Whisley'
// //      let n3 = 'Hermione__Granger'
// //  Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// //      let n1 = 'Harry Potter'
// //      let n2 = 'Ron Whisley'
// //      let n3 = 'Hermione Granger'
//===========================================
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let name = (string, symbol) => {
//     let arr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) arr.push(item);
//         })
//         console.log(arr.join(' '))
//     }
// }
// name(n1, '..');
// name(n2, '---');
// name(n3, '__');

// //     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomNum = (length, size) => {
//     let Arr = [];
//     for (let i=0; i<length; i++){
//         Arr.push(Math.round(Math.random() * size));
//     }
//     return Arr;
// }
//
// console.log(randomNum(20, 100));


// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// // Відсортувати його за допомоги sort
//
// let randomNum = (length, size) => {
//     let Arr = [];
//     for (let i=0; i<length; i++){
//         Arr.push(Math.round(Math.random() * size));
//     }
//     return Arr;
// }
// let arrSort = randomNum(20, 100)
// arrSort.sort ((a,b) => a - b);
// // arrSort.sort ((a,b) => b - a); //сортує в зворотньому напрямку
//
// console.log(arrSort);


// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// //   Відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomNum = (length, size) => {
//     let Arr = [];
//     for (let i = 0; i < length; i++) {
//         Arr.push(Math.round(Math.random() * size));
//     }
//     return Arr;
// }
// let arrFilterEvenNum = randomNum(20, 100);
// arrFilterEvenNum = arrFilterEvenNum.filter(value => value % 2 === 0);
// console.log(arrFilterEvenNum);


// // - Створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// //   За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let randomNum = (length, randDiapason) => {
// let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random()* randDiapason));
//     }
//     return arr.map(value => value.toString());
// }
// console.log(randomNum(10, 100));


// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
//
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') return arr.sort((a, b) => a - b);
//     if (direction === 'descending') return arr.sort((a, b) => b - a);
// };
// console.log(sortNums([11, 21, 33, 12, 14, 55], 'ascending'));
// console.log(sortNums([11, 21, 33, 12, 14, 55], 'descending'));


// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// //coursesAndDurationArray.sort((a,b)=> a.monthDuration-b.monthDuration)
// console.log(coursesAndDurationArray.sort((a,b)=> b.monthDuration-a.monthDuration));
// //-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));