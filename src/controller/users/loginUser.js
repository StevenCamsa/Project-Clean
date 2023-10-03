const LoginUserController = ({ loginUserUseCase }) => {
    return async function post(httpRequest) {
        try {


            const { username, password } = httpRequest.body;

            const user = await loginUserUseCase({ username, password });


            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 201,
                body:  user 
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

module.exports = LoginUserController;