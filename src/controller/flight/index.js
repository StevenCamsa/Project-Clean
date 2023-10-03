const{
    getFlightUseCase,
    getFlightByIdUseCase,
    createFlightUseCase,
    updateFlightUseCase,
    deleteFlightUseCase
} = require('../../use-cases/flight/index');

const getFlight = require("./getFlight");
const getFlightById = require("./getFlightById");
const createFlight = require("./createFlight");
const updateFlight = require("./updateFlight");
const deleteFlight = require("./deleteFlight");

const getFlightController = getFlight({getFlightUseCase});
const getFlightByIdController = getFlightById({getFlightByIdUseCase});
const createFlightController = createFlight({createFlightUseCase});
const updateFlightController = updateFlight({updateFlightUseCase});
const deleteFlightController = deleteFlight({deleteFlightUseCase});

const controller = Object.freeze({
    getFlightController,
    getFlightByIdController,
    createFlightController,
    updateFlightController,
    deleteFlightController
})

module.exports = controller
module.exports = {
    getFlightController,
    getFlightByIdController,
    createFlightController,
    updateFlightController,
    deleteFlightController
}

