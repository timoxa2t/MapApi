const express = require('express');
const cors = require('cors');
const { connect } = require('./sequelize/db');
const MarkerServise = require('./sequelize/services/Marker');
const app = express();

connect();

app.use(express.json());
app.use(cors());

app.get('/marker', (req, res)  => {
  MarkerServise.getAll()
    .then(markers => res.json(markers));
});

app.post('/marker', (req, res)  => {
  MarkerServise.create(req.body)
    .then(marker => res.json(marker));
});

app.delete('/marker/:id', (req, res)  => {
  const { id } = req.params;

  MarkerServise.remove(Number(id))
    .then(() => res.sendStatus(200));
});

app.listen(3000);