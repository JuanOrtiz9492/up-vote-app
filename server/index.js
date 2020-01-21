const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('pg')
const DbVariables = require('./dataBaseConfig.json')

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(path.join(__dirname, '../build')))

app.get('/candidates', (req, res) => {
    const { referencia } = req.query
    const client = new Client(DbVariables)
    client.connect()
    client.query(`SELECT * FROM CONTESTANS ;`)
        .then(result => res.json(result.rows))
        .then( () => client.end() )
        .catch(e => console.log(e.stack))
})

app.put('/updatecandidate', (req,res) => {
    const candidate = req.body;
    const client = new Client(DbVariables)
    client.connect()
    client.query(`UPDATE CONTESTANS  SET upvotes = ${candidate.upvotes}, downvotes = ${candidate.downvotes} WHERE id = ${candidate.id} ;`)
        .then(() => client.end() )
        .catch(e => console.log(e.stack))


})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../build/index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port);