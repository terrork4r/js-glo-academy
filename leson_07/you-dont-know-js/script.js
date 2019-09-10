'use strict';
// Раставил книги по порядку
let books = document.querySelector('.books'),
    book = document.querySelectorAll('.book');
books.appendChild(book[2]);
books.insertBefore(book[1], book[0]);
books.insertBefore(book[3], book[2]);
books.insertBefore(book[3], book[5]);

// Изменил фон
let body = document.querySelector('body');
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

// Исправил заголовок в 3 книге
let titleNew = book[4].querySelector('a');
console.log(titleNew);
titleNew.innerHTML = 'Книга 3. this и Прототипы Объектов';

// Удалил рекламу
let delet = document.querySelector('.adv');
body.removeChild(delet);

// Востановить порядок глав во второй и пятой книге 


// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let newElem = document.createElement('li'),
    elem = book[2].querySelectorAll('li'),
    bookUl = book[2].querySelectorAll('ul');

newElem.textContent = 'Глава 8: За пределами ES6';
console.log(newElem);
book[2].querySelector('ul').appendChild(newElem);
book[2].bookUl.insertBefore(elem[10], elem[9]);

