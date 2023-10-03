const db = require("../../../config/db");
const ticketQuery = require("./ticket");

const ticketdb = ticketQuery({db});

module.exports = ticketdb;
