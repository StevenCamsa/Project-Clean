const userdb = require("../../data-access/users/index.js");
const generateToken = require("../../../middleware/token.js");


const getUser = require("./getUser.js");
const getUserID = require("./getUserById.js");
const createUser = require('./createUser.js');
const updateUser = require('./editUser.js');
const deleteUser = require('./deleteUser.js');
const loginUser = require('./loginUser.js');

const makeUserEntity = require("../../entity/users/index.js");
const editUserEntity = require('../../entity/users/index.js');
const loginUserEntity = require('../../entity/users/index.js');

const getUserUseCase = getUser({userdb});
const getUserByIdUseCase = getUserID({userdb});
const createUserUseCase = createUser({makeUserEntity,userdb});
const updateUserUseCase = updateUser({editUserEntity,userdb});
const deleteUserUseCase = deleteUser({userdb});
const loginUserUseCase = loginUser({generateToken,loginUserEntity,userdb});




const services = Object.freeze({
    getUserUseCase,
    getUserByIdUseCase,
    createUserUseCase,
    updateUserUseCase,
    deleteUserUseCase,
    loginUserUseCase
})

module.exports = services;
module.exports = {
    getUserUseCase,
    getUserByIdUseCase,
    createUserUseCase,
    updateUserUseCase,
    deleteUserUseCase,
    loginUserUseCase
};