let array1 = [10, 20, 30, 40, 50];
console.log("Первый элемент: ", array1[0]);
console.log("Последний элемент: ", array1[array1.length - 1]);

array1[1] = 25;

let array2 = [...array1];
console.log("Массив 1:", array1);
console.log("Массив 2:", array2);

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let mergedArray = mergeArrays(array1, array2);
console.log("Объединенный массив: ", mergedArray);

let users = [
    { name: "Ник" },
    { name: "Света" },
    { name: "Алекс" }
];

function getUserNames(userArray) {
    return userArray.map(user => user.name);
}

console.log("Имена пользователей: ", getUserNames(users));

function getAverage(numbers) {
    let sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log("Среднее арифмитическое: ", getAverage([1, 2, 3, 4, 5]));
