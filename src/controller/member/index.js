const {
    getMemberUseCase,
    getMemberByIdUseCase,
    createMemberUseCase,
    updateMemberUseCase,
    deleteMemberUseCase
} = require('../../use-cases/member/index.js');

const getMembers = require('./getMember');
const getMemberById = require('./getMemberById');
const createMember = require('./createMember');
const updateMember = require('./updateMember');
const deleteMember = require('./deleteMember');

const getMemberController = getMembers({getMemberUseCase});
const getMemberByIdController = getMemberById({getMemberByIdUseCase});
const createMemberController = createMember({createMemberUseCase});
const updateMemberController = updateMember({updateMemberUseCase});
const deleteMemberController = deleteMember({deleteMemberUseCase});

const controller = Object.freeze({
    getMemberController,
    getMemberByIdController,
    createMemberController,
    updateMemberController,
    deleteMemberController
})

module.exports = controller
module.exports = {
    getMemberController,
    getMemberByIdController,
    createMemberController,
    updateMemberController,
    deleteMemberController
}

