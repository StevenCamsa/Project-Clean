const db = require("../../../config/db");
const rolesQuery = require("./roles");

const rolesdb = rolesQuery({db});

module.exports = rolesdb;
