const getTicket = ({ ticketdb }) => {
    return async function get(){
        return await ticketdb.getTicket();
    };
    
};

module.exports = getTicket;