const express = require('express');
const { connect } = require('./sequelize/db');
const MarkerServise = require('./sequelize/services/Marker');
const app = express();

connect();

app.use(express.json());

app.get('/marker', (req, res)  => {
  MarkerServise.getAll()
    .then(markers => res.json(markers));
});

app.post('/marker', (req, res)  => {
  MarkerServise.create(req.body)
    .then(marker => res.json(marker));
});

app.listen(3000);