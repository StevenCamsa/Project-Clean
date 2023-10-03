const {
    getCountryUseCase,
    getCountryByIdUseCase,
    createCountryUseCase,
    updateCountryUseCase,
    deleteCountryUseCase
} = require('../../use-cases/country/index.js');

const getCountry = require('./getCountry.js');
const getCountryById = require('./getCountryById.js');
const createCountry = require('./createCountry.js');
const updateCountry = require('./updateCountry.js');
const deleteCountry = require('./deleteCountry.js');

const getCountryController = getCountry({getCountryUseCase});
const getCountryByIdController = getCountryById({getCountryByIdUseCase});
const createCountryController = createCountry({createCountryUseCase});
const updateCountryController = updateCountry({updateCountryUseCase});
const deleteCountryController = deleteCountry({deleteCountryUseCase});

const controller = Object.freeze({
    getCountryController,
    getCountryByIdController,
    createCountryController,
    updateCountryController,
    deleteCountryController
})

module.exports = controller
module.exports = {
    getCountryController,
    getCountryByIdController,
    createCountryController,
    updateCountryController,
    deleteCountryController
}

