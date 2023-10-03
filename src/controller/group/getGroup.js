const getGroupController = ({ getGroupUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
            const group = await getGroupUseCase();
   
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

module.exports = getGroupController;