'use strict';
let money = +prompt('Ваш месячный доход?'), 
    mission = 3000000, 
    income = 'фриланс', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    period = 12,
    budgetDay ,
    budgetMonth,
    spending = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    amount = +prompt('Во сколько это обойдется?'), 
    spending2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    amount2 = +prompt('Во сколько это обойдется?');
    
    let showTypeOf = function(data){
      console.log(data, typeof(data));
    };

      console.log(addExpenses.split(', '));  
      showTypeOf(money);
      showTypeOf(income);
      showTypeOf(deposit);

console.log("Доход за месяц, с учетом обязательных месячных расходов:", budgetMonth = money - amount - amount2);
console.log("Доход за день, с учетом обязательных месячных расходов:", Math.floor(budgetDay = budgetMonth / 30 ));

let getStatusIncome = function(){
      if (budgetDay >= 800) {
        return('Высокий уровень дохода');
      } 
      if (budgetDay >= 300 && budgetDay < 800) {
        return('Средний уровень дохода');
      } 
      if (budgetDay >= 0 && budgetDay < 300) {
        return('Низкий уровень дохода');
      } 
      if (budgetDay < 0) {
        return('Что то пошло не так');
      }
};
console.log(getStatusIncome());

    // 4 урок
      function getExpensesMonth(a, b){
        for (let i = 0; i < 2; i++){
          (a + b) += +prompt('Во сколько нам это обойдется?', 2500);
        }
         return a + b;
         
       }

        console.log("сумма всех расходов за месяц:", getExpensesMonth(amount, amount2));

      function getAccumulatedMonth(a, b){
          return a - b;
        }

    const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount, amount2));
      getAccumulatedMonth(money, getExpensesMonth(amount, amount2));
      console.log("накопления за месяц:", accumulatedMonth);

     function getTargetMonth(a, b){
         return Math.floor(a / b);
      }

      console.log("сколько месяцев до выполнения цели:", getTargetMonth(mission, budgetMonth));
      