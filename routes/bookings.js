var express = require('express');
var router = express.Router();

// ajout require vers le model necessaire
const Booking = require('../models/bookings')
const fetch = require('node-fetch');


//ajout des routes
router.get('/', (req, res)=>{
    Booking.find()
        .populate('book')
        .then(data=>{
        res.json({trips: data})
    })
})







module.exports = router;




