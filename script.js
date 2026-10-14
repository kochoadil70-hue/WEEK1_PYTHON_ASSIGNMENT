/*
 * SpendWise — Week 6 JavaScript Foundation
 * Collects sample budget data, calculates spending, and logs results.
 */

// Variables store application data using appropriate data types.
const currency = "KSh"; // String
let monthlyBudget = 0; // Number
let expenseName = "Sample expenses"; // String
let expenseAmount = 0; // Number
let expenseItems = []; // Array of expense objects

// Reusable function to safely collect a non-negative number from a prompt.
function askForAmount(message) {
    while (true) {
        const answer = prompt(message);
        if (answer === null) {
            return null; // User cancelled the prompt.
        }

        const amount = Number(answer.trim());
        if (answer.trim() !== "" && Number.isFinite(amount) && amount >= 0) {
            return amount;
        }

        alert("Please enter a valid number that is zero or greater.");
    }
}

// Calculate the total of all recorded expenses.
function calculateTotalExpenses(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Calculate the money remaining after expenses.
function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// Format money values consistently for console output.
function formatMoney(amount) {
    return `${currency} ${amount.toFixed(2)}`;
}

// Main program: prompts collect input and functions process it.
function runSpendWise() {
    console.log("===== Welcome to SpendWise =====");

    const budgetInput = askForAmount("Enter your monthly budget in KSh:");
    if (budgetInput === null) {
        console.log("Setup cancelled. Refresh the page to try again.");
        return;
    }
    monthlyBudget = budgetInput;

    const nameInput = prompt("Enter an expense name (for example, Groceries):");
    if (nameInput === null) {
        console.log("Setup cancelled. Refresh the page to try again.");
        return;
    }
    expenseName = nameInput.trim() || "Unnamed expense";

    const expenseInput = askForAmount(`Enter the amount spent on "${expenseName}" in KSh:`);
    if (expenseInput === null) {
        console.log("Setup cancelled. Refresh the page to try again.");
        return;
    }
    expenseAmount = expenseInput;

    // Store the expense as an object inside an array.
    expenseItems.push({ name: expenseName, amount: expenseAmount });

    const totalExpenses = calculateTotalExpenses(expenseItems);
    const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);

    console.log("Budget:", formatMoney(monthlyBudget));
    console.log("Expense name:", expenseName);
    console.log("Expense amount:", formatMoney(expenseAmount));
    console.log("Total expenses:", formatMoney(totalExpenses));
    console.log("Remaining balance:", formatMoney(remainingBalance));

    if (remainingBalance < 0) {
        console.warn("Budget exceeded by", formatMoney(Math.abs(remainingBalance)));
    } else {
        console.log("You are within your budget.");
    }
    console.log("Expense data:", expenseItems);
    console.log("===== SpendWise calculation complete =====");
}

// Run after the HTML has loaded; the script is linked with defer in index.html.
runSpendWise();
