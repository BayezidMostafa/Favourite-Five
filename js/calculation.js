/*Players Cost Total */
document.getElementById('calculate-button').addEventListener('click', function () {
    const listCountElement = document.getElementsByTagName('li');
    const listCountNumber = listCountElement.length;
    const playerBudget = getInputFieldValueById('per-playe-cost');
    if (isNaN(playerBudget)) {
        return alert('Please provide a valid number');
    }
    else {
        const totalCostOfPlayers = listCountNumber * playerBudget;
        const playerExpenseElement = document.getElementById('total-player-expense');
        playerExpenseElement.innerText = totalCostOfPlayers;
    }
})
/* Total Cost Of Player, Manager And Coach */
document.getElementById('calculate-total-button').addEventListener('click', function () {
    const playerExpenseElement = document.getElementById('total-player-expense');
    const playerExpenseString = playerExpenseElement.innerText;
    const playerExpense = parseInt(playerExpenseString);
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');
    if (isNaN(managerCost) && isNaN(coachCost)) {
        return alert('Please provide a valid number')
    }
    else {
        const finalTotalCost = managerCost + coachCost + playerExpense;
        const totalExpenseElement = document.getElementById('total-expense');
        totalExpenseElement.innerText = finalTotalCost;
    }
})