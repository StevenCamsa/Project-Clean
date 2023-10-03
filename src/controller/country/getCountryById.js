const getCountryByIdController = ({ getCountryByIdUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const country_id = httpRequest.params.id
            const country = await getCountryByIdUseCase(country_id);
          
   
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

module.exports = getCountryByIdController;