const makeFlightEntity = require('./createFlight');
const editFlightEntity = require('./editFlight');

const makeFlight = makeFlightEntity();
const editFlight = editFlightEntity();

module.exports = {makeFlight, editFlight};