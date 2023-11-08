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
   let depart = req.body.departure.split('').slice(0, 1).join().toUpperCase()+ req.body.departure.split('').slice(1).join('').toLowerCase()
   let arrival = req.body.arrival.split('').slice(0, 1).join().toUpperCase()+ req.body.arrival.split('').slice(1).join('').toLowerCase()
   console.log(depart)
Trip.find({departure: depart, arrival: arrival, date: {$gte: dateinf, $lt: dateSup}})
.then(data => {
    res.json({trips: data});

});


})










module.exports = router;