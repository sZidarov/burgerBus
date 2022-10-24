function burgerBus (inputArray){
    let totalNumberOfCities = Number (inputArray.shift());
    let inputArrayLength = inputArray.length
    let totalExpenses = 0;
    let totalIncome = 0;
    let counter = 1;
    
    for (let i = 0; i < totalNumberOfCities; i++) {
        
        
        let city = inputArray[0];
        let income = Number(inputArray[1]);
        let expenses = Number(inputArray[2]);

        if (counter % 3 ===0 && counter % 5 !== 0){
            expenses = expenses *1.5;
        }
        if ( counter % 5 === 0){
            income *=.9;
        }
       

        totalIncome += income;
        totalExpenses += expenses;
        
        //console.log(city);
        //console.log(income);
        //console.log(expenses);

        let cityScore = income-expenses;
        console.log(`In ${city} Burger Bus earned ${cityScore.toFixed(2)} leva.`);

        let cityArray = inputArray.splice(0,3);
        counter ++;
       
    }
    let result = totalIncome-totalExpenses;
    console.log(`Burger Bus total profit: ${result.toFixed(2)} leva.`);

}
//burgerBus([
//"3",
// "Sofia",
// "895.67",
// "213.50",
// "Plovdiv",
// "2563.20",
// "890.26",
// "Burgas",
// "2360.55",
// "600.00"]);

 burgerBus([
    "5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20",
])