const getUserByIdController = ({ getUserByIdUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const user_id = httpRequest.params.id
            const user = await getUserByIdUseCase(user_id);
   
            return {
                headers,
                statusCode: 200,
                body: 
                    user
                
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

module.exports = getUserByIdController;