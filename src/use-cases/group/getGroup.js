const getGroup = ({ groupdb }) => {
    return async function get(){
        return await groupdb.getGroup();
    };
    
};

module.exports = getGroup;