//  // --створити масив з:
// // - з 5 числових значень
// let numbers = [11, 22, 33, 44, 55];
// // - з 5 стічкових значень
// let names = ['Vasia', 'Katia', 'Tania', 'Olia', "Lena"];
// // - з 5 значень стрічкового, числового та булевого типу
// let mix = ['Lviv',false, 'Rivne', 100, true];
//
// // - та вивести його в консоль
// console.log(numbers);
// console.log(names);
// console.log(mix);


// //-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// arr = [];
// arr[0] = 'City tour - 01.12.21 ';
// arr[1] = 'Visiting museums -02.12.21 ';
// arr[2] = 'Chocolate festival - 03.12.21 ';
// arr[3] = 'Going to Odessa - 04.12.21 ';
// arr[4] = 'Swimming in the sea - 05.12.21 ';
// arr[5] = 'Going Sightseeing - 05.12.21 ';
// arr[6] = 'Visiting Uman - 06.12.21 ';
// arr[7] = 'Visiting castles - 07.12.21 ';
// arr [8] = 'Going back home - 08.12.21 ';
//
// console.log(arr);

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i=0; i < 10; i++){
//     document.write('<div>Hello everyone!</div>');
// }
//
//   //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i=1; i<=10; i++){
//     document.write(`<div>${i} Hello World!</div>`);
// }
//
//   //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i<20){
//     document.write('<h1>Головне це все ще запам`ятати!</h1>');
// i++;
// }

//   //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let a = 1;
// while (a<=20) {
//     document.write(`<h1>While I am working someone is sleeping! ${a}</h1>`)
//     a++;
// }

//   //- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
// for (let i = 0; i < arr.length; i++) {
//     document.write(`<div>${arr[i]}</div>`);
//     console.log(arr[i]);
// }

//   //- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['Italy', 'France', 'Greece', 'China', 'India', 'Poland','Ukraine', 'Japan', 'Spain', 'Portuguese'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     document.write(`<div>${arr[i]}</div>`);
// }

//   //- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [888, 'Nature', true, 55, false, 'Grapes', 77, 'apples', 99, 'cheese'];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     document.write(`<div>${arr[i]}</div>`);
// }

//      //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [25, 'okten', 'Lviv', 35, 'rest', 55, true, false, 45, 'phone'];
// for (let i = 0; i < arr.length; i++) {
//
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i]);
//         document.write(`<div>${arr[i]}</div>`);
//     }
// }

//         //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [25, 'okten', 'Lviv', 35, 'rest', 55, true, false, 45, 'phone'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//         document.write(`<div>${arr[i]}</div>`);
//     }
//}

//         //- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [25, 'okten', 'Lviv', 35, 'rest', 55, true, false, 45, 'phone'];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === "string") {
//         console.log(arr[i]);
//         document.write(`<div>${arr[i]}</div>`);
//     }
// }

//         // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// arr = [];
// arr [0] = 'Hello ';
// arr [1] = 'You say you are ';
// arr [2] = 25;
// arr [3] = 'But I think, it is ';
// arr [4] = false;
// arr [5] = 'In my opinion, you are ';
// arr [6] = 20;
// arr [7] = 'That is ';
// arr [8] = true;
// arr [9] = 'No more!';
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     document.write(`<div>${arr[i]}</div>`);
// }

//         //- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){
//     console.log(i);
//     document.write(' ' + i + ' ');
// }

//         // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(' ' + i + ' ');
// }
//
//         //- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i<=100; i+=2){
// console.log(i);
// document.write(' '+ i +' ');
// }

//         //- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(' '+  i + ' ');
//     }
// }

// //- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <=100; i++){
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(' '+ i + ' ');
//     }
// }