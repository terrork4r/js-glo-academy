let money = 100000, 
    mission = 3000000, 
    income = 'фриланс', 
    addExpenses = 'Сигареты, связь, интернет', 
    deposit = true, 
    period = 12,
    num = 266219,
    budgetDay = money / 30;
alert('hello world, i am a programmer');

//  Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(typeof money) ;
console.log(typeof income) ;
console.log(typeof deposit) ;
// - Вывести в консоль длину строки income
console.log(income.length) ;
// Вывести в консоль “Период (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log("периуд", period, "месяцев");
console.log("Цель заработать", mission, "рублей");
// Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase().split(', ')) ;
/* - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30), 
вывести в консоль результат и остаток  от деления*/
console.log("Доход за день:", budgetDay) ;


//  Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
console.log(num ** 3) ;


