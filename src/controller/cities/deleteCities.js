const deleteCitiesController = ({ deleteCitiesUsecase }) => {
    return async function patch(httpRequest) {
        try {

            const city_id = httpRequest.params.id;
            const city = await deleteCitiesUsecase({city_id})
            
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: city
                
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

module.exports = deleteCitiesController;