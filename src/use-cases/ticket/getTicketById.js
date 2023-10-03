const getTicketID = ({ticketdb}) =>{
    return async function get(ticket_id) {

        const result = await ticketdb.getTicketById(ticket_id)
        
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getTicketID