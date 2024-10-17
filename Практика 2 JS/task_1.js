let user1 = {
    name: "Мага",
    age: 25,
    city: "Санкт-Петербург"
};
console.log("Пользователь: ", user1);


user1.age = 31;
user1.country = "РФ";
delete user1.city;
console.log("Обновленный пользователь:", user1);

let user2 = {
    name: "Алиса",
    age: 20,
    city: "Лондон"
};

let totalAge = user1.age + user2.age;
console.log("Сумма лет:", totalAge);
