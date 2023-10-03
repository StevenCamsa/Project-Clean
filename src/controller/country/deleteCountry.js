const deleteCountryController = ({ deleteCountryUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const country_id = httpRequest.params.id;
            const country = await deleteCountryUseCase({country_id})
            
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: country
                
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

module.exports = deleteCountryController;