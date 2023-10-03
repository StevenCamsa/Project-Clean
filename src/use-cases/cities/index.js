const citiesdb = require("../../data-access/cities/index.js");

const getCities = require("./getCities.js");
const getCitiesID = require("./getCitiesID.js");
const createCities = require('./createCities.js');
const updateCities = require('./updateCities.js');
const deleteCities = require('./deleteCities.js');

const makeCitiesEntity = require("../../entity/cities/index.js");
const editCitiesEntity = require('../../entity/cities/index.js');

const getCitiesUsecase = getCities({citiesdb});
const getCitiesIDUsecase = getCitiesID({citiesdb});
const createCitiesUsecase = createCities({makeCitiesEntity,citiesdb});
const updateCitiesUsecase = updateCities({editCitiesEntity,citiesdb});
const deleteCitiesUsecase = deleteCities({citiesdb});

const services = Object.freeze({
    getCitiesUsecase,
    getCitiesIDUsecase,
    createCitiesUsecase,
    updateCitiesUsecase,
    deleteCitiesUsecase
})

module.exports = services;
module.exports = {
    getCitiesUsecase,
    getCitiesIDUsecase,
    createCitiesUsecase,
    updateCitiesUsecase,
    deleteCitiesUsecase
}