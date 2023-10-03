const memberdb = require("../../data-access/member/index.js");

const getMembers = require("./getMember");
const getMemberById = require("./getMemberById");
const createMember = require("./createMember");
const updateMember = require("./updateMember");
const deleteMember = require("./deleteMember");

const makeMemberEntity = require("../../entity/member/index.js");
const editMemberEntity = require("../../entity/member/index.js");

const getMemberUseCase = getMembers({ memberdb });
const getMemberByIdUseCase = getMemberById({ memberdb });
const createMemberUseCase = createMember({makeMemberEntity, memberdb });
const updateMemberUseCase = updateMember({editMemberEntity, memberdb });
const deleteMemberUseCase = deleteMember({ memberdb });

const services = Object.freeze({
    getMemberUseCase,
    getMemberByIdUseCase,
    createMemberUseCase,
    updateMemberUseCase,
    deleteMemberUseCase
});

module.exports = services;
module.exports = { 
    getMemberUseCase, 
    getMemberByIdUseCase, 
    createMemberUseCase, 
    updateMemberUseCase, 
    deleteMemberUseCase
};

