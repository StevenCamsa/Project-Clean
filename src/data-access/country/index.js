const db = require("../../../config/db");
const countryQuery = require("./country");

const countrydb = countryQuery({db});

module.exports = countrydb;
