const navigation = document
    .getElementById('nav');
const navClasses = document
        .getElementById('nav') // получаем блок с навигацией
        .classList; // список всех классов

function toggleNav () {
    navigation
        .classList
        .toggle('show');
    navClasses.toggle('show'); // убираем или добавляем класс в зависиомсти от того есть он или нет
}

function closeNav () {
    navigation
        .classList
        .remove('show');
   navClasses.remove('show'); // убираем класс для того чтобы скрыть навигацию
}

window.addEventListener('load', () => {
    const navItems = Array.from(document
        .querySelectorAll('.nav__item a'));
        .querySelectorAll('.nav__item a'); // Выбираем все ссылки и сразу перкладываем в массив

    navItems.forEach(function (i) {
        i.addEventListener('click', closeNav);
    navItems.forEach(function (navItem) {
        navItem.addEventListener('click', closeNav); // Вешаем обработчик на каждый элемент списка в отдельности
    });

    document
        .getElementById('navOpen')
        .addEventListener('click', toggleNav);
        .getElementById('navOpen') // получаем кнопку открыт навигацию
        .addEventListener('click', toggleNav); // вешаем на кнопку обработчик клика - вызываем функцию toggleNav

    document
        .getElementById('navClose')
        .addEventListener('click', toggleNav);
        .getElementById('navClose') // получаем кнопку закрыть навигацию
        .addEventListener('click', toggleNav); // вешаем на кнопку обработчик клика - вызываем функцию toggleNav
}); 