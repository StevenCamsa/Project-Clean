const editRolesEntity = () => {
    return function edit({
        role

    } = {}) {
        if (!role) {
            throw new Error("Please Enter Roles.")
        }

        return Object.freeze({
           getRoles: () => role,

 
        });
    };
};

module.exports = editRolesEntity;