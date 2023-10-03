const {
    getCitiesUsecase,
    getCitiesIDUsecase,
    createCitiesUsecase,
    updateCitiesUsecase,
    deleteCitiesUsecase
} = require('../../use-cases/cities/index.js');

const getCities = require('./getCities.js');
const getCitiesID = require('./getCitiesById.js');
const createCities = require('./createCities.js');
const updateCities = require('./updateCities.js');
const deleteCities = require('./deleteCities.js');

const getCitiesController = getCities({getCitiesUsecase});
const getCitiesIDController = getCitiesID({getCitiesIDUsecase});
const createCitiesController = createCities({createCitiesUsecase});
const updateCitiesController = updateCities({updateCitiesUsecase});
const deleteCitiesController = deleteCities({deleteCitiesUsecase});

const controller = Object.freeze({
    getCitiesController,
    getCitiesIDController,
    createCitiesController,
    updateCitiesController,
    deleteCitiesController
})

module.exports = controller
module.exports = {
    getCitiesController,
    getCitiesIDController,
    createCitiesController,
    updateCitiesController,
    deleteCitiesController
}