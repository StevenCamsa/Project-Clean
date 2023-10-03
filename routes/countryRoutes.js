const express = require('express');
const router = express.Router();

const {
    getCountryController,
    getCountryByIdController,
    createCountryController,
    updateCountryController,
    deleteCountryController
} = require('../src/controller/country/index');

const makeExpressCallback = require('../src/express-callback/express-callback')

router.get("/country", makeExpressCallback(getCountryController))
      .get("/country/:id", makeExpressCallback(getCountryByIdController))
      .post("/country", makeExpressCallback(createCountryController))
      .patch("/country/:id", makeExpressCallback(updateCountryController))
      .patch("/country/delete/:id", makeExpressCallback(deleteCountryController))

module.exports = router;