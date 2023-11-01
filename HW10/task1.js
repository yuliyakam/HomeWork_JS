"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const musicCollection = {
  albumColection: [
    {
      title: "Winter",
      artist: "Исполнитель1",
      year: "1991",
    },
    {
      title: "Summer",
      artist: "Исполнитель2",
      year: "1993",
    },
    {
      title: "Spring",
      artist: "Исполнитель3",
      year: "1995",
    },
    {
        title: "Autumn",
        artist: "Исполнитель4",
        year: "1997"
      }
  ],
  *[Symbol.iterator]() {
    for (const colection of this.albumColection) {
        yield colection;
    }
}
};
for (const album of musicCollection) {
    console.log(`Название альбома ${album.title} - Исполнитель ${album.artist} (Год выпуска ${album.year})`);
}
