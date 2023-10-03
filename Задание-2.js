/* Задание 2. Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль. */

/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
const list = data.list;
const objects = [...list];


/* Этап 3. Запись в результирующий объект */
const result = [];
objects.forEach( object => {
    result.push({
      name: object.name,
      age: Number(object.age),
      prof: object.prof,
  });
});

console.log('result', result);