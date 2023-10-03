const makeTicketEntity = require('./createTicket');
const editTicketEntity = require('./updateTicket');

const makeTicket = makeTicketEntity();
const editTicket = editTicketEntity();

module.exports = {makeTicket, editTicket};