const makeUpdateEntity = () => {
    return function make({
        user_id,
        group_id

    } = {}) {

        if (!group_id) {
            throw new Error("Please Enter Group.")
        }


        return Object.freeze({
            getUserId: () => user_id,
            getGroupId: () => group_id

        });
    };
};

module.exports = makeUpdateEntity;