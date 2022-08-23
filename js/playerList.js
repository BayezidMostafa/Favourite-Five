let allPlayers = document.querySelectorAll('#player-container button');
for (i = 0; i < allPlayers.length; i++) {
    allPlayers[i].addEventListener('click', addingPlayers);
}
/* Function For Button Disable Attribute and Style */
function addingPlayers(event) {
    const allPlayers = event.target;
    const playerListElement = allPlayers.parentElement.parentElement;
    const playerName = playerListElement.children[1].innerText;
    if (countPlayer('player-list-container')) {
        allPlayers.disabled = 'true';
        allPlayers.style = 'background-color: gray';
    }
    else {
    }
    addingPlayersName(playerName)
}
/* Function For a Condition and AppendChild in an UL */
function addingPlayersName(playerName) {
    const newPlayerList = document.getElementById('player-list-container');
    const newLi = document.createElement('li');
    if (countPlayer('player-list-container')) {
        newLi.innerText = playerName;
        newPlayerList.appendChild(newLi);
    }
    else {
        return alert('You cannot select more than 5 players')
    }
}