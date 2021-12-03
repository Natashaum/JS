
    // Все робити за допомоги js.
    // - створити блок,
    // - додати йому класи wrap, collapse, alpha, beta
    // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
    // - додати цей блок в body.
    // - клонувати його повністю, та додати клон в body.

     // const div = document.createElement('div');
     // div.classList.add('wrap', 'collapse', 'alpha', 'beta');
     // div.style.backgroundColor = 'lightgreen';
     // div.style.color = 'darkblue';
     // div.style.fontSize = '50px';
     // div.innerText = 'Все пропало, Шеф. Желание учиться, желание кодить, взрыв мозга, ничего не понимаю!';
     // document.body.appendChild(div);
     // const div2 = div.cloneNode(true);
     // document.body.appendChild(div2);

    // // - Є масив:
    // // ['Main','Products','About us','Contacts']
    // // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до
    // // блоку .menu
    // // Завдання робити через цикли.

    // let arr = ['Main', 'Products', 'About us', 'Contacts'];
    // let menuDiv = document.getElementsByClassName('menu')[0];
    // arr.forEach(item => {
    //     let li = document.createElement('li');
    //     li.innerText = item;
    //     menuDiv.appendChild(li);
    // })


//     // - Є масив
//     let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//     ];
//     // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//     // Завдання робити через цикли.
// //   Не працює!!!!!
//         for (const course of coursesAndDurationArray) {
//             let divElement = document.createElement('div');
//             divElement.innerText = `${course.title} --  ${course.monthDuration}`;
//             document.body.appendChild(divElement);
//         }

    // // - Є масив
    // let coursesAndDurationArray = [
    // {title: 'JavaScript Complex', monthDuration: 5},
    // {title: 'Java Complex', monthDuration: 6},
    // {title: 'Python Complex', monthDuration: 6},
    // {title: 'QA Complex', monthDuration: 4},
    // {title: 'FullStack', monthDuration: 7},
    // {title: 'Frontend', monthDuration: 4}
    // ];
    // // За допомоги скріпта для кожного елементу масиву зробити <div className='item'> , в якому буде <h1
    // // className='heading'> з title елементу, та <p className='description'> з monthDuration елементу.
    // // Завдання робити через цикли.
    // for (const courseElement of coursesAndDurationArray) {
    //     let divElement = document.createElement('div');
    //
    //     let h1 = document.createElement('h1');
    //     h1.innerText = courseElement.title;
    //
    //     let p = document.createElement('p');
    //     p.innerText = courseElement.monthDuration;
    //
    //     divElement.appendChild(h1);
    //     divElement.appendChild(p);
    //     document.body.appendChild(divElement);
    //  }

