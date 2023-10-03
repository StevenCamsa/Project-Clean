const {
    getUserUseCase,
    getUserByIdUseCase,
    createUserUseCase,
    updateUserUseCase,
    deleteUserUseCase,
    loginUserUseCase
} = require('../../use-cases/users/index.js');


const getUser = require('./getUser');
const getUserById = require('./getUserByID');
const createUser = require('./createUser');
const updateUser = require('./editUser');
const deleteUser = require('./deleteUser');
const loginUser = require('./loginUser.js')

const getUserController = getUser({getUserUseCase});
const getUserByIdController = getUserById({getUserByIdUseCase});
const createUserController = createUser({createUserUseCase});
const updateUserController = updateUser({updateUserUseCase});
const deleteUserController = deleteUser({deleteUserUseCase});
const loginUserController = loginUser({loginUserUseCase});

const controller = Object.freeze({
    getUserController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController,
    loginUserController
})

module.exports = controller
module.exports = {
    getUserController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController,
    loginUserController
}