const{makeMember} = require('../../entity/member/index');

const createMember = ({ memberdb }) => {
    return async function create(memberInfo) {
        const member = makeMember(memberInfo);

        const { user_id} = memberInfo

        const exists = await memberdb.isExisting( user_id)
        .catch(e=>console.log(e))
    
        if(exists.rowCount > 0){
            throw new Error("You Are Already in a Group")
        }

        const result = await memberdb.createMember({
            group_id: member.getGroupId(),
            user_id: member.getUserId()
        })
        .catch(e => console.log(e));

        if (result) {
            return {message: "You Have The Join Group ", result}
        } else {
            throw new Error("Join failed")
        }
    };
}

module.exports = createMember