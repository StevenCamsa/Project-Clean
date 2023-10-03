const express = require('express');
const router = express.Router();

const {
    getMemberController,
    getMemberByIdController,
    createMemberController,
    updateMemberController,
    deleteMemberController
} = require('../src/controller/member/index');

const makeExpressCallback = require('../src/express-callback/express-callback')

router.get("/member", makeExpressCallback(getMemberController))
      .get("/member/:id", makeExpressCallback(getMemberByIdController))
      .post("/member", makeExpressCallback(createMemberController))
      .patch("/member/:id", makeExpressCallback(updateMemberController))
      .patch("/member/delete/:id", makeExpressCallback(deleteMemberController))

module.exports = router;