const deleteRoles = ({ rolesdb }) => {
    return async function patch({ role_id } = {}) {
        const results = await rolesdb.deleteRoles(role_id)
        .catch(e => console.log("error", e));
       
        if (results) {
            return {message: "Role Deleted Successfully", results}
        } else {
            throw new Error("Role not deleted")
        }
    };
};

module.exports = deleteRoles;