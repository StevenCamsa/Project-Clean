const express = require('express');
const router = express.Router();

const {
    getRolesController,
    getRolesByIdController,
    createRolesController,
    updateRolesController,
    deleteRolesController
} = require('../src/controller/roles/index');

const makeExpressCallback = require('../src/express-callback/express-callback')

router.get("/roles", makeExpressCallback(getRolesController))
      .get("/roles/:id", makeExpressCallback(getRolesByIdController))
      .post("/roles", makeExpressCallback(createRolesController))
      .patch("/roles/:id", makeExpressCallback(updateRolesController))
      .patch("/roles/delete/:id", makeExpressCallback(deleteRolesController))


module.exports = router;