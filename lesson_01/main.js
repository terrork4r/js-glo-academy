'use strict';
let money;

let start = function(){

  do {  money = prompt('Ваш месячный доход?', 50000);
    }
  while(isNaN(money) || money === '' || money === null);
};

start();

let appData ={
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы через запятую');
        appData.addExpenses= addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  }
};



let showTypeof = function(item){
  console.log(item, typeof item);
};
showTypeof(money);
showTypeof(appData.income);
showTypeof(appData.deposit);

let expenses1,
    expenses2;


let getExpensesMonth = function(){
  let sum = 0,
      howMutch;

  for (let i = 0; i<2; i++){
    if(i === 0){
      expenses1 = prompt('Введите обязательную статью расходов?', 'Кварплата');
    }
    if (i === 1){
      expenses2 = prompt('Введите обязательную статью расходов?', 'Бензин');
    }
    howMutch = prompt('Во сколько это обойдется?', 2500);
    while(isNaN(howMutch) || howMutch === '' || howMutch === null){
      howMutch = prompt('Во сколько это обойдется?', 2500);
    }
    sum += +howMutch;
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log ('Расходы за месяц: ' + expensesAmount);
// доход с учетом расходов
let getAccumulatedMonth = function(){
  return money - expensesAmount;
};

let getTargetMonth = function(){
  return appData.mission / getAccumulatedMonth();
};
let output = function(){
  if(getTargetMonth()<0){
  console.log('Цель не будет достигнута');
}
  else{
    console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяца');
  }
};
output();
//доход за день
let budgetDay = getAccumulatedMonth() / 30;


let getStatusIncome = function(){
  if(budgetDay < 300 && budgetDay >= 0){
    return('Низкий уровень дохода');
  }
  if(budgetDay <= 800 && budgetDay >= 300){
    return('Средний уровень дохода');
  }
  if(budgetDay > 800) {
    return('Высокий уровень дохода');
  }
  else{
    return('Что то пошло не так');
  }
};

console.log(getStatusIncome());
