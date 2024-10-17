let randomString = "foobarbaz";
console.log("Длина строки: ", randomString.length);
console.log("Первый символ: ", randomString[0]);
console.log("Последний символ: ", randomString[randomString.length - 1]);

console.log("Начать с 'foo': ", randomString.startsWith("foo"));
console.log("Закончить с 'bar': ", randomString.endsWith("bar"));
console.log("Включает 'baz': ", randomString.includes("baz"));
