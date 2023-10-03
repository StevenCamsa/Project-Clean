const express = require('express');
const router = express.Router();

const {
    getUserController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController,
    loginUserController
} = require('../src/controller/users/index');

const makeExpressCallback = require('../src/express-callback/express-callback')

router.post("/login", makeExpressCallback(loginUserController))

router.get("/user", makeExpressCallback(getUserController))
      .get("/user/:id", makeExpressCallback(getUserByIdController))
      .post("/user", makeExpressCallback(createUserController))
      .patch("/user/:id",makeExpressCallback(updateUserController))
      .patch("/user/delete/:id",makeExpressCallback(deleteUserController))

module.exports = router;