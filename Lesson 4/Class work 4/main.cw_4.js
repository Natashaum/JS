// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum(a, b, c) {
//         if (b > a && c > a) {
//             document.write(a);
//             console.log(a);
//         } else if (a > b && c > b) {
//             document.write(b);
//             console.log(b);
//         } else if (a > c && b > c) {
//             document.write(c);
//             console.log(c);
//         }
//     }
// minNum(8,5,16);

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNum(a, b, c) {
//     if (b < a && c < a) {
//         document.write(a);
//         console.log(a);
//     } else if (a < b && c < b) {
//         document.write(b);
//         console.log(b);
//     } else if (a < c && b < c) {
//         document.write(c);
//         console.log(c);
//     } else {
//         document.write('Числа рівні');
//         console.log('Числа рівні');
//     }
// }
// maxNum(13,55,24);
// maxNum(12,12,12);


// 3 - створити функцію яка повертає найбільше число з масиву

// let arr = [25, 77, 68, 100, 260];
// let arr2 = [21, 77, 60, 160, 16];
//
// function maxArrNum(fArr) {
//     let max = fArr[0];
//     for (const arrElement of fArr) {
//         if (arrElement > max) {
//             max = arrElement;
//         }
//     }
//     return max; // ф-я maxArrNum повертає max - максимальне значення масиву
// }
//
// let max = maxArrNum(arr);
// let max2 = maxArrNum(arr2);
// let max3 = maxArrNum([1, 2, 3]);
// console.log(max);
// console.log(max2);
// console.log(max3);

// 4 - створити функцію яка повертає найменьше число з масиву
// let arr = [33, 45, 12, 99, 14, 22, 22];
//
// function minArrNum (arrF){
//     let min = arrF[0];
//     for (const arrElem of arrF){
//         if (arrElem < min) {
//             min = arrElem;
//         }
//     }
//     return min;
// }
// let min = minArrNum(arr);
// console.log(min);

// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [44, 88, 33, 15, 32];
//
// function sum(fArr) {
//     let result = 0;
//     for (const sumElement of fArr) {
//         result = result + sumElement;
//     }
//     return result;
// }
// console.log(sum (arr));
// document.write(sum (arr));

// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [44, 88, 33, 15, 32];
//
// function average(arrF) {
//     let averageSum = 0;
//     let sum = 0;
//     for (const arrElem of arrF) {
//         sum = sum + arrElem;
//     }
//     averageSum = sum / arr.length;
//     return averageSum;
// }
//
// console.log(average(arr));

// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let arr = [44, 88, 33, 15, 32];
//
// function maxNum(fArr) {
//     let min = fArr[0];
//     let max = fArr[0];
//     for (const arrElem of fArr) {
//         if (arrElem < min) {
//             min = arrElem;
//         }
//         if (arrElem > max) {
//             max = arrElem;
//         }
//     }
//     console.log(`Максимальне число:` + ' ', max);
//     return min;
// }
// console.log(maxNum(arr));

// 8 - створити функцію яка заповнює масив рандомними числами
//     (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
//     та виводить його.
// function random(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// let arr = [4, 88, 33, 15, 32]; // вказуємо любі числа - воно перерзаписує рандомними
// console.log(random(arr));

// function random(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * 100)); // push - це ф-я додавання елементу до масиву
//     }
//     return arr;
// }
//
// console.log(random(10));

// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomLimit(arr, limit) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//
// let arr = [0, 0, 0, 0, 0];
// console.log(randomLimit(arr, 10));

// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse (arr) {
//     let arrNew = [];
//     for (let i = arr.length - 1, ri=0; i >= 0; i--, ri++) {
//         arrNew[ri] = arr[i];
//     }
//     return arrNew;
// }
// let arr = [4, 88, 33, 15, 32];
// console.log (reverse(arr));