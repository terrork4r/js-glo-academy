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

let resultBudgetMonth = result.querySelector('.result-budget_month'),
    resultbudgetday = result.querySelector('.result-budget_day'),
    resulteExpensesMonth = result.querySelector('.result-expenses_month'),
    resultAdditionalIncome = result.querySelector('.result-additional_income'),
    resultAdditionalExpenses = result.querySelector('.result-additional_expenses'),
    resultIncomePeriod = result.querySelector('.result-income_period'),
    resultTargetMonth = result.querySelector('.result-target_month');


/* Получить оставшиеся поля через querySelector каждый в отдельную переменную
 (Инпуты с левой стороны не забудьте про range)*/

 let data = document.querySelector('.data'),

  inputSalaryAmount = data.querySelector('.salary-amount'),
  incomeTitle = data.querySelector('input.income-title'),
  incomeAmount = data.querySelector('.income-amount'),
  additionalIncomeItem = data.querySelectorAll('.additional_income-item')[0],
  additionalIncomeItem2 = data.querySelectorAll('.additional_income-item')[1],
  expensesTitle = data.querySelector('input.expenses-title'),
  expensesAmount = data.querySelector('.expenses-amount'),
  targetAmount = data.querySelector('.target-amount'),
  periodSelect = data.querySelector('.period-select');
 

  let func = function(event){
    console.log(event.type);
  };
  buttonStart.addEventListener('mousemove', func);
  buttonStart.addEventListener('mousup', func);
  buttonStart.addEventListener('mousedown', func);
  buttonStart.addEventListener('click', func);