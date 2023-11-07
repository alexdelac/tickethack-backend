var express = require('express');
var router = express.Router();

// ajout require vers le model necessaire
const Cart = require('../models/carts');

const fetch = require('node-fetch');


//ajout des routes


router.post('/',(req, res) => {
    const newCart = new Cart({
        trips: req.body.id
    })
    newCart.save().then((data) => {
        res.json({result: true});
    })

})





module.exports = router;