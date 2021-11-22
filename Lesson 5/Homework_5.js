// Всі функції повинні бути описані стрілочним типом!!!!

// // - створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectangle_area = (a,b) => a*b;
// console.log(rectangle_area(10, 20));
//
// // - створити функцію яка обчислює та повертає площу кола

// let circle_area = (p, r) => p * r ** 2;
// console.log(circle_area(3.14, 3));

// // - створити функцію яка обчислює та повертає площу циліндру

// let cylinder_area = (p,r,h) => 2 * p * r * h;
// console.log(cylinder_area(3.14, 5, 12));

// // - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = (...a) => a;
// console.log(arr(15, -17, 3, 11, 22, 'Hello', 'Okten'));
// document.write(arr(15, -17, 3, 11, 22, 'Hello', 'Okten'));


// // - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let text = () => document.write(`<p>${'Hello everyone! I am so happy to see you!'}</p>`);
//
// text();

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let text2 = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//     text2('How are you doing? Are we having a lesson today?');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let text3 = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// text3('Yes, we have. I am waiting for it.', 3);


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = (...a) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < a.length; i++){
//         document.write(`<li>${a[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// arr(`Ukraine`,  12.00, true, `Poland`, 14.00, false, 'Spain', 18, true, 'German', 20, false);


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// //   Для кожного об'єкту окремий блок.
//
// let users = [
//     {id: 1, name:' Vasia', age: 32},
//     {id: 2, name:' Masha', age: 20},
//     {id: 3, name: ' Den', age: 41},
//     {id: 4, name: ' Jonh', age: 18},
//     {id: 5, name: ' Kate', age: 28}
// ];
// let user = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}.${arrElement.name} - ${arrElement.age}</div>`);
//     }
// }
// user(users);