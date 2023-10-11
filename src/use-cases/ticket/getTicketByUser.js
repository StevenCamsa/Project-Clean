const getTicketUser = ({ticketdb}) =>{
    return async function get(user_id) {

        const result = await ticketdb.getTicketByUser(user_id)
        
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getTicketUser