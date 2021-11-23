//            Всі функції повинні бути описані стрілочним типом!!!!


// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNum = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//         document.write(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//         document.write(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//         document.write(c);
//     } else {
//         console.log('It is not a number');
//         document.write('It is not a number');
//     }
// }
// minNum(15, 77, 14);



// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNum = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//         document.write(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//         document.write(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//         document.write(c);
//     } else {
//         console.log('It is not a number');
//         document.write('It is not a number');
//     }
// }
// maxNum(555, 577, 144);



// // - створити функцію яка повертає найбільше число з масиву
// let arr = [13, 12, 66, 555, 654, 22];
// let maxNumReturn = (funcArr) => {
//     let max = funcArr[0];
//     for (const arrElem of funcArr) {
//         if (arrElem > max) {
//             max = arrElem;
//         }
//     }
//     return max;
// }
// console.log(maxNumReturn(arr));
// document.write(`<h1>The biggest element is: ${maxNumReturn(arr)}</h1>`);



// // - створити функцію яка повертає найменше число з масиву
// let arr = [16, 3, 45, 775, 37, 14];
// let minNumReturn = (funcArr) => {
//     let min = funcArr [0];
//     for (const arrElement of funcArr){
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min;
// }
// console.log(minNumReturn(arr));
// document.write(`<h1>The smallest number is: ${minNumReturn(arr)}</h1>`);



// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumElement = (...x) => {
//     let result =0;
//     for (const arrElem of x) {
//         result = result + arrElem;
//     }
//     return result;
// }
// console.log(sumElement(22, 33, 50));



// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [5, 3, 2, 6];
// let average = (arrF) => {
//     let sum = 0;
//     for (const arrElem of arrF) {
//         sum = sum + arrElem;
//     }
//     averageSum = sum / arr.length;
//     return averageSum;
// }
// document.write(`<h1>Середнє арифметичне: ${average(arr)}</h1>`);
// console.log(average(arr));



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// let returnMinShowMax = (...x) => {
//     let min = x[0];
//     let max = x[0];
//     for (const arrElement of x) {
//         if (arrElement < min){
//             min = arrElement;
//         }
//         if (arrElement > max){
//             max = arrElement;
//         }
//     }
//     console.log(`Максимальне число:` + ' ', max);
//     return min;
// }
//  console.log(returnMinShowMax(22, 55, 25, 2, -11, 545, 13));

// - створити функцію яка заповнює масив рандомними числами
// let random = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * 100)); // push - це ф-я додавання елементу до масиву
//     }
//     return arr;
// }
// console.log(random(10));
// document.write(random(10));

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// * 100 - це найбільша межа згенерованого числа в даному випадку


// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomLimit = (arr, size, limit)=> {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//
// console.log(randomLimit([], 15, 250));
// document.write(randomLimit([], 15, 250));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverseArr = (arr) => {
    let arrNew = [];
    for (let i = arr.length - 1, ri=0; i >= 0; i--, ri++) {
        arrNew[ri] = arr[i];
    }
    return arrNew;
}
let arr = [11, 22, 33, 44, 55];
console.log (reverseArr(arr));
