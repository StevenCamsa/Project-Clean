const getTicketByIdController = ({ getTicketByIdUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const ticket_id = httpRequest.params.id
            const ticket = await getTicketByIdUseCase(ticket_id);
          
   
            return {
                headers,
                statusCode: 200,
                body: 
                    ticket
                
            };

        } catch (error) {
            console.log(error);

            return {
                headers,
                statusCode: 400,
                body: {
                    error: error.message
                }
            };
        }
    };
};

module.exports = getTicketByIdController;