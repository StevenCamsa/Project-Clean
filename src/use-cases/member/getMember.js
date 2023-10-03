const getMembers = ({ memberdb }) => {
    return async function get(){
        return await memberdb.getMember();
    };
    
};

module.exports = getMembers;