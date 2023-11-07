const mongoose = require('mongoose')


// ajouter Schema 

const cartSchema  = mongoose.Schema ({
    trip: {type: mongoose.Schema.Types.ObjectId, ref: 'trips'},
});

const Cart = mongoose.model('carts', cartSchema);



//Attention ne pas oublier l'export
module.exports = Cart;