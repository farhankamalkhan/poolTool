const addName = document.getElementById("addName")
const url = 'http://localhost:3000/api'
addName.addEventListener('click', () => {
    var playerName = document.getElementById("name").value;
    var count = document.getElementById('players').rows.length;
    var newRow = document.getElementById('players').insertRow();
    newRow.innerHTML = "<td>" + count + "</td><td>" + playerName + "</td>";
    document.getElementById("name").value = '';

    console.log('in add before api call')
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
    console.log('in add after api call')
});