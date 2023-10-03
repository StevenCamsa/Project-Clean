const getTicketController = ({ getTicketUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
            const ticket = await getTicketUseCase();
   
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

module.exports = getTicketController;