const deleteGroup = ({ groupdb }) => {
    return async function patch({ group_id } = {}) {
        const results = await groupdb.deleteGroup(group_id)
        .catch(e => console.log("error", e));
       
        if (results) {
            return {message: "Group Deleted Successfully", results}
        } else {
            throw new Error("Group not deleted")
        }
    };
};

module.exports = deleteGroup;