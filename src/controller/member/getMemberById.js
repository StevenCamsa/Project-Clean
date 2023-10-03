const getMemberByIdController = ({ getMemberByIdUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try{
        
            const member_id = httpRequest.params.id
            const member = await getMemberByIdUseCase(member_id);
          
   
            return {
                headers,
                statusCode: 200,
                body: 
                    member
                
            };

        } catch (error) {
            console.log(error);

            return {
                headers,
                statusCode: 400,
                body: {
                    error: error.message
                }
            };
        }
    };
};

module.exports = getMemberByIdController;