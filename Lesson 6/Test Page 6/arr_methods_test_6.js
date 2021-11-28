// let arr = [22, 33, 'vasia', 'Kuzia', {name: 'pineapple'}];
// console.log(Array.isArray(arr));  // вказує чи arr є масивом;
// console.log(arr);
//
// arr.push('new value', 555); //додає нові елементи до масиву
// let number = arr.push('apple', 777); // таким чином додає нові елементи і ще вказує довжину масиву
// console.log(arr, number);
//
// let numberLength = arr.push('something');
// console.log(arr, numberLength);
// let popLength = arr.pop(); // . pop - прибирає потрібний масив. В даному випадку забрано елемент 'something'
// console.log(popLength);
//
// arr.unshift(111); // unshift додає елементи на початок
// console.log(arr);
//
// arr.shift(); // shift видаляє перший елемент
// console.log(arr);
//
// let concat = arr.concat([888, 'Nafania']); // concat - додає масив до існуючого
// console.log(concat);
//
// let join = arr.join('-'); // з'єднує даний масив між собою через '-'
// console.log(join);
//
// let reverse = arr.reverse();
// console.log(arr);
//
// let indexOf = arr.indexOf('new value'); // знайти індекс певного елементу в масиві. В даному випадку 'new value'
// console.log(indexOf);
//
// let slice = arr.slice(1,4);
// console.log(slice); // вирізає н-д з 1го по 5й елементи; виводить на екран вирізані елементи
//
// let splice = arr.splice(2,3, 'aaa', 'xxx');
// console.log(splice); // вирізає з 2го елемента далі 3 наступних елемента; виводить на екран вирізані елементи
// console.log(arr); // замість цих вирізаних елементів можна вставити нові 'aaa', 'xxx' (35 строка)

// //    =================== Функції ====================
// let arr = [22, 33, 'vasia', 'Kuzia', {name: 'pineapple'}];
// arr.forEach(function (arrayItem) {     // ф-я являється колбеком, може приймати до 3х аргументів
//     console.log(arrayItem);
// });

// let arr = [22, 33, 'vasia', 'Kuzia', {name: 'pineapple'}];
// arr.forEach((item, index) => {        // ф-я являється колбеком, може приймати до 3х аргументів
//     console.log(item, index);                          // 3тім елементом можна добавити arr в 46 строку;
// })
// let arr = [22, 33, 'vasia', 777, 'Kuzia', {name: 'pineapple'}];
// arr.forEach((item ) => {
//     if (typeof item === 'number')  // виводяться дише числа за умовою
//     console.log(item);
// })

let arr = [22, 33, 'vasia', 777, 'Kuzia', {name: 'pineapple'}];
let map = arr.map(value => { // map бере поточний об'єкт і змінює його стан. При потребі можна додати новий елемент, Н-д '!'
    return value + '!';
});
console.log(map);