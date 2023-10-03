const getFlightController = ({ getFlightUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
            const flight = await getFlightUseCase();
   
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

module.exports = getFlightController;