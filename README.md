# SpendWise — JavaScript Foundation (Week 6)

SpendWise is a beginner-friendly personal budget and expense tracker. This assignment builds on the existing HTML/CSS skeleton by adding JavaScript variables, prompt-based input, calculations, reusable functions, and clearly labeled console output.

## Project files

- `index.html` — page structure and the JavaScript file link.
- `style.css` — responsive styling for the SpendWise interface.
- `script.js` — collects sample data, calculates expenses and remaining balance, and logs results.
- `README.md` — project overview and instructions.

## JavaScript concepts implemented

### Variables and data types
- `monthlyBudget` and `expenseAmount` use numbers.
- `currency`, `expenseName` use strings.
- `expenseItems` is an array containing expense objects.
- `const` is used for values that are not reassigned, and `let` for values that can change.

### Collecting user input
The `prompt()` function asks the user for a monthly budget, an expense name, and the amount spent. Input values are validated, converted to numbers, and cancellation is handled.

### Calculations
`calculateTotalExpenses()` adds the recorded expense amounts. `calculateRemainingBalance()` subtracts total expenses from the budget. If the balance is negative, SpendWise warns that the budget has been exceeded.

### Reusable functions
- `askForAmount()` validates numeric input.
- `calculateTotalExpenses()` totals expense objects.
- `calculateRemainingBalance()` calculates the remaining budget.
- `formatMoney()` formats amounts in Kenyan shillings.
- `runSpendWise()` coordinates the program.

### Displaying results
The application prints labeled budget, expense, total, and remaining-balance results in the browser developer console. It uses `console.warn()` when spending exceeds the budget.

## How to run

1. Open `index.html` in a modern web browser.
2. Answer the prompts for budget, expense name, and amount.
3. Open Developer Tools with **F12** (or right-click and select **Inspect**).
4. Select the **Console** tab to see the calculation results.
5. Refresh the page to run another test.

## Testing checklist

- Enter a budget larger than the expense and confirm the remaining balance is positive.
- Enter the same budget and expense and confirm the remaining balance is zero.
- Enter an expense larger than the budget and confirm the warning appears.
- Enter invalid text or a negative number and confirm the input validation message appears.
- Cancel a prompt and confirm the program exits safely.

## Scope note

This assignment demonstrates the JavaScript foundation. The prompts and console output are implemented as required; the visible form is still a page-layout foundation and is not yet connected to save entries from the form.
