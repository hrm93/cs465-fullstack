const mongoose = require('mongoose');
const Trip = require('../models/travlr');   // Register model
const Model = mongoose.model('trips');

// GET: /trips - list all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const trips = await Model.find({}).exec();

        console.log(trips);

    if(!trips)
    {   // Database returned no data
        return res
                .status(404)
                .json(err);
    } else {    // Return resulting trip list
        return res
            .status(200)
            .json(trips);
    }
};

module.exports = {
    tripsList
};

// GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async(req, res) => {
    const trips = await Model.find({'code' : req.params.tripCode }).exec(); //Return signle record

    console.log(trips);

    if(!trips)
    {   //Database returned no data
        return res
                .status(404)
                .json(err)
    } else {    // Returns resulting trip list
        return res
            .status(200)
            .json(trips);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};