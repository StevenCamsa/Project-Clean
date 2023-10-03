const updateFlightController = ({ updateFlightUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const { ...info } = httpRequest.body;

            const flight = await updateFlightUseCase({
                ...info,
                flight_id: httpRequest.params.id
            });
            
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

module.exports = updateFlightController;