const getFlightByIdController = ({ getFlightByIdUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const flight_id = httpRequest.params.id
            const flight = await getFlightByIdUseCase(flight_id);
          
   
            return {
                headers,
                statusCode: 200,
                body: 
                    flight
                
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

module.exports = getFlightByIdController;