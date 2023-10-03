const flightdb = require("../../data-access/flight/index.js");

const getFlight = require("./getFlight");
const getFlightById = require("./getFlightById");
const createFlight = require("./createFlight");
const updateFlight = require("./updateFlight");
const deleteFlight = require("./deleteFlight");

const makeFlightEntity = require("../../entity/flight/index.js");
const editFlightEntity = require("../../entity/flight/index.js");

const getFlightUseCase = getFlight({ flightdb });
const getFlightByIdUseCase = getFlightById({ flightdb });
const createFlightUseCase = createFlight({makeFlightEntity, flightdb });
const updateFlightUseCase = updateFlight({editFlightEntity, flightdb });
const deleteFlightUseCase = deleteFlight({ flightdb });

const services = Object.freeze({
    getFlightUseCase,
    getFlightByIdUseCase,
    createFlightUseCase,
    updateFlightUseCase,
    deleteFlightUseCase
});

module.exports = services;
module.exports = { 
    getFlightUseCase, 
    getFlightByIdUseCase, 
    createFlightUseCase, 
    updateFlightUseCase, 
    deleteFlightUseCase
};

