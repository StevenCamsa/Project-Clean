const editUserEntity = () => {
    return function edit({
        fname,
        lname,
        age,
        username,
        password,
        role_id

    } = {}) {
        if (!fname) {
            throw new Error("Please Enter First Name.")
        }
        if (!lname) {
            throw new Error("Please Enter Last Name.")
        }
        if (isNaN (age) ){
            throw new Error("Please Enter Age in Number.")
        }
        if (!age) {
            throw new Error("Please Enter Age.")
        }
        if (!username) {
            throw new Error("Please Enter Username.")
        }
        if (!password) {
            throw new Error("Please Enter Password.")
        }

        return Object.freeze({
           getFirstName: () => fname,
           getLastName: () => lname,
           getAge: () => age,
           getUsername: () => username,
           getPassword: () => password,
           getRole: () => role_id
 
        });
    };
};

module.exports = editUserEntity;