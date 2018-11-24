const url = 'http://localhost:3000/api'
const addButton = document.getElementById("addName")

window.onload = function() {
	getAllPlayers();
};

function getAllPlayers() {
    fetch(url + '/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()
    ).then(res => populateTable(res)
    ).catch(error => console.error('Error', error));
}

addButton.addEventListener('click', () => {
    var playerName = document.getElementById("name").value;
    var count = document.getElementById('playersTable').rows.length;
    var newRow = document.getElementById('playersTable').insertRow();
    var team = 0;
    newRow.innerHTML = "<td>" + count + "</td><td>" + playerName + "</td>" + "<td>" + team + "</td>";
    document.getElementById("name").value = '';

    var data = {
        name: playerName
    };
    fetch(url + '/add', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(error => console.error('Error', error))
});

function populateTable(players) {
    for(var i=0; i<players.length; i++) {
        var playerJSON = players[i];
        var newRow = document.getElementById('playersTable').insertRow();
        var cell1 = newRow.insertCell();
        var cell2 = newRow.insertCell();
        var cell3 = newRow.insertCell();
        cell1.innerHTML = i;
        cell2.innerHTML = playerJSON.name;
        cell3.innerHTML = playerJSON.team;
    }
}
