const updateTicketEntity = () => {
    return function edit({

        user_id,


    } = {}) {

        if (!user_id) {
            throw new Error("Please Enter User.")
        }

        return Object.freeze({
            getUserId: () => user_id,

        });
    };
};

module.exports = updateTicketEntity;