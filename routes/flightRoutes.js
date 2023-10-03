const express = require('express');
const router = express.Router();

const {
    getFlightController,
    getFlightByIdController,
    createFlightController,
    updateFlightController,
    deleteFlightController
} = require('../src/controller/flight/index');

const makeExpressCallback = require('../src/express-callback/express-callback')

router.get("/flight", makeExpressCallback(getFlightController))
      .get("/flight/:id", makeExpressCallback(getFlightByIdController))
      .post("/flight", makeExpressCallback(createFlightController))
      .patch("/flight/:id", makeExpressCallback(updateFlightController))
      .patch("/flight/delete/:id", makeExpressCallback(deleteFlightController))

module.exports = router;