const getGroupByIdController = ({ getGroupByIdUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const group_id = httpRequest.params.id
            const group = await getGroupByIdUseCase(group_id);
          
   
            return {
                headers,
                statusCode: 200,
                body: 
                    group
                
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

module.exports = getGroupByIdController;