const makeRolesEntity = () => {
    return function make({
        role

    } = {}) {
        if (!role) {
            throw new Error("Please Enter Roles.")
        }

        return Object.freeze({
           getRoles: () => role

 
        });
    };
};

module.exports = makeRolesEntity;