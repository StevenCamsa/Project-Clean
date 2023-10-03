const getRoles = ({ rolesdb }) => {
    return async function get(){
        return await rolesdb.getRoles();
    };
    
};

module.exports = getRoles;