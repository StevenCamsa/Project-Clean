const updateMemberController = ({ updateMemberUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const { ...info } = httpRequest.body;

            const member = await updateMemberUseCase({
                ...info,
                member_id: httpRequest.params.id
            });
            

            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: member
                
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

module.exports = updateMemberController;