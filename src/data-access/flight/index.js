const db = require("../../../config/db");
const flightQuery = require("./flight");

const  flightdb = flightQuery({db});

module.exports = flightdb;
