const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController');

router.post('/rentals', rentalController.createRental);
router.put('/rentals/:id', rentalController.updateRental);
router.delete('/rentals/:id', rentalController.deleteRental);

module.exports = router;
