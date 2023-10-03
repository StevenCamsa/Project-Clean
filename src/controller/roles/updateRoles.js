const updateRolesController = ({ updateRolesUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const { ...info } = httpRequest.body;

            const role = await updateRolesUseCase({
                ...info,
                role_id: httpRequest.params.id
            });
            

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

module.exports = updateRolesController;