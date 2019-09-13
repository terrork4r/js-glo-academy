'use strict';
let money;
  



let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth : 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  expensesMonth: 0,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  start: function(){

    do { 
       money = prompt('Ваш месячный доход?', 50000);
      }
    while(isNaN(money) || money === '' || money === null);
  },
  asking: function(){

    if(confirm('Есть ли у вас дополнительный заработок?')){
      let itemIncome;
      do {
        itemIncome = prompt('Какой дополнительный заработок у вас есть?', 'Инвестиции');
        }
        while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);
        
      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      }
      while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses;
    do {
      addExpenses = prompt('Перечислите возможные расходы через запятую', 'сигареты, транспорт, кредит');
    }
    while (!isNaN(addExpenses) || addExpenses === '' || addExpenses === null);
        appData.addExpenses = addExpenses.toUpperCase().split(',');
        for (let i = 0; i<2; i++){
          
          let itemExpenses, 
              cashExpenses;
              do {
                itemExpenses = prompt('Введите обязательную статью расходов?', 'камунальные услуги');
              }
              while (!isNaN(itemExpenses) || itemExpenses === '' || itemExpenses === null);
          do {
            cashExpenses = prompt('Во сколько это обойдется?', 3500);
          }
          while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);

          appData.expenses[itemExpenses] = cashExpenses;
      }

  },
      getExpensesMonth: function() {
      for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
      }
    },
    getBudget: function() {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    
    getTargetMonth: function(){
      return appData.mission / appData.budgetMonth;
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
    },
    getInfoDeposit: function(){
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
      if(appData.deposit){
        do {
          appData.percentDeposit = prompt('Какой годовой процент?', '10');
        }
        while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
        
        do {
          appData.moneyDeposit = prompt('Какая сумма заложена', 10000);
        }
        while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
        
      }
    },
    calcSavedMoney: function(){
      return appData.budgetMonth * appData.period;
    }
  
};


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

console.log('Расходы за месяц: ' + appData.expensesMonth);

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
console.log(appData.addExpenses);