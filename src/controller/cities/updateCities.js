const updateCitiesController = ({ updateCitiesUsecase }) => {
    return async function patch(httpRequest) {
        try {

            const { ...info } = httpRequest.body;

            const city = await updateCitiesUsecase({
                ...info,
                city_id: httpRequest.params.id
            });
            

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

module.exports = updateCitiesController;