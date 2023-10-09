const {editTicket} = require('../../entity/ticket/index.js');
const moment = require('moment')

const updateTicket = ({ ticketdb }) => {
    return async function put({ ticket_id, ...info } = {}) {
        const result = editTicket(info);

        const { departure_time, date} = info

        const formattedDepartureTime = moment(departure_time).format('YYYY-DD-MM');
        const formattedDate = moment(date).format('YYYY-DD-MM'); 

        const results = await ticketdb.updateTicket({
            ticket_id: ticket_id,
            city_id: result.getCityId(),
            country_id: result.getCountryId(),
            user_id: result.getUserId(),
            departure_time: formattedDepartureTime,
            date: formattedDate,
            flight_id: result.getFlightId()
        });
       
        if (results) {
            return {message: "Ticket Updated Successfully", results}
        } else {
            throw new Error("Ticket Not Updated")
        }
    };
};

module.exports = updateTicket;