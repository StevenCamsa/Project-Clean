const rolesdb = require("../../data-access/roles/index.js");


const getRoles = require("./getRoles.js");
const getRolesById = require("./getRoleById.js");
const createRoles = require("./createRole.js");
const updateRoles = require("./updateRole.js");
const deleteRoles = require("./deleteRole.js");

const makeRolesEntity = require("../../entity/roles/index.js");
const editRolesEntity = require('../../entity/roles/index.js');

const getRolesUseCase = getRoles({rolesdb});
const getRolesByIdUseCase = getRolesById({rolesdb});
const createRolesUseCase = createRoles({makeRolesEntity, rolesdb});
const updateRolesUseCase = updateRoles({editRolesEntity, rolesdb});
const deleteRolesUseCase = deleteRoles({rolesdb});



const services = Object.freeze({
    getRolesUseCase,
    getRolesByIdUseCase,
    createRolesUseCase,
    updateRolesUseCase,
    deleteRolesUseCase
})

module.exports = services;
module.exports = {
    getRolesUseCase,
    getRolesByIdUseCase,
    createRolesUseCase,
    updateRolesUseCase,
    deleteRolesUseCase
};