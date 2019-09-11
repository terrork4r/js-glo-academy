'use strict';
// Получить кнопку "Рассчитать" через id
let buttonStart = document.getElementById('start');
console.log(buttonStart);

// Получить кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let plusIncome = document.getElementsByTagName('button')[0];
let plusExpenses = document.getElementsByTagName('button')[1];
console.log(plusIncome, plusExpenses);

// получить чекбокс по id через querySelector
let depositCheck = document.querySelector('#deposit-check');
console.log(depositCheck);

// Получить поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let additionalExpensesItem = document.querySelectorAll('input')[7];
console.log(additionalExpensesItem);

/*Получить все блоки в правой части программы через классы
 (которые имеют класс название-value, начиная с class="budget_day-value" и заканчивая class="target_month-value">)*/
let result = document.querySelector('div.result');
console.log(result);
console.log(result.querySelectorAll('div')[0]);
console.log(result.querySelectorAll('div')[1]);
console.log(result.querySelectorAll('div')[2]);
console.log(result.querySelectorAll('div')[3]);
console.log(result.querySelectorAll('div')[4]);
console.log(result.querySelectorAll('div')[5]);
console.log(result.querySelectorAll('div')[6]);


/* Получить оставшиеся поля через querySelector каждый в отдельную переменную
 (Инпуты с левой стороны не забудьте про range)*/

 let data = document.querySelector('.data');
 console.log(data.querySelectorAll('input'));
 let inputSalaryAmount = data.querySelectorAll('input')[0];
 let incomeTitle = data.querySelectorAll('input')[1];
 let incomeAmount = data.querySelectorAll('input')[2];
 let additionalIncomeItem = data.querySelectorAll('input')[3];
 let additionalIncomeItem2 = data.querySelectorAll('input')[4];
 let expensesTitle = data.querySelectorAll('input')[5];
 let expensesAmount = data.querySelectorAll('input')[6];
 let targetAmount = data.querySelectorAll('input')[11];
 let periodSelect = data.querySelectorAll('input')[12];
 console.log(inputSalaryAmount, incomeTitle, incomeAmount, additionalIncomeItem,
   additionalIncomeItem2, expensesTitle, expensesAmount, targetAmount, periodSelect);