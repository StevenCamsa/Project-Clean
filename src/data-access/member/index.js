const db = require("../../../config/db");
const memberQuery = require("./member");

const memberdb = memberQuery({db});

module.exports = memberdb;
