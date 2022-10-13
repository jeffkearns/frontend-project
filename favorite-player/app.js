const express = require('express');
const { Client } = require('pg');//
const cors = require('cors');
const connectionString = 'postgres://postgres:postgrespw@localhost:49154/playersdb';
const client = new Client({
    connectionString: connectionString,
})
client.connect();
console.log(client);

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;

app.get('/app', (req, res) => {
    res.send('hello player!')
})

app.route('/api')
app.get('/api/players', (req, res) => {
    client.query('SELECT * FROM players')
        .then(result => {
            res.send(result.rows);
        })
});
//app.POST
app.post('/api/players', (req, res) => {
    const { first_name, last_name, sport, team, rating } = req.body
    client.query('INSERT INTO players (first_name, last_name, sport, team, rating) VALUES ($1, $2, $3, $4, $5)', [first_name, last_name, sport, team, rating])
})
//app. UPDATE change rating
// app.patch('api/players/', (req, res) => {
//     const { rating } = req.body

//     client.query('UPDATE players SET rating = { rating }'
//WHERE user input //condition
// });
// //app.DELETE
// app.delete('/api/players/:id')
// client.query('DELETE FROM players WHERE id= $1 (params.req' )

app.listen(PORT, () => {
    console.log(`App working on ${PORT}`)
});