const groupdb = require("../../data-access/groups/index.js");
const citiesdb = require("../../data-access/cities/index.js");
const countrydb = require("../../data-access/country/index.js");

const getGroup = require("./getGroup");
const getGroupById = require("./getGroupById");
const createGroup = require("./createGroup");
const updateGroup = require("./updateGroup");
const deleteGroup = require("./deleteGroup");

const makeGroupEntity = require("../../entity/group/index.js");
const editGroupEntity = require("../../entity/group/index.js");

const getGroupUseCase = getGroup({ groupdb });
const getGroupByIdUseCase = getGroupById({ groupdb });
const createGroupUseCase = createGroup({makeGroupEntity, groupdb, citiesdb, countrydb });
const updateGroupUseCase = updateGroup({editGroupEntity, groupdb , citiesdb, countrydb });
const deleteGroupUseCase = deleteGroup({ groupdb });

const services = Object.freeze({
    getGroupUseCase,
    getGroupByIdUseCase,
    createGroupUseCase,
    updateGroupUseCase,
    deleteGroupUseCase
});

module.exports = services;
module.exports = { 
    getGroupUseCase, 
    getGroupByIdUseCase, 
    createGroupUseCase, 
    updateGroupUseCase, 
    deleteGroupUseCase
};

