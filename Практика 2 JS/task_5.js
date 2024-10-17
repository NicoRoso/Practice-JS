let userMap = new Map();
userMap.set("Имя", "Олен");
userMap.set("Возрост", 30);
userMap.set("Город", "Хабаровск");

console.log("Последний добавленный элемент: ", userMap.get("Город"));

userMap.delete("Возрост");
console.log("Есть 'Возрост'?: ", userMap.has("Возрост"));
