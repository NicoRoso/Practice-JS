import { PI } from './constants.js';

// Модуль с математическими операциями
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) throw new Error("Деление на ноль невозможно.");
    return a / b;
}

export function square(a) {
    return a * a;
}

export function circleArea(radius) {
    return PI * radius * radius;
}
