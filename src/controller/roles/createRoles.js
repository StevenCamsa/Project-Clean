const createRolesController = ({ createRolesUseCase }) => {
    return async function post(httpRequest) {
        try {
            const info = httpRequest.body;
      

            const data = await createRolesUseCase(info);

            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 201,
                body:  data 
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

module.exports = createRolesController;