const db = require("../../../config/db");
const groupQuery = require("./group");

const groupdb = groupQuery({db});

module.exports = groupdb;
