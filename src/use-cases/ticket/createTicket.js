const {makeTicket} = require("../../entity/ticket/index.js");
const moment = require('moment')

const createTicket = ({ ticketdb }) => {
    return async function create(ticketInfo) {
        const ticket = makeTicket(ticketInfo);

        const {user_id, date} = ticketInfo

        const exists = await ticketdb.isExisting(user_id)
        .catch(e=>console.log(e))

        if(exists.rowCount > 0){
            throw new Error("User already has booked a ticket")
        }
        const formattedDate = moment(date).format('YYYY-MM-DD');
        const result = await ticketdb.createTicket({

            user_id: ticket.getUserId(),
            seat_no: generateSeatNo(),
            date:formattedDate,
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