// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'

// // 1й спосіб:
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);

// // 2й спосіб:
// let helloWorld = 'hello world';
// console.log(helloWorld.length);
//
// let loremIpsum = 'lorem ipsum';
// console.log(loremIpsum.length);
//
// let javascriptIsCool = 'javascript is cool';
// console.log(javascriptIsCool.length);



// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'

// let helloWorld = 'hello world';
// console.log(helloWorld.toUpperCase());
//
// let loremIpsum = 'lorem ipsum';
// console.log(loremIpsum.toUpperCase());
//
// let javascriptIsCool = 'javascript is cool';
// console.log(javascriptIsCool.toUpperCase());
//================================================
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());



// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());
//==========================================================
// let helloWorld = 'HELLO WORLD';
// console.log(helloWorld.toLowerCase());
//
// let loremIpsum = 'LOREM IPSUM';
// console.log(loremIpsum.toLowerCase());
//
// let javascriptIsCool = 'JAVASCRIPT IS COOL';
// console.log(javascriptIsCool.toLowerCase());



// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());



// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// //      let str = 'Каждый охотник желает знать';
// //      let arr = stringToarray(str);
// //      document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// function stringToArr (str){
//     return str.split(' ');
// }
// console.log(stringToArr('Каждый охотник желает знать'));



// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     let str = 'Каждый охотник желает знать';
// //     document.writeln(delete_characters(str, 7)); // Каждый

// function delete_characters (str, length){
//     return str.substring(0, length);
// }
// console.log(delete_characters('Каждый охотник желает знать', 7));
// document.writeln(delete_characters('Каждый охотник желает знать', 7));


// //       - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// //         При цьому всі символи рядка необхідно перевести у верхній регістр.
// //        let str = "HTML JavaScript PHP";
// //        document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// function insert_dash(str) {
//     return str.replaceAll(' ', '-').toUpperCase();
// }
//
// console.log(insert_dash("HTML JavaScript PHP"));



// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// function firstLetterUp (str){
//     return str [0].toUpperCase() + str.slice(1);
// }
//
// console.log(firstLetterUp('каждый охотник желает знать'));



// // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// function capitalize(str){
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// }
// console.log(capitalize('hello everyone! see you tomorrow'));
// document.write(capitalize('hello everyone! see you tomorrow'));