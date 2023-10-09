const {editTicket} = require('../../entity/ticket/index.js');
const moment = require('moment')

const updateTicket = ({ ticketdb }) => {
    return async function put({ ticket_id, ...info } = {}) {
        const result = editTicket(info);

        const { date} = info

        const formattedDate = moment(date).format('YYYY-DD-MM'); 

        const results = await ticketdb.updateTicket({
            ticket_id: ticket_id,
            user_id: result.getUserId(),
            date: formattedDate,

        });
       
        if (results) {
            return {message: "Ticket Updated Successfully", results}
        } else {
            throw new Error("Ticket Not Updated")
        }
    };
};

module.exports = updateTicket;