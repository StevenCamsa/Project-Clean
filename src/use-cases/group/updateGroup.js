const{editGroup} = require('../../entity/group/index')

const updateGroup = ({ groupdb }) => {
    return async function put({ group_id, ...info } = {}) {
        const result = editGroup(info);

        const results = await groupdb.updateGroup({
            group_id: group_id,
            group_name: result.getGroupName(),
            city_id: result.getCityId(),
            country_id: result.getCountryId()  
        });
       
        if (results) {
            return {message: "Group Updated Successfully", results}
        } else {
            throw new Error("Group Not Updated")
        }
    };
};

module.exports = updateGroup;