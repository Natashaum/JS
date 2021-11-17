// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let arr = [2,17,13,6,22,31,45,66,100,-18];

// //1. перебрати його циклом while
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     document.write(`<div>${arr[i]}</div>`);
//     i++;
// }
//
// //2. перебрати його циклом for
// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
//     document.write(`<div>${arr[i]}</div>`);
// }
//
// //3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let b = 0;
// while (b < arr.length) {
//     if (b % 2 === 1) {
//         console.log(arr[b]);
//         document.write(`<div>${arr[b]}</div>`);
//     }
//     b++;
// }
//
// //4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i<arr.length; i++){
//     if (i % 2 === 1){
//         console.log(arr[i]);
//         document.write(`<div>${arr[i]}</div>`);
//     }
// }
//
// //5. перебрати циклом while та вивести  числа тільки парні  значення
// let a = 0;
// while (a < arr.length) {
//     if (arr[a] % 2 === 0) {
//         console.log(arr[a]);
//         document.write(`<div>${arr[a]}</div>`);
//     }
//     a++;
// }
//
// //6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++){
//     if (i % 2 === 0) {
//         console.log(arr[i]);
//         document.write(`<div>${arr[i]}</div>`);
//     }
// }
//
// //7. замінити кожне число кратне 3 на слово "okten"
// for (let i=0; i < arr.length; i++){
//
//    if (arr[i] % 3 === 0){
//        arr[i] = 'Okten';
//    }
//     console.log(arr[i]);
//     document.write(`<div>${arr[i]}</div>`);
// }
// //8. вивести масив в зворотньому порядку.
//
// for (let j = arr.length-1; j >= 0; j--) {
//     console.log(arr[j]);
//     document.write(`<div>${arr[j]}</div>`);
// }

//==============================================================================================================
//==============================================================================================================

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//arr = [2,17,13,6,22,31,45,66,100,-18];

// //1. перебрати його циклом while в зворотньому порядку
// let i = arr.length-1;
// while (i >= 0){
//     console.log(arr[i]);
//     i--;
// }

//2. перебрати його циклом for
// for (let i = arr.length-1; i>=0; i--){
//     console.log(arr[i]);
//     document.write(`<div>${arr[i]}</div>`);
// }

// //3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let b = arr.length-1;
// while (b >= 0 ) {
//     if (b % 2 !== 0) {
//         console.log(arr[b]);
//         document.write(`<div>${arr[b]}</div>`);
//     }
//     b--;
// }
//
// //4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = arr.length-1; i >= 0; i--){
//     if (i % 2 === 1){
//         console.log(arr[i]);
//         document.write(`<div>${arr[i]}</div>`);
//     }
// }

// //5. перебрати циклом while та вивести  числа тільки парні  значення
// let a = arr.length-1;
// while (a >= 0) {
//     if (arr[a] % 2 === 0) {
//         console.log(arr[a]);
//         document.write(`<div>${arr[a]}</div>`);
//     }
//     a--;
// }

 //6. перебрати циклом for та вивести  числа тільки парні  значення
 // for (let i = arr.length - 1; i >= 0; i--) {
 //    if (arr[i] % 2 === 0) {
 //        console.log(arr[i]);
 //        document.write(`<div>${arr[i]}</div>`);
 //    }
 // }

//7. замінити кожне число кратне 3 на слово "Okten"
// for (let i = arr.length - 1; i >= 0; i--) {
//
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'Okten';
//     }
//     console.log(arr[i]);
//     document.write(`<div>${arr[i]}</div>`);
// }
