class DivisionByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = "DivisionByZeroError";
    }
}

function calculate(a, b, operation) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Оба аргумента должны быть числами.");
        }

        // Выполнение запрашиваемой операции
        switch (operation) {
            case 'add':
                return a + b;
            case 'subtract':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                if (b === 0) {
                    throw new DivisionByZeroError("Деление на ноль невозможно.");
                }
                return a / b;
            default:
                throw new Error("Неподдерживаемая операция.");
        }
    } catch (error) {
        console.error(`Ошибка: ${error.message}`);
    }
}

// Пример использования
console.log(calculate(10, 5, 'add')); // 15
console.log(calculate(10, 0, 'divide')); // Ошибка: Деление на ноль невозможно
console.log(calculate(10, 'a', 'add')); // Ошибка: Оба аргумента должны быть числами.
