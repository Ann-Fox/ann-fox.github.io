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
const parentLi = lili.closest('list');