let allPlayers = document.querySelectorAll('#player-container button');
for (i = 0; i < allPlayers.length; i++) {
    allPlayers[i].addEventListener('click', addingPlayers);
}
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
function addingPlayersName(playerName) {
    const newPlayerList = document.getElementById('player-list-container');
    const newLi = document.createElement('li');
    if (countPlayer('player-list-container')) {
        newLi.innerText = playerName;
        newPlayerList.appendChild(newLi);
    }
    else {
        return alert('You can not add more then 5 player')
    }
}