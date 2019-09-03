'use strict';
let money,
    start = function(){

  do { 
     money = prompt('Ваш месячный доход?', 50000);
    }
  while(isNaN(money) || money === '' || money === null);
};

start();

let appData ={
  budget: money,
  budgetDay: 0,
  budgetMonth : 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  expensesMonth: 0,
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i<2; i++){
          
          let itemExpenses = prompt('Введите обязательную статью расходов?', 'камунальные услуги');
          let cashExpenses;
          do {
            cashExpenses = prompt('Во сколько это обойдется?', 3500);
          }
          while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);

          appData.expenses[itemExpenses] = cashExpenses;
      }

  },
      getExpensesMonth: function(){
      for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
      }
    },

    getBudget: function() {
      appData.budgetMonth = appData.buget -appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.bugetMonth / 30);
    },
    
    getTargetMonth: function(){
      return appData.mission / appData.bugetMonth;
    },

    getStatusIncome: function(){
      if(appData.budgetDay < 300 && appData.budgetDay >= 0){
        return('Низкий уровень дохода');
      }
      if(appData.budgetDay <= 800 && appData.budgetDay >= 300){
        return('Средний уровень дохода');
      }
      if(appData.budgetDay > 800) {
        return('Высокий уровень дохода');
      }
      else{
        return('Что то пошло не так');
      }
    }
};


appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.getExpensesMonth);

if (appData.getTargetMonth() > 0) {
  console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
}
else {
  console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData [key]);
}


