const mongoose = require('mongoose')


// ajouter Schema 
const bookingSchema  = mongoose.Schema ({
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'trips'},
});

const Booking = mongoose.model('bookings', bookingSchema);



//Attention ne pas oublier l'export
module.exports = Booking