// Задание 1
/*
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

// function cube(number) {
//     return Math.pow(number, 3) + Math.pow(number + 1, 3)
// }
// console.log(cube(2));

// Задание 2
/*
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/
// function correctInput(num) {    
//     if (typeof +num === "number") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function countSaler() {
//     const userNumber = prompt("Введите вашу з/п");
// if (correctInput(userNumber)) {
//     return `Размер заработной платы за вычетом налогов равен ${userNumber*0.87}`
// } else {
//     return "Значение задано неверно!"
// }
// }

// console.log(countSaler());

// Задание 3
/*
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/

// let num1 = parseInt(prompt("Введите первое число"));
// let num2 = parseInt(prompt("Введите второе число"));
// let num3 = parseInt(prompt("Введите третье число"));

// Первый способ:
// function findMax(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }

//Второй способ:
// function max (num1, num2, num3) {    
//     if ((num2 > num1) && (num2 > num3)) {
//         return num2;
//     } else if((num3 > num1) && (num3 > num2))   {
//         return num3;
//     }
//     else return num1;
// }

// console.log("Максимальное - " + findMax(num1, num2, num3));

// console.log(max(num1, num2, num3));

// Задание 4
/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/
function sum(num1, num2) {    
   return num1 + num2;      
}
//функция считает по правилам
function minByRule(num1, num2) {
    return num1 - num2; 
}
function div(num1, num2) {
    return num1 / num2    
} 
function mul(num1, num2) {
     return num1 * num2;   
}
//обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0
function min(num1, num2) {
    return (num1 > num2)? num1 - num2 : num2 - num1;
}
//function min в виде стрелочной функции
const dif = (num1, num2) => (num1 > num2)? num1 - num2 : num2 - num1;
// console.log(sum(2,6));
// console.log(mul(2,6));
// console.log(div(6,2));
// console.log(minByRule(2, 6))
console.log(dif(-2, -2));

