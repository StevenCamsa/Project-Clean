const deleteMemberController = ({ deleteMemberUseCase }) => {
    return async function patch(httpRequest) {
        try {

            const member_id = httpRequest.params.id;
            const member = await deleteMemberUseCase({member_id})
            
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

module.exports = deleteMemberController;