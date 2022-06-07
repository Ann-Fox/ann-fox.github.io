// console.log(document);

// 2.2. Получить html-элемент из дом дерева по его id и вывести в консоль (getElementById)
let par = document.getElementById('paragraph');
console.log(par);

// 2.3. Получить все элементы списка из дом дерева и вывести в консоль. (querySelectorAll)
const all_ul = document.querySelectorAll('ul');
console.log(all_ul);

const all_li = document.querySelectorAll('li');
console.log(all_li);

// const all_list = document.getElementsByClassName('list');
// console.log(all_list);

//   2.5. Получить родителя первого элемента списка (closest)
const lili = document.getElementsByTagName('li');
const parentLi = lili[0].closest('.list');
const parentLi2 = lili[1].closest('.list__parents');

console.log(parentLi);
console.log(parentLi2);

console.log(lili[0]);

const parentFather = document.getElementById('father');
const parentLi3 = parentFather.parentNode;
console.log(parentLi3);


//   3. Добавить во все элементы списка произвольный текст
all_li.forEach(element => {
  element.textContent += " [my appended text 😎]";
});


// 4.1. Создать пустой html-узел для абзаца и добавить в него любой текст.
let parNew = document.createElement('p'); 
console.log(parNew);
parNew.textContent = 'Hello world!';

//   4.2. Добавить созданный абзац последним элементом в body
const body = document.querySelector('body');
setTimeout(()=>body.append(parNew), 3000);

// 5.1. Для созданного ранее абзаца, добавить два любых класса
parNew.classList.add('new-class', 'new-class-bg');

// 5.2. Удалить класс у созданного ранее списка элементов


// 6. С помощью js изменить цвет текста для всех  элементов списка и цвет заливка для абзаца

all_li.forEach(element => {
  element.style.color = "red";
})

// setTimeout(() => all_ul.style.color = "green", 3000);

setTimeout(() =>
 all_ul.forEach(  element => {
  element.style.color = "green";
}), 3000);

setTimeout(() => parNew.style.backgroundColor = 'blue', 4000);



