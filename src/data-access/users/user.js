const userQuery = ({db}) => {
    return Object.freeze({
        getUsers,
        getUserById,
        isExisting,
        login,
        createUser,
        updateUser,
        deleteUser
    });


async function getUsers() {
    const data = await db();
    const sql = `SELECT u.user_id, u.fname, u.lname, u.age, u.username, u.password, r.role_id, r.role, m.group_id, g.group_name
    FROM users AS u
    LEFT JOIN member AS m ON m.user_id = u.user_id
    LEFT JOIN roles AS r ON r.role_id = u.role_id
    LEFT JOIN groups AS g ON g.group_id = m.group_id
    WHERE u.status = 'active' AND (m.status = 'active' OR m.status IS NULL)
    ORDER BY u.user_id` ;
    try{
        const result = await data.query(sql);
        return result.rows; 
    } catch(error){
        console.log("Error "+ error);
    }
}

async function getUserById(user_id) {
    const data = await db();
    const sql = `SELECT u.user_id, u.fname, u.lname, u.age, u.username, u.password, r.role_id, r.role, m.group_id, g.group_name
    FROM users AS u
    LEFT JOIN member AS m ON m.user_id = u.user_id
    LEFT JOIN roles AS r ON r.role_id = u.role_id
    LEFT JOIN groups AS g ON g.group_id = m.group_id
    WHERE u.user_id = $1 AND u.status = 'active' AND m.status = 'active'
    `;
    const params = [user_id] 
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isExisting (username){
    const data = await db();
    const sql = `SELECT * FROM users WHERE username = $1`;
    const params = [username]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function login ({username, password}){
    const data = await db();
    const sql = `SELECT * FROM users WHERE username = $1 AND password = $2 AND status = 'active'`;
    const params = [username, password]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function createUser({...info}) {
    const data = await db();
    const sql = `INSERT INTO users (fname, lname, age, username, password, role_id, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const params = [info.fname, info.lname, info.age, info.username, info.password, "2", "active"];
    try{
        const result = await data.query(sql, params);
        return result.rows; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateUser({user_id, ...info}) {
    const data = await db();
    const sql = `UPDATE users SET fname = $1, lname = $2, age = $3, username = $4, password = $5, role_id = $6 WHERE user_id = $7 RETURNING *`;
    const params = [info.fname, info.lname, info.age, info.username, info.password, info.role_id, user_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function deleteUser(user_id) {
    const data = await db();
    const sql = `UPDATE users SET status = $1 WHERE user_id = $2 RETURNING *`;
    const params = ["inactive", user_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

}
module.exports = userQuery;