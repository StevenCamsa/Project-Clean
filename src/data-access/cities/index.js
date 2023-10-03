const db = require("../../../config/db");
const citiesQuery = require("./cities");

const citiesdb = citiesQuery({db});

module.exports = citiesdb;
