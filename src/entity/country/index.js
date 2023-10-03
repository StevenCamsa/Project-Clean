const makeCountryEntity = require('./createCountry');
const editCountryEntity = require('./editCountry');

const makeCountry = makeCountryEntity();
const editCountry = editCountryEntity();

module.exports = {makeCountry, editCountry};