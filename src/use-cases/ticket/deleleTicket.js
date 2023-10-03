const deleteTicket = ({ ticketdb }) => {
    return async function patch({ ticket_id } = {}) {
        const results = await ticketdb.deleteTicket(ticket_id)
        .catch(e => console.log("error", e));
       
        if (results) {
            return {message: "Ticket Deleted Successfully", results}
        } else {
            throw new Error("Ticket not deleted")
        }
    };
};

module.exports = deleteTicket;