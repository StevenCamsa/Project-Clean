const {
    getTicketUseCase,
    getTicketByIdUseCase,
    getTicketByUserUseCase,
    createTicketUseCase,
    updateTicketUseCase,
    deleteTicketUseCase
} = require('../../use-cases/ticket/index.js');

const getTicket = require('./getTicket.js');
const getTicketById = require('./getTicketById.js');
const getTicketByUser = require('./getTicketByUser.js');
const createTicket = require('./createTicket.js');
const updateTicket = require('./updateTicket.js');
const deleteTicket = require('./deleteTicket.js');

const getTicketController = getTicket({getTicketUseCase});
const getTicketByIdController = getTicketById({getTicketByIdUseCase});
const getTicketByUserController = getTicketByUser({getTicketByUserUseCase});
const createTicketController = createTicket({createTicketUseCase});
const updateTicketController = updateTicket({updateTicketUseCase});
const deleteTicketController = deleteTicket({deleteTicketUseCase});

const controller = Object.freeze({
    getTicketController,
    getTicketByIdController,
    getTicketByUserController,
    createTicketController,
    updateTicketController,
    deleteTicketController
})

module.exports = controller
module.exports = {
    getTicketController,
    getTicketByIdController,
    getTicketByUserController,
    createTicketController,
    updateTicketController,
    deleteTicketController
}