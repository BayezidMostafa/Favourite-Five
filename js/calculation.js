document.getElementById('calculate-button').addEventListener('click', function () {
    const listCountElement = document.getElementsByTagName('li');
    const listCountNumber = listCountElement.length;
    const playerBudget = getInputFieldValueById('per-playe-cost');
    const totalCostOfPlayers = listCountNumber * playerBudget;
    const playerExpenseElement = document.getElementById('total-player-expense');
    playerExpenseElement.innerText = totalCostOfPlayers;
})

document.getElementById('calculate-total-button').addEventListener('click', function () {
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');
    const playerExpenseElement = document.getElementById('total-player-expense');
    const playerExpenseString = playerExpenseElement.innerText;
    const playerExpense = parseInt(playerExpenseString);
    const finalTotalCost = managerCost + coachCost + playerExpense;
    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.innerText = finalTotalCost;
})