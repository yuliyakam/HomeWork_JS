"use strict";

// /**
//  * 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.
//  */
// // const arr = [1, 5, 7, 9];
// // console.log(Math.min(...arr));

// // Решение в одну строку кода:
// // console.log(Math.min(...[1, 5, 7, 9]));

// /**
//  * 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.
//  */
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    printCount: function () {
      return count;
    },
  };
}
const counter = createCounter();

counter.increment();
console.log(counter.printCount()); //1
counter.increment();
console.log(counter.printCount()); //2

counter.decrement();
console.log(counter.printCount()); //1

// // console.log(counter.count);// undefined т.к Значение счетчика доступно только через методы объекта
