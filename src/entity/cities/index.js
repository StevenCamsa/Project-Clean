const makeCitiesEntity = require('./createCities');
const editCitiesEntity = require('./editCities');

const makeCities = makeCitiesEntity();
const editCities = editCitiesEntity();

module.exports = {makeCities, editCities};