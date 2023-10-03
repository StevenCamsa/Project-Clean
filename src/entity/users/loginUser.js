const loginUserEntity = () => {
    return function make({
        username,
        password

    } = {}) {

        if (!username && !password) {
            throw new Error("Username and Password is required.");
        }
        if (!username) {
            throw new Error("Please Enter Username.")
        }
        if (!password) {
            throw new Error("Please Enter Password.")
        }

        return Object.freeze({
           getUsername: () => username,
           getPassword: () => password,
        });
    };
};

module.exports = loginUserEntity;