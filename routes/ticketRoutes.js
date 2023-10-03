const express = require('express');
const router = express.Router();

const {
    getTicketController,
    getTicketByIdController,
    createTicketController,
    updateTicketController,
    deleteTicketController
} = require('../src/controller/ticket/index');

const makeExpressCallback = require('../src/express-callback/express-callback')

router.get("/ticket", makeExpressCallback(getTicketController))
      .get("/ticket/:id", makeExpressCallback(getTicketByIdController))
      .post("/ticket", makeExpressCallback(createTicketController))
      .patch("/ticket/:id", makeExpressCallback(updateTicketController))
      .patch("/ticket/delete/:id", makeExpressCallback(deleteTicketController))

module.exports = router;