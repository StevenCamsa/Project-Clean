const deleteFlightController = ({ deleteFlightUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const flight_id = httpRequest.params.id;
            const flight = await deleteFlightUseCase({flight_id})
            
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: flight
                
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

module.exports = deleteFlightController