// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(window.location.href);
let id = url.searchParams.get('id');

if (id == undefined)
{
    document.write('Відсутній Id');
}else {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            return response.json();
        })
        .then(post =>{
            let userId = document.createElement('div');
            userId.innerText = `User ID: ${post.userId}`;
            document.body.append(userId);

            let id = document.createElement('div');
            id.innerText = `Id: ${post.id}`;
            document.body.append(id);

            let title = document.createElement('div');
            title.innerText = `Title: ${post.title}`;
            document.body.append(title);

            let body = document.createElement('div');
            body.innerText = `Body: ${post.body}`;
            document.body.append(body);

            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => {
                    return response.json();
                })
                .then(comments => {
                    for (const comment of comments) {
                        let postId = document.createElement('div');
                        postId.innerText = `Post Id: ${comment.postId}`;
                        document.body.append(postId);

                        let id = document.createElement('div');
                        id.innerText = `Id: ${comment.id}`;
                        document.body.append(id);

                        let name = document.createElement('div');
                        name.innerText = `Name: ${comment.name}`;
                        document.body.append(name);


                        let email = document.createElement('div');
                        email.innerText = `Email: ${comment.email}`;
                        document.body.append(email);

                        let body = document.createElement('div');
                        body.innerText = `Body: ${comment.body}`;
                        document.body.append(body);
                    }
                });
        })
}