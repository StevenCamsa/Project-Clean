const {editMember} = require('../../entity/member/index');

const updateMember = ({ memberdb }) => {
    return async function put({ member_id, ...info } = {}) {
        const result = editMember(info);

        const results = await memberdb.updateMember({
            member_id: member_id,
            user_id: result.getUserId(),
            group_id: result.getGroupId(),
        });
       
        if (results) {
            return {message: "Member Updated Successfully", results}
        } else {
            throw new Error("Member Not Updated")
        }
    };
};

module.exports = updateMember;