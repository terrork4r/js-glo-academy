'use strict';
/*Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут 
выводится дни недели на русском или английском языке. Решите задачу
  через if*/ 
  
 let lang =prompt('ru или en'),
     week;
 
  if (lang == 'ru') {
	  week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  } 
  if (lang == 'en') {
	  week = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
  }
  alert (week);
// через switch-case 
switch (lang){
  case 'ru':
      week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
      alert (week);
      break;
  case 'en':
    week = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    alert (week); 
    break;   
}

// через многомерный массив без ифов и switch
week = [ ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
         ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']
] ;
alert(String (lang === 'ru')); 



/*У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”,
если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
    Решить задачу с помощью нескольких тернарных операторов, без использования if или switch*/
    let namePersone = prompt('Ваше имя:');
    let massages = (namePersone === 'Артём') ? 'директор': 
                   (namePersone === 'Максим') ? 'преподаватель' :
                   'студент';
    alert(massages);
