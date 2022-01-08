
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(window.location.href);
let id = url.searchParams.get('id');

if(id == undefined)
{
    document.write('Відсутній Id!');
}
else {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            return response.json();
        })
        .then(user => {
            let name = document.createElement('div');
            name.innerText = user.name;
            document.body.append(name);

            let username = document.createElement('div');
            username.innerText = user.username;
            document.body.append(username);

            let email = document.createElement('div');
            email.innerText = user.email;
            document.body.append(email);

            let street = document.createElement('div');
            street.innerText = user.address.street;
            document.body.append(street);

            let suite = document.createElement('div');
            suite.innerText = user.address.suite;
            document.body.append(suite);

            let city = document.createElement('div');
            city.innerText = user.address.city;
            document.body.append(city);

            let zipcode = document.createElement('div');
            zipcode.innerText = user.address.zipcode;
            document.body.append(zipcode);

            let lat = document.createElement('div');
            lat.innerText = user.address.geo.lat;
            document.body.append(lat);

            let lng = document.createElement('div');
            lng.innerText = user.address.geo.lng;
            document.body.append(lng);

            let phone = document.createElement('div');
            phone.innerText = user.phone;
            document.body.append(phone);

            let website = document.createElement('div');
            website.innerText = user.website;
            document.body.append(website);

            let companyName = document.createElement('div');
            name.innerText = user.company.name;
            document.body.append(name);

            let catchPhrase = document.createElement('div');
            catchPhrase.innerText = user.company.catchPhrase;
            document.body.append(catchPhrase);

            let bs = document.createElement('div');
            bs.innerText = user.company.bs;
            document.body.append(bs);

            let button = document.createElement('button');
            button.innerText = 'post of current user';
            button.onclick = function(){
                button.style.display = 'none';

                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then(response => {
                        return response.json();
                    })
                    .then(posts => {
                        for (const post of posts) {
                            let div = document.createElement('div');
                            div.innerText = `post title - ${post.title}`;

                            let link = document.createElement('a');
                            link.innerText = 'Go to page';
                            link.setAttribute('href', `post-details.html?id=${post.id}`);
                            div.appendChild(link);

                            document.body.append(div);
                        }
                    });
            };

            document.body.append(button);
        });
}