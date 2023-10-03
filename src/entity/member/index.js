const makeMemberEntity = require('./createMember');
const editMemberEntity = require('./updateMember');

const makeMember = makeMemberEntity();
const editMember = editMemberEntity();

module.exports = {makeMember, editMember};