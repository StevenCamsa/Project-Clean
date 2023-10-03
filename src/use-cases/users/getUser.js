const getUser = ({ userdb }) => {
    return async function get(){
        return await userdb.getUsers();
    };
    
};

module.exports = getUser;