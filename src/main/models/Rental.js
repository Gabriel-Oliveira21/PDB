const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    rentalDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    totalCost: { type: Number, required: true }
});

module.exports = mongoose.model('Rental', rentalSchema);
