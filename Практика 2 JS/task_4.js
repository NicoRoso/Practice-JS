let namesSet = new Set();
namesSet.add("Боб");
namesSet.add("Николай");
namesSet.add("Олег");
namesSet.add("Тинькофф");

namesSet.delete("Тинькофф");

console.log("Есть 'Тинькофф'?:", namesSet.has("Тинькофф"));
console.log("Размер сета: ", namesSet.size);
