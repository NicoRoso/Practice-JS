import { add, subtract, multiply, divide, square, circleArea } from './mathOperations.js';
import * as constants from './constants.js';

// Примеры использования импортированных функций и констант
console.log("Сумма:", add(5, 3)); // 8
console.log("Разница:", subtract(9, 6)); // 3
console.log("Произведение:", multiply(4, 7)); // 28
console.log("Частное:", divide(10, 2)); // 5
console.log("Квадрат числа:", square(5)); // 25
console.log("Площадь круга:", circleArea(5)); // 78.53975
console.log("Константа PI:", constants.PI); // 3.14159
