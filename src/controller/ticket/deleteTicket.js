const deleteTicketController = ({ deleteTicketUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const ticket_id = httpRequest.params.id;
            const ticket = await deleteTicketUseCase({ticket_id})
            
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: ticket
                
            };
        } catch (error) {
            console.log(error);
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 400,
                body: {
                    error: error.message
                }
            };
        }
    };
};

module.exports = deleteTicketController;