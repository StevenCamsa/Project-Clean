const getTicketByUserController = ({ getTicketByUserUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const user_id = httpRequest.params.id
            const ticket = await getTicketByUserUseCase(user_id);
          
   
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

module.exports = getTicketByUserController;