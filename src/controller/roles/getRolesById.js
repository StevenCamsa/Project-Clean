const getRolesByIdController = ({ getRolesByIdUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const role_id = httpRequest.params.id
            const roles = await getRolesByIdUseCase(role_id);
          
   
            return {
                headers,
                statusCode: 200,
                body: 
                    roles
                
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

module.exports = getRolesByIdController;