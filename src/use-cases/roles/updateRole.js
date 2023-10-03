const {editRoles} = require('../../entity/roles/index');

const updateRoles = ({ rolesdb }) => {
    return async function put({ role_id, ...info } = {}) {
        const result = editRoles(info);

        const results = await rolesdb.updateRoles({
            role_id: role_id,
            role:result.getRoles(),  
        });
       
        if (results) {
            return {message: "Role Updated Successfully", results}
        } else {
            throw new Error("Role Not Updated")
        }
    };
};

module.exports = updateRoles;