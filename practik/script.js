'use strict';
let box = document.querySelector('.box');

box.addEventListener('contextmenu', function(event){
  event.preventDefault();
});