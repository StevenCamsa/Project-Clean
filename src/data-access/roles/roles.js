const rolesQuery = ({db}) => {
    return Object.freeze({
        getRoles,
        getRolesById,
        isExisting,
        createRoles,
        updateRoles,
        deleteRoles
    });


async function getRoles() {
    const data = await db();
    const sql = `SELECT * FROM roles WHERE status = 'active' ORDER BY role_id` ;
    try{
        const result = await data.query(sql);
        return result.rows; 
    } catch(error){
        console.log("Error "+ error);
    }
}

async function getRolesById(role_id) {
    const data = await db();
    const sql = `SELECT * FROM roles WHERE role_id = $1 AND status = 'active'`;
    const params = [role_id]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isExisting (role){
    const data = await db();
    const sql = `SELECT * FROM roles WHERE role = $1`;
    const params = [role]
    
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}
async function createRoles({...info}) {
    const data = await db();
    const sql = `INSERT INTO roles (role, status) VALUES ($1, $2) RETURNING *`;
    const params = [info.role, "active"];
    try{
        const result = await data.query(sql, params);
        return result.rows; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateRoles({role_id, ...info}) {
    const data = await db();
    const sql = `UPDATE roles SET role = $1 WHERE role_id = $2 RETURNING *`;
    const params = [ info.role, role_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function deleteRoles(role_id) {
    const data = await db();
    const sql = `UPDATE roles SET status = $1 WHERE role_id = $2 RETURNING *`;
    const params = ["inactive", role_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

}
module.exports = rolesQuery;