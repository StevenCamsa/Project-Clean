const ticketdb = require("../../data-access/ticket/index.js");

const getTicket = require("./getTicket.js");
const getTicketById = require("./getTicketById.js");
const getTicketByUser = require("./getTicketByUser.js");
const createTicket = require("./createTicket.js");
const updateTicket = require("./updateTicket.js");
const deleteTicket = require("./deleleTicket.js");


const makeTicketEntity = require("../../entity/ticket/index.js");
const editTicketEntity = require('../../entity/ticket/index.js');

const getTicketUseCase = getTicket({ticketdb});
const getTicketByIdUseCase = getTicketById({ticketdb});
const getTicketByUserUseCase = getTicketByUser({ticketdb});
const createTicketUseCase = createTicket({makeTicketEntity, ticketdb});
const updateTicketUseCase = updateTicket({editTicketEntity, ticketdb});
const deleteTicketUseCase = deleteTicket({ticketdb});


const services = Object.freeze({
    getTicketUseCase,
    getTicketByIdUseCase,
    getTicketByUserUseCase,
    createTicketUseCase,
    updateTicketUseCase,
    deleteTicketUseCase
})

module.exports = services;
module.exports = {
    getTicketUseCase,
    getTicketByIdUseCase,
    getTicketByUserUseCase,
    createTicketUseCase,
    updateTicketUseCase,
    deleteTicketUseCase
};