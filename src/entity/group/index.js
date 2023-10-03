const makeGroupEntity = require('./createGroup');
const editGroupEntity = require('./editGroup');

const makeGroup = makeGroupEntity();
const editGroup = editGroupEntity();

module.exports = {makeGroup, editGroup};