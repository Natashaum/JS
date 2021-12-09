// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// document.getElementById('btn').onclick = function (){
//     let input1 = document.forms.f1.input1.value;
//     let input2 = document.forms.f1.input2.value;
//     let input3 = document.forms.f2.input3.value;
//     let input4 = document.forms.f2.input4.value;
//     console.log(input1, input2, input3, input4);
//
// };


// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додаткова частина для завдання)
// let form = document.forms['tableCreator'];
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let rows = +form.rows.value;
//     let columns = +form.columns.value;
//     let content = form.content.value;
//     console.log(rows, columns, content);
//
//     let table = document.createElement("table");
//
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement('td');
//             td.innerText = content;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }


// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// let badWords = ['Бляха муха', 'йо-ма-йо', 'Та щоб тобі'];
// let btn = document.getElementById('btn');
// btn.onclick = function (){
// let word = document.getElementById('bad').value;
//     for (const badWord of badWords) {
//         if (badWord === word) {
//             alert('Не матюкайся!');
//         }
//     }
// };


// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// let badWords = ['Бляха муха', 'йо-ма-йо', 'Та щоб тобі'];
// let btn = document.getElementById('btn');
// btn.onclick = function (){
// let sentence = document.getElementById('bad').value;
//     for (const badWord of badWords) {
//         if (sentence.includes(badWord)) {  // includes перевіряє чи містить стрінга входження якогось поганого слова (badWords)
//             alert('Не матюкайся!');
//         }
//     }
// };