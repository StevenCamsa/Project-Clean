const {loginUser} = require("../../entity/users/index.js");


const loginUsers = ({ userdb, generateToken }) => {
    return async function create(userInfo) {
        
        const user = loginUser(userInfo);

        const {username, password} = userInfo

        const exists = await userdb.isExisting(username)
        .catch(e=>console.log(e))

        if(exists.rowCount == 0){
            throw new Error("Username does not exists")
        }

        const result = await userdb.login({
            username: user.getUsername(),
            password: user.getPassword()
        })
        .catch(e => console.log(e));

        const res = result.rows 
        const token = generateToken(res)

        if(result.rowCount == 0){
            throw new Error("Incorrect Password")
        }

        if(result.rowCount > 0){
            return {message: "User Login Successfully", res,token:token}
        }else {
            throw new Error("Login Failed")
        }
    };
}

module.exports = loginUsers