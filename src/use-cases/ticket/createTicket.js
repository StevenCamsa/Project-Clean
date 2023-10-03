const {makeTicket} = require("../../entity/ticket/index.js");
const moment = require('moment')

const createTicket = ({ ticketdb }) => {
    return async function create(ticketInfo) {
        const ticket = makeTicket(ticketInfo);

        const {member_id, departure_time, date} = ticketInfo

        const exists = await ticketdb.isExisting(member_id)
        .catch(e=>console.log(e))

        if(exists.rowCount > 0){
            throw new Error("Member already has booked a ticket")
        }
        const formattedDepartureTime = moment(departure_time).format('YYYY-DD-MM');
        const formattedDate = moment(date).format('YYYY-DD-MM');

        const result = await ticketdb.createTicket({
            city_id: ticket.getCityId(),
            country_id: ticket.getCountryId(),
            member_id: ticket.getMemberId(),
            seat_no: generateSeatNo(),
            departure_time: formattedDepartureTime,
            date:formattedDate,
            flight_id: ticket.getFlightId()
        })
        .catch(e => console.log(e));

        if (result) {
            return {message: "Ticket Created Successfully", result}
        } else {
            throw new Error("Ticket Not Created")
        }

        
    };
}

function generateSeatNo() {
    const seatCode = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

    const randomSeatCode = Math.floor(Math.random() * seatCode.length)
    const seatLetter = seatCode[randomSeatCode]

    const minSeatNo = 1
    const maxSeatNo = 50
    const seatNo = Math.floor(Math.random() * (maxSeatNo - minSeatNo + 1)) + minSeatNo

    return `${seatLetter}${seatNo}`
}
module.exports = createTicket