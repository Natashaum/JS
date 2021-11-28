// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User(userId, userName, userSurname, userEmail, userPhone) {
//     this.id = userId;
//     this.name = userName;
//     this.surname = userSurname;
//     this.email = userEmail;
//     this.phone = userPhone;
//     this.personIdentity = function () {
//         console.log(`ID: ${this.id} Name: ${this.name} Surname: ${this.surname} Email: ${this.email} Phone number: ${this.phone}`);
//     }
// }
//
// // - Cтворити пустий масив, наповнити його 10 об'єктами new User(....)
// const newUserArr = [
//     new User (10, 'Vasia', 'Kolobok', 'vasia@gmail.com', '0503365555'),
//     new User (2, 'Katia', 'Kurochka', 'kate@gmail.com', '0673335544'),
//     new User (8, 'Olena', 'Prekrasna', 'olena@gmail.com', '0507775555'),
//     new User (6, 'Kuzia', 'Domovyi', 'kuzia@gmail.com', '0508885544'),
//     new User (5, 'Nafania', 'Kuzkina', 'nafa@gmail.com', '0953366555'),
//     new User (4, 'Zmiy', 'Horynych', 'zmiy@gmail.com', '0682225522'),
//     new User (7, 'Oleksii', 'Popovych', 'oleks@gmail.com', '0506622555'),
//     new User (3, 'Dobrynia', 'Nikitich', 'dobrynia@gmail.com', '0500505555'),
//     new User (9, 'Alonushka', 'Popovna', 'alona@gmail.com', '0507777777'),
//     new User(1, 'Tsar', 'Horoh', 'tsar@gmail.com', '0958888888')
// ];
// console.log(newUserArr);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let userFilter = newUserArr.filter((itemId) => {
//     if (itemId.id % 2 === 0) {
//         return itemId;
//     }
// });
// console.log(userFilter);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let userSort = newUserArr.sort((user1, user2) => (user1.id - user2.id));
//     console.log(userSort);

//======================== Class ==========================

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
        console.log(`ID: ${this.id} Name: ${this.name} Surname: ${this.surname} Email: ${this.email} Phone number: ${this.phone} Order: ${this.order}`);
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientInfoArr = [
    new Client (1, 'Vasia', 'Kolobok', 'vasia@gmail.com', '0503365555', ['notebook', 'pen', 'penciles']),
    new Client (2, 'Katia', 'Kurochka', 'kate@gmail.com', '0673335544', ['laptop', 'TV']),
    new Client (3, 'Olena', 'Prekrasna', 'olena@gmail.com', '0507775555', ['potato', 'bread', 'milk', 'cheese']),
    new Client (4, 'Kuzia', 'Domovyi', 'kuzia@gmail.com', '0508885544', ['coat', 'jeans', 'sweater']),
    new Client (5, 'Nafania', 'Kuzkina', 'nafa@gmail.com', '0953366555', ['shoes', 'sleepers', 'boots']),
    new Client (6, 'Zmiy', 'Horynych', 'zmiy@gmail.com', '0682225522', ['meat', 'fish']),
    new Client (7, 'Oleksii', 'Popovych', 'oleks@gmail.com', '0506622555', ['guitar', 'strings']),
    new Client (8, 'Dobrynia', 'Nikitich', 'dobrynia@gmail.com', '0500505555', ['scissors', 'paper', 'ruler', 'eraser']),
    new Client (9, 'Alonushka', 'Popovna', 'alona@gmail.com', '0507777777', ['dress', 'gloves',  'shoes']),
    new Client (10, 'Tsar', 'Horoh', 'tsar@gmail.com', '0958888888', ['sausages', 'honey', 'jam', 'bread','biscuits'])
];
console.log(clientInfoArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let userSort = clientInfoArr.sort((a, b) => a.order.length - b.order.length);
console.log(userSort);