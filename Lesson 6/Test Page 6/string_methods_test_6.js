// let str = ('Oh, Stranger');
// //console.log(str[0]); // виводить лише перший елемент стрінги
// for (const strElement of str) {
//     console.log(strElement); // вивиодить всі елементи стрінги
// }
// //==============================================
//  let str = 'Who is';
// console.log(str.concat(' the best?')); // . concat   -поєднує з попередньою стрінгою
// console.log(str.concat(' the best?').toUpperCase());
// let whoIs = str;
// console.log(whoIs.toUpperCase());
// //==============================================
// let answ1 = 'Of course, it is me!)))';
// console.log(answ1);
// let answer2 = 'I am the best!)';
// console.log(answer2.toUpperCase());
// console.log(answer2.startsWith('b'),answer2.length);

// // ================================================
//
// let str = '  I think, you are too arrogant.   ';
// console.log(str.length); // 35 символів з усіма пробілами
//
// let trim = str.trim(); // забирає зайві пробіли
// console.log(trim);
// console.log(trim.length); // 30 символів. trim забрало зайві
// // ================================================
// let str = 'Autumn';
// let str1 = 'Winter';
// let str2 = 'Spring';
// let str3 = 'Summer';
//
//  let endsWish = str.endsWith('er');
//  let endsWish1 = str1.endsWith('er');
//  let endsWish2 = str2.endsWith('er');
//  let endsWish3 = str3.endsWith('er');
//  console.log(endsWish, endsWish1, endsWish2, endsWish3);
//  let startsWish = str.startsWith('S');
//  let startsWish1 = str1.startsWith('S');
//  let startsWish2 = str2.startsWith('S');
//  let startsWish3 = str3.startsWith('S');
//  console.log(startsWish, startsWish1, startsWish2, startsWish3); // виводить булеві значення;
//  // ====================================================
// let str = 'Autumn';
// let chartAt = str.charAt(1);
// console.log(chartAt);
// console.log((chartAt).toUpperCase());
// console.log(str.includes('kt'));
// console.log(str.includes('Au'));
//
// let replaceAll = str.replaceAll('u','U'); //замінює символ
// console.log(replaceAll);
//   //=======================================================
//// // зробити номер без зайвих знаків 1й спосіб
// let phNum = '+38(067)333-22-55';
// let clearNum = phNum.replaceAll('+', '');
// let clNum1 = clearNum.replaceAll('(', '');
// let clNum2 = clNum1.replaceAll(')', '');
// let clNum3 = clNum2.replaceAll('-', '');
// let result = clNum3;
// console.log(result);
//
// //=======================================================
// // зробити номер без зайвих знаків 2й спосіб
// let phNum = '+38(067)333-22-55';
// let clearNum =
//     phNum
//         .replaceAll('+', '')
//         .replaceAll('(', '')
//         .replaceAll(')', '')
//         .replaceAll('())', '')
//         .replaceAll('-', '')
// let result = phNum;
// console.log(clearNum);
// // ==========================================================
// let str = 'Hello, Okten!';
// let slice = str.slice(2, 9); //
// console.log(slice);
//
// let str1 = 'Hello-everyone-!!!';
// let split = str1.split('-'); // '-' розділяє слова по по знаку -
// console.log(split);

// let str1 = 'Hello-everyone-!!!';
// let split = str1.split(''); // '' - розділяє слово посимвольно (робить масив символів)
// console.log(split);
// // ===================================================
