const mongoose = require('mongoose')


// ajouter Schema 
const tripSchema  = mongoose.Schema ({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
});

const Trip = mongoose.model('trips', tripSchema);




//Attention ne pas oublier l'export
module.exports = Trip;

