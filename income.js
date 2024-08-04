//creating income class
function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

//5 different objects
let money1 = new Income("Salary", 25000, true);
let money2 = new Income("Investments", 3000, true);
let money3 = new Income("Rental", 7000, true);
let money4 = new Income("Profit", 5000, false);
let money5 = new Income("Divided", 3000, false);

//storing into an array
let incomeArray = [money1, money2, money3, money4, money5];
sessionStorage.setItem("incomeArray", JSON.stringify(incomeArray));

//craeting expenses class
function Expenses(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

//5 differents objects for expenses
let spend1 = new Expenses("Groceries", 800, false);
let spend2 = new Expenses("Utilities", 1700, true);
let spend3 = new Expenses("Wifi", 650, true);
let spend4 = new Expenses("Petrol", 700, false);
let spend5 = new Expenses("Rent", 8000, true);

let expensesArray = [spend1, spend2, spend3, spend4, spend5];
sessionStorage.setItem("expensesArray", JSON.stringify(expensesArray));

//guided by https://stackoverflow.com/questions/68912537/how-to-add-new-object-in-object-class-using-prompt-input-in-javascript#comment121789488_68912557
//function to add new income
function addNewIncome() {
  let newName = prompt(
    sessionStorage.getItem("incomeArray") +
      "\n" +
      "Enter the name of a new income."
  );
  let newAmount = Number(prompt("Enter the amount you made."));
  let newRecurring = Boolean(
    prompt("Is this income recurring.True or false?").toLowerCase
  );

  //if statement still not working, please give feedback
  if ((newRecurring = true)) {
    if ((newRecurring = "false")) {
      newRecurring = false;
    } else {
      newRecurring = true;
    }
  }
  let money6 = new Income(newName, newAmount, newRecurring);
  return money6;
}
incomeArray.push(addNewIncome());
//storing retrieved income
sessionStorage.setItem("incomeArray", JSON.stringify(incomeArray));

//function to add new expense
function addNewExpense() {
  let newName = prompt(
    sessionStorage.getItem("expensesArray") +
      "\n" +
      "Enter the name of your expense."
  );
  let newAmount = Number(prompt("Enter the amount you spent."));
  let newRecurring = Boolean(
    prompt("Is this expense recurring.True or false?")
  );
  //old if statement
  if (newRecurring == "false") {
    newRecurring = false;
  } else {
    newRecurring = true;
  }
  let spend6 = new Expenses(newName, newAmount, newRecurring);
  return spend6;
}
expensesArray.push(addNewExpense());
//storing retrieved expense
sessionStorage.setItem("expensesArray", JSON.stringify(expensesArray));

//calculate sum separately
function sumIncome(arr) {
  //use sessionStorage
  sessionStorage.getItem("incomeArray");
  return (
    arr[0].amount +
    arr[1].amount +
    arr[2].amount +
    arr[3].amount +
    arr[4].amount +
    //using new object that was pushed into array
    arr[5].amount
  );
}
let sum1 = sumIncome(incomeArray);

function sumExpenses(arr) {
  //use sessionStorage
  sessionStorage.getItem("expensesArray");
  return (
    arr[0].amount +
    arr[1].amount +
    arr[2].amount +
    arr[3].amount +
    arr[4].amount +
    arr[5].amount
  );
}
let sum2 = sumExpenses(expensesArray);

//getting the disposable income
let subtract = sum1 - sum2;
let savings = prompt(
  "You're disposable income is R" +
    subtract +
    "." +
    "\n" +
    "How much would you like to put in savings?"
);

//getting final amount after savings
let total = subtract - savings;
alert("You have R" + total + " disposable income left.");

//manupilate the DOM to display totals
window.onload = function manipulate() {
  document.getElementById("income").innerHTML =
    "Your total amount of income is R" + sum1;
  document.getElementById("expenses").innerHTML =
    "Your total amount of outcome is R" + sum2;
  document.getElementById("result").innerHTML =
    "The amount you left over is R" + total;
};
manipulate();
