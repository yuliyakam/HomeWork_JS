"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books;
  constructor(booksArr) {
    if (booksArr.length !== new Set(booksArr).size) {
      throw new Error("This array has duplicate element");
    } else {
      this.#books = booksArr;
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error("Can`t add book. This book already add");
    } else {
      this.#books.push(title);
    }
  }

  removeBook(title) {
    if (this.hasBook(title)) {
      const index = this.#books.indexOf(title);
      this.#books.splice(index, 1);
    } else {
      throw new Error("Can`t remove book. This book does not exist");
    }
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

// ["Tom1", "Tom2", "Tom2", "Tom3", "Tom4"];
const array = ["Tom1", "Tom2", "Tom3", "Tom4"];
const newLibrary = new Library(array);
// console.log(newLibrary.allBooks);

newLibrary.addBook("Tom5");
// console.log(newLibrary.allBooks);

newLibrary.removeBook("Tom3");
console.log(newLibrary.allBooks);


