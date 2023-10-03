const getCountryController = ({ getCountryUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
            const country = await getCountryUseCase();
   
            return {
                headers,
                statusCode: 200,
                body: 
                    country
                
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

module.exports = getCountryController;