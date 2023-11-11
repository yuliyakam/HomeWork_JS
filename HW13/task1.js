'use strict';
/**
 * Отслеживание изменения ориентации экрана:
Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение 
об этом на веб-странице.
 */

window.addEventListener("orientationchange", () => {
    alert('The orientation of the screen is changed ');
    // Параметр screen.orientation позволяет через свойство angle: 0 узнать угол поворота экрана. Аналогично работает window.orientation
    // console.log(screen.orientation);
  });

/**
 * Некоторые устройства не поддерживают событие orientationchange, поэтому можно отловить изменение размера окна: 
 */
// window.addEventListener('resize', () => {
//     alert('The size of the screen is changed ');
// })

/**
 * Нативный метод window.matchMedia позволяет реализовать media-запросы для поиска ориентации устройства:
 */
// const mql = window.matchMedia("(orientation: portrait)");

// // Прослушка события изменения ориентации
// mql.addListener(event => {
//     if(event.matches) {
//         alert('Screen orientation is portrait');
//     }
//     else {
//         alert('Screen orientation is album'); 
//     }
// });