const makeRolesEntity = require('./createRoles');
const editRolesEntity = require('./editRoles');

const makeRoles = makeRolesEntity();
const editRoles = editRolesEntity();

module.exports = {makeRoles, editRoles};