// // 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle_area (a, b) {
//     let result = a * b;
//     console.log(result);
// }
//
// rectangle_area (5, 10);

// // 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// // S = π ⋅ r 2.
// function circle_area (p, r){
//     let result = p * r ** 2;
//     console.log(result);
// }
// circle_area (3.14, 3);

// // 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// //     S = 2 π R h
// function cylinder_area (p, r, h){
//     let result = 2 * p * r * h;
//     console.log(result);
// }
// cylinder_area(3.14, 5, 12);

// // 4 - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [15, 55, -14, 44, 125, 150];
// function arrLine (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log (arr[i]);
//     }
// }
// arrLine(arr);

// // 4 - (з for of) - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [15, 55, -14, 44, 125, 150];
// function arrLine (arr) {
//     for (const arrayElement of arr) {  // arrayElement елемент з масиву
//         console.log(arrayElement);
//     }
// }
// arrLine(arr);

// // 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function pText (text){
//     document.write(`<p>${text}</p>`);
// }
// pText('Усім привіт! Все як завжди. Зустрінемось на лекції!)');

// // 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function textUl (text){
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// textUl('Ура! Вихідні!!!');

// // 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// Функція, яка дає змогу вивести текст стільки разів, скільки захочеш.
//  function textUl (text, size){
//      document.write(`<ul>`);
//      for (let i = 0; i < size; i++) {
//          document.write(`<li>${text}</li>`);
//      }
//      document.write(`</ul>`);
//  }
//
// textUl('Свято наближається!!! Будем святкувати!', 3);


// // 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = ['Hello!', 'We are already here', 'Let`s meet at 5pm', false, true];
// function elemList (arr){
//     document.write(`<ul>`);
//     for (const arrayElement of arr) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// elemList(arr);

// // 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {id: 1, name: 'Vasiatko', age: 33},
//     {id: 2, name: 'Tacker', age: 45},
//     {id: 3, name: 'Zick', age: 15},
//     {id: 4, name: 'Niki', age: 25},
//     {id: 5, name: 'Loren', age: 27},
//     {id: 6, name: 'Victoriia', age: 35}
// ];
// function baseInfo (arr){
//     for (const personElement of arr) {
//         document.write(`<div>${personElement.id} - ${personElement.name} - ${personElement.age}</div>`)
//     }
// }
// baseInfo(arr);