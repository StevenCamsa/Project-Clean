const express = require('express');
const router = express.Router();

const {
    getGroupController,
    getGroupByIdController,
    createGroupController,
    updateGroupController,
    deleteGroupController
} = require('../src/controller/group/index');

const makeExpressCallback = require('../src/express-callback/express-callback')

router.get("/group", makeExpressCallback(getGroupController))
        .get("/group/:id", makeExpressCallback(getGroupByIdController))
        .post("/group", makeExpressCallback(createGroupController))
        .patch("/group/:id", makeExpressCallback(updateGroupController))
        .patch("/group/delete/:id", makeExpressCallback(deleteGroupController))

module.exports = router;