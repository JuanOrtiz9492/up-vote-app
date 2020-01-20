const express = require('express');
const path = require('path');
const app = express();
const { Client } = require('pg')
const DbVariables = require('./dataBaseConfig.json')

app.use(express.static(path.join(__dirname, '../build')))

app.get('/candidates', (req, res) => {
    let { referencia } = req.query
    const client = new Client(DbVariables)
    client.connect()
    client.query(`SELECT * FROM CONTESTANS ;`)
        .then(result => res.json(result.rows))
            .catch(e => console.log(e.stack))
                .then( () => client.end() )
}),

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../build/index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port);