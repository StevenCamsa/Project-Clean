const {makeUser} = require("../../entity/users/index.js");

const createUser = ({ userdb }) => {
    return async function create(userInfo) {
        const user = makeUser(userInfo);

        const {username} = userInfo

        const exists = await userdb.isExisting(username)
        .catch(e=>console.log(e))

        if(exists.rowCount > 0){
            throw new Error("Username already exists")
        }

        const result = await userdb.createUser({
            fname: user.getFirstName(),
            lname: user.getLastName(),
            age: user.getAge(),
            username: user.getUsername(),
            password: user.getPassword()
        })
        .catch(e => console.log(e));

        if (result) {
            return {message: "User Created Successfully", result}
        } else {
            throw new Error("User Not Created")
        }
    };
}

module.exports = createUser