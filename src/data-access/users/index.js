const db = require("../../../config/db");
const userQuery = require("./user.js");

const userdb = userQuery({db});

module.exports = userdb;
