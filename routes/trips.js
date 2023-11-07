var express = require('express');
var router = express.Router();

// ajout require vers le model necessaire

const Trip = require('../models/trips');

const fetch = require('node-fetch');



//ajout des routes
router.post('/',(req, res) => {
    const dateinf = new Date(req.body.date)
   let dateSupTimestamp = new Date(req.body.date)
     dateSupTimestamp.setDate(dateSupTimestamp.getDate()+1)
    const dateSup = new Date(dateSupTimestamp)
    console.log(dateinf)
   console.log(dateSup)
Trip.find({departure: req.body.departure, arrival: req.body.arrival, date: {$gte: dateinf, $lt: dateSup}})
.then(data => {
    res.json({trips: data});

});


})










module.exports = router;