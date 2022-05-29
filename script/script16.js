/*1. Создать объект содержащий свойства всех типов данных которые вы знаете на данный момент.*/
let obj = {
  num: 20,
  srt: 'string',
  und: undefined,
  boolly: true,
  nully: null,
  arr: [1, 2, 3],
  objecty: {
    fruit: 'apple',
    price: '15$',
  },
  fun: function () {
    console.log('Hello wopld');
  },
  fun2: () => {
    console.log('hello, world2')
  }
};

/*2. Создать массив с любыми данными
     - добавить элемент в начало массива и вывести массив в консоль
     - добавить элемент в конец массива и вывести массив в консоль
    - удалить элемент из начала массива и вывести массив в консоль
    - удалить элемент из конца массива и вывести массив в консоль
    - перебрать массив в цикле и вывести каждый из его элементов в консоль по отдельности
*/

let array = ["I", "study", "complex", "language", "JS"];

array.unshift('Today');
console.log(array);

array.push('!');
console.log(array);

array.shift();
console.log(array);

array.pop();
console.log(array);

array.forEach(function (array) {
  console.log(array);
})



/*3.1. Создать функцию которая будет принимать два параметра. В первый параметр будет передаваться имя пользователя а во второй его возраст.*/

function hello(name, age) {

  /*Функция должна возвращать строку "Привет " + имяпользователя. + " Твой возраст " + возрастпользователя + "?".*/

  return 'Hello ' + name + '. ' + 'Is your age ' + age + '?';
}
/* Вызвать созданную функцию и сохранить результат ее вызова в переменную.*/
let a = hello('Max', 20);

/** Вывести созданную переменную со значение возврата функции в консоль. */
console.log(a);

/** вариант ecmascript2015 */

const hello2 = (name, age) => `Hello ${name}! Is your age ${age}?`;
const a2 = hello2('Mike Wazowski', 167);
console.log(a2);

/** без auto-return */
const hello22 = (name, age) => {
  return `Hello ${name}! Is your age ${age}?`;
}

