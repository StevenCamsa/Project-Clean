const makeUserEntity = require('./createUser.js');
const editUserEntity = require('./editUser.js');
const loginUserEntity = require('./loginUser.js');

const makeUser = makeUserEntity();
const editUser = editUserEntity();
const loginUser = loginUserEntity();

module.exports = {makeUser, editUser, loginUser};