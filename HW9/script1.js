/**
 * Задание 1. Получение данных о пользователе.
Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch
 для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разреш
ается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен 
соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200),
 функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос 
неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/

 *
 */
async function getUserData(id) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    if (response.ok) {
      console.log(await response.json());
    } else {
      console.error("Unsuccesfull answer from server");
    }
  } catch {
    (error) => console.log(error);
  }
}
// getUserData(2);
// getUserData(23); //проверка с сайта https://reqres.in/ если пользователь не найден ошибка 404

/**
 * Задание 2. Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует 
fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается,
 если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *

// Пример использования функции
const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });
saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет 
POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о 
пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. 
Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/
 */

const user = {
  name: "John Doe",
  job: "unknown",
};

async function saveUserData(user) {
  try {
    let response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    // console.log(response.status); возвращает статус 201, означающий Created, т.е ресурс создан и возвращает этот ресурс в теле сообщения с указанным местоположением (url-адрес). Это видно в консоли браузера  если response.ok console.log(response) отображает адрес на который мы отправили данные ;
    if (response.ok) {
      console.log("Data saved successfully");
    } else {
      console.error("Unsuccesfull answer from server");
    }
  } catch {
    (error) => console.log(error);
  }
}
saveUserData(user);
