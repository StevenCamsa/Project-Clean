const {makeRoles} = require("../../entity/roles/index.js");

const createRoles = ({ rolesdb }) => {
    return async function create(roleInfo) {
        const roles = makeRoles(roleInfo);

        const {role} = roleInfo

        const exists = await rolesdb.isExisting(role)
        .catch(e=>console.log(e))

        if(exists.rowCount > 0){
            throw new Error("Role already exists")
        }

        const result = await rolesdb.createRoles({
            role: roles.getRoles(),

        })
        .catch(e => console.log(e));

        if (result) {
            return {message: "Role Created Successfully", result}
        } else {
            throw new Error("Role Not Created")
        }
    };
}

module.exports = createRoles