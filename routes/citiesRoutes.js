const express = require('express');
const router = express.Router();

const {
    getCitiesController,
    getCitiesIDController,
    createCitiesController,
    updateCitiesController,
    deleteCitiesController
} = require('../src/controller/cities/index');

const makeExpressCallback = require('../src/express-callback/express-callback')

router.get("/cities", makeExpressCallback(getCitiesController))
      .get("/cities/:id", makeExpressCallback(getCitiesIDController))
      .post("/cities", makeExpressCallback(createCitiesController))
      .patch("/cities/:id", makeExpressCallback(updateCitiesController))
      .patch("/cities/delete/:id", makeExpressCallback(deleteCitiesController))

module.exports = router;