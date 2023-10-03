const deleteUsers = ({ userdb }) => {
    return async function patch({ user_id } = {}) {
        const results = await userdb.deleteUser(user_id)
        .catch(e => console.log("error", e));
       
        if (results) {
            return {message: "User Deleted Successfully", results}
        } else {
            throw new Error("User not deleted")
        }
    };
};

module.exports = deleteUsers;