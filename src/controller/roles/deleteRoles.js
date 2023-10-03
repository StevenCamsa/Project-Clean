const deleteRolesController = ({ deleteRolesUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const role_id = httpRequest.params.id;
            const role = await deleteRolesUseCase({role_id})
            
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: role
                
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

module.exports = deleteRolesController;