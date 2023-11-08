var express = require('express');
var router = express.Router();

// ajout require vers le model necessaire
const Cart = require('../models/carts');

const fetch = require('node-fetch');


//ajout des routes


router.post('/',(req, res) => {
    const newCart = new Cart({
        trip: req.body.id
    })
    newCart.save().then((data) => {
        res.json({result: true});
    })

})

router.get('/',(req, res) => {
    Cart.find()
    .populate('trip')
    .then((data) => {
        res.json({cart: data})
    })
})

router.delete('/:id', (req, res)=>{
    Cart.deleteOne({_id: req.params.id}).then(()=>{
        res.json({result: true})
    })
})







module.exports = router;