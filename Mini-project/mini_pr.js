// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
//   которая имеет детальную информацию про объект на который кликнули

let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.append(wrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
       let currentRow;
       let userNumber = 0;

        for (const user of users) {
            if(userNumber == 0){
                currentRow = document.createElement('div');
                currentRow.classList.add('container-row');
                wrap.append(currentRow);
            }

            let div = document.createElement('div');
            div.classList.add('user');
            div.innerText = `user id = ${user.id};  user name - ${user.name}`;

            let link = document.createElement('a');
            link.innerText = 'Go to page';
            link.setAttribute('href', `user-details.html?id=${user.id}`);
            div.appendChild(link);

            currentRow.append(div);
            userNumber = userNumber == 0 ? 1 : 0;
        }
    });


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
