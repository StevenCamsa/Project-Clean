const updateUserController = ({ updateUserUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const { ...info } = httpRequest.body;

            const user = await updateUserUseCase({
                ...info,
                user_id: httpRequest.params.id
            });
            

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

module.exports = updateUserController;