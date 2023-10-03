const getCitiesByIdController = ({ getCitiesIDUsecase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const city_id = httpRequest.params.id
            const city = await getCitiesIDUsecase(city_id);
          
   
            return {
                headers,
                statusCode: 200,
                body: 
                    city
                
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

module.exports = getCitiesByIdController;