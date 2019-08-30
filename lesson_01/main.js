'use strict';
let money;

let start = function(){
  money = prompt('Ваш месячный доход?', 50000);
  do {  money = prompt('Ваш месячный доход?', 50000);
    }
  while(isNaN(money) || money === '' || money === null);
};

start();

let income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 50000,
    period = 3;

let showTypeof = function(item){
  console.log(item, typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let expenses1,
    expenses2;

console.log(addExpenses.toLowerCase().split(','));

let getExpensesMonth = function(){
  let sum = 0;

  for (let i = 0; i<2; i++){
    if(i === 0){
      expenses1 = prompt('Введите обязательную статью расходов?', 'Кварплата');
    }
    if (i === 1){
      expenses2 = prompt('Введите обязательную статью расходов?', 'Бензин');
    }

    sum += +prompt('Во сколько это обойдется?', 2500);
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log ('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function(){
  return money - expensesAmount;
};

let getTargetMonth = function(){
  return mission / expensesAmount;
};

let budgetDay = getAccumulatedMonth() / 30;

console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + 'месяца');

let getStatusIncome = function(){
  if(budgetDay < 300){
    return('Низкий уровень дохода');
  }
  else if(budgetDay <= 800){
    return('Средний уровень дохода');
  }
  else {
    return('Высокий уровень дохода');
  }
};

console.log(getStatusIncome());
