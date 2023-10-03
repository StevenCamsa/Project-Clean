const {
    getTicketUseCase,
    getTicketByIdUseCase,
    createTicketUseCase,
    updateTicketUseCase,
    deleteTicketUseCase
} = require('../../use-cases/ticket/index.js');

const getTicket = require('./getTicket.js');
const getTicketById = require('./getTicketById.js');
const createTicket = require('./createTicket.js');
const updateTicket = require('./updateTicket.js');
const deleteTicket = require('./deleteTicket.js');

const getTicketController = getTicket({getTicketUseCase});
const getTicketByIdController = getTicketById({getTicketByIdUseCase});
const createTicketController = createTicket({createTicketUseCase});
const updateTicketController = updateTicket({updateTicketUseCase});
const deleteTicketController = deleteTicket({deleteTicketUseCase});

const controller = Object.freeze({
    getTicketController,
    getTicketByIdController,
    createTicketController,
    updateTicketController,
    deleteTicketController
})

module.exports = controller
module.exports = {
    getTicketController,
    getTicketByIdController,
    createTicketController,
    updateTicketController,
    deleteTicketController
}