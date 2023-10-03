const {editUser} = require('../../entity/users/index.js');

const updateUsers = ({ userdb }) => {
    return async function put({ user_id, ...info } = {}) {
        const result = editUser(info);

        const results = await userdb.updateUser({
            user_id: user_id,
            fname: result.getFirstName(),
            lname: result.getLastName(),
            age: result.getAge(),
            username: result.getUsername(),
            password: result.getPassword(),
            role_id: result.getRole(),
            
        });
       
        if (results) {
            return {message: "User Updated Successfully", results}
        } else {
            throw new Error("User Not Updated")
        }
    };
};

module.exports = updateUsers;