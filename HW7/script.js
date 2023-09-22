"use strict";

/* Задание 1: "Управление библиотекой книг"
Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

// Пример использования класса
const book = new Book("BookName1", "Author1", 123);
book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"
*/

class Book {
    // Поля в классе можно сразу обозначить, либо как ниже прописать их в конструкторе 21 строка
  title = "Название книги";
  author = "ФИО автора";
  pages = 0;
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo() {
    console.log("Название книги - ", `"${this.title}"`, " ФИО автора - ", this.author, " Количество страниц - ", this.pages);
  }
}

const book = new Book("BookName1", "Author1", 123);
book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"

/*Задание 2: "Управление списком студентов"
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте в консоль.

// Пример использования класса
const student = new Student("John Smith", 16, "10th grade");
student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"
        */
class Student { 
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(" Name: ", this.name, "\n", "Age: ", this.age, "\n", "Grade: ", this.grade);
  }
}

const student = new Student("John Smith", 16, "10th grade");
student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"
