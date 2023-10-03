const countrydb = require("../../data-access/country/index.js");

const getCountry = require("./getCountry");
const getCountryById = require("./getCountryById");
const createCountry = require("./createCountry");
const updateCountry = require("./updateCountry");
const deleteCountry = require("./deleteCountry");

const makeCountryEntity = require("../../entity/country/index.js");
const editCountryEntity = require("../../entity/country/index.js");

const getCountryUseCase = getCountry({ countrydb });
const getCountryByIdUseCase = getCountryById({ countrydb });
const createCountryUseCase = createCountry({makeCountryEntity, countrydb });
const updateCountryUseCase = updateCountry({editCountryEntity, countrydb });
const deleteCountryUseCase = deleteCountry({ countrydb });

const services = Object.freeze({
    getCountryUseCase,
    getCountryByIdUseCase,
    createCountryUseCase,
    updateCountryUseCase,
    deleteCountryUseCase
});

module.exports = services;
module.exports = { 
    getCountryUseCase, 
    getCountryByIdUseCase, 
    createCountryUseCase, 
    updateCountryUseCase, 
    deleteCountryUseCase 
};

