// //     - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let button = document.getElementById('button');
// button.onclick = function () {
//     let text = document.getElementById('text');
//     text.style.display = 'none';
// }
// // ---------- Hide and show text --------------
// let button = document.getElementById('button');
// let touch = true;
// button.onclick = function (){
//     if (touch) {
//         document.getElementById('text').style.display = 'none';
//     }else {
//         document.getElementById('text').style.display = 'block';
//     }
//     touch = !touch;
// };

//--------------------------------------------------------------
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('button');
// button.onclick = function (){
//     this.style.display = 'none';
// };
// // -------------- Hide  button  with styles -----------------------
// let button = document.getElementById('button');
// button.onclick = function () {
//     this.classList.toggle('hideButton');
// }

// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// //     та повідомити про це користувача
//
// let form = document.forms.check_age;
// form.onsubmit = function (e){
//     e.preventDefault();
//     if (+this.userAge.value < 18){
//         alert('Go to watch cartoons, baby!')
//     };
//
// };

// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function (){
//     this.classList.toggle('collapse');
// }

// // ---------------- 2й спосіб ----------------
// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function () {
//     console.log(this.children);
//     for (const child of this.children) {
//         child.classList.toggle('hide');
//     }
// };
// - Создать список комментариев , пример объекта коментария
// - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'}
];

for (const comment of comments) {
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let title = document.createElement('h2');
    title.innerText = comment.title;
    let bodyComment = document.createElement('div');
    bodyComment.classList.add('bodyComment');

    bodyComment.innerText = comment.body;
    let btn = document.createElement('button');
    btn.innerText = 'hide comment body';
    btn.onclick = function () {
        bodyComment.classList.toggle('hide-body');
    };

    commentDiv.append(title, bodyComment, btn);
    document.body.appendChild(commentDiv);



}