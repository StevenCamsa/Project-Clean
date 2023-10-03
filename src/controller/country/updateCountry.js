const updateCountryController = ({ updateCountryUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const { ...info } = httpRequest.body;

            const country = await updateCountryUseCase({
                ...info,
                country_id: httpRequest.params.id
            });
            

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

module.exports = updateCountryController;