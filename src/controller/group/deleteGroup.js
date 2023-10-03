const deleteGroupController = ({ deleteGroupUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const group_id = httpRequest.params.id;
            const group = await deleteGroupUseCase({group_id})
            
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: group
                
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

module.exports = deleteGroupController;