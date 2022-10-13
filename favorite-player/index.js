//create list
let playersList = document.createElement("ul");
//container selects our div element of id=container
let container = document.getElementById("container");
//add player list to
container.appendChild(playersList);

//fetch our URL, then convert data to json object(parse data)
fetch('http://localhost:4000/api/players')
    //response.json converts into JS Object
    .then((data) => data.json())
    .then((data) => {
        // console.log(data)
        data.forEach(players => {
            let playerElement = document.createElement("table");

            let changeButton = document.createElement('button');
            changeButton.setAttribute('id', 'change');
            changeButton.setAttribute('class', 'data[i].player_id');
            changeButton.appendChild(document.createTextNode('Change'));

            let deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', 'data[i].player_id');
            deleteButton.setAttribute('id', 'delete');
            deleteButton.appendChild(document.createTextNode('Delete'))


            playerElement.innerHTML = `${players.first_name} ${players.last_name} ${players.sport} ${players.team} ${players.rating}`;
            playersList.appendChild(playerElement);
            playersList.appendChild(changeButton);
            playersList.appendChild(deleteButton);
        })
    })

//create button to add a player
//add event listener
const addPlayer = document.querySelector('#submit-add-player');
const inputFirst = document.querySelector("#first");
const inputLast = document.querySelector("#last");
const inputSport = document.querySelector("#sport");
const inputTeam = document.querySelector("#team");
const inputRating = document.querySelector("#rating");

addPlayer.addEventListener("click", function (event) {
    var player = {
        first_name: `${inputFirst.value}`,
        last_name: `${inputLast.value}`,
        sport: `${sport.value}`,
        team: `${team.value}`,
        rating: Number(`${rating.value}`),
    }
    console.log('player', player)
    //add new player
    fetch('http://localhost:4000/api/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player)
    })
        .then(response => { response.json() })
        .then(data => { console.log(data) })
});

//Change button query selector 

//delete player from list
// var deleteButton = document.querySelector('#delete')
// deleteButton.addEventListener("click", function (event) {

//     deleteButton.removeChild(player)
//     console.log(deleteButton)

// });

// function change(onclick)
// let changeButton = document.querySelector('change');


