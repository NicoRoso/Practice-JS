// Функция, принимающая колбэк
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John Doe', age: 30 };
        callback(null, data);
    }, 2000);
}

// Пример использования колбэка
fetchData((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Данные:", data);
    }
});

// Функция, возвращающая промис
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'Jane Doe', age: 25 };
            resolve(data);
        }, 2000);
    });
}

// Пример использования промиса
fetchDataPromise()
    .then(data => console.log("Данные с промисом:", data))
    .catch(error => console.error("Ошибка:", error));

    // Функция, использующая async/await
async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log("Данные с async/await:", data);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

// Пример использования async/await
fetchDataAsync();

// Параллельное выполнение нескольких промисов
async function fetchAllData() {
    const promise1 = fetchDataPromise();
    const promise2 = fetchDataPromise();

    try {
        const [data1, data2] = await Promise.all([promise1, promise2]);
        console.log("Параллельное выполнение данных:", data1, data2);
    } catch (error) {
        console.error("Ошибка при параллельном выполнении:", error);
    }
}

// Пример использования
fetchAllData();
