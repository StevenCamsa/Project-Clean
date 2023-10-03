const updateGroupController = ({ updateGroupUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const { ...info } = httpRequest.body;

            const group = await updateGroupUseCase({
                ...info,
                group_id: httpRequest.params.id
            });
            

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

module.exports = updateGroupController;