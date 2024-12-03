const express = require('express');
const router = express.Router();

// Import the controller
const tripsController = require('../controllers/trips');

// Define the routes for /api/trips and /api/trips/:tripCode
router
    .route('/trips')
    .get(tripsController.tripsList)    // GET all trips
    .post(tripsController.tripsAddTrip); // POST a new trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // GET a specific trip by code
    .put(tripsController.tripsUpdateTrip); // PUT routes an update for trip

module.exports = router;
