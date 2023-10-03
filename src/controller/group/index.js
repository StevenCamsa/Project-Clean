const{
    getGroupUseCase,
    getGroupByIdUseCase,
    createGroupUseCase,
    updateGroupUseCase,
    deleteGroupUseCase
} = require('../../use-cases/group/index.js');

const getGroup = require('./getGroup.js');
const getGroupById = require('./getGroupById.js');
const createGroup = require('./createGroup.js');
const updateGroup = require('./updateGroup.js');
const deleteGroup = require('./deleteGroup.js');

const getGroupController = getGroup({getGroupUseCase});
const getGroupByIdController = getGroupById({getGroupByIdUseCase});
const createGroupController = createGroup({createGroupUseCase});
const updateGroupController = updateGroup({updateGroupUseCase});
const deleteGroupController = deleteGroup({deleteGroupUseCase});

const controller = Object.freeze({
    getGroupController,
    getGroupByIdController,
    createGroupController,
    updateGroupController,
    deleteGroupController
})

module.exports = controller
module.exports = {
    getGroupController,
    getGroupByIdController,
    createGroupController,
    updateGroupController,
    deleteGroupController
}

