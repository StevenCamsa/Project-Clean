const deleteUserController = ({ deleteUserUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const user_id = httpRequest.params.id;
            const user = await deleteUserUseCase({user_id})
            
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: user
                
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

module.exports = deleteUserController;