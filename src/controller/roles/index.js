const {
    getRolesUseCase,
    getRolesByIdUseCase,
    createRolesUseCase,
    updateRolesUseCase,
    deleteRolesUseCase
} = require('../../use-cases/roles/index.js');

const getRoles = require('./getRoles.js');
const getRolesById = require('./getRolesById.js');
const createRoles = require('./createRoles.js');
const updateRoles = require('./updateRoles.js');
const deleteRoles = require('./deleteRoles.js');

const getRolesController = getRoles({getRolesUseCase});
const getRolesByIdController = getRolesById({getRolesByIdUseCase});
const createRolesController = createRoles({createRolesUseCase});
const updateRolesController = updateRoles({updateRolesUseCase});
const deleteRolesController = deleteRoles({deleteRolesUseCase});

const controller = Object.freeze({
    getRolesController,
    getRolesByIdController,
    createRolesController,
    updateRolesController,
    deleteRolesController
})

module.exports = controller
module.exports = {
    getRolesController,
    getRolesByIdController,
    createRolesController,
    updateRolesController,
    deleteRolesController
}