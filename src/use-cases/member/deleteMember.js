const deleteMember = ({ memberdb }) => {
    return async function patch({ member_id } = {}) {
        const results = await memberdb.deleteMember(member_id)
        .catch(e => console.log("error", e));
       
        if (results) {
            return {message: "Member Deleted Successfully", results}
        } else {
            throw new Error("Member not deleted")
        }
    };
};

module.exports = deleteMember;