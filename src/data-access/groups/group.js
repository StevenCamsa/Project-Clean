const groupQuery = ({db}) => {
    return Object.freeze({
        getGroup,
        getGroupById,
        isExisting,
        createGroup,
        updateGroup,
        deleteGroup                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    });


async function getGroup() {
    const data = await db();
    const sql = `SELECT group_id, group_name, date_created, cities.city_id, cities.city_name, country.country_id, country.country_name FROM country, groups, cities WHERE cities.city_id = groups.city_id AND country.country_id = groups.country_id AND groups.status = 'active' ORDER BY group_id` ;
    try{
        const result = await data.query(sql);
        return result.rows; 
    } catch(error){
        console.log("Error "+ error);
    }
}

async function getGroupById(group_id) {
    const data = await db();
    const sql = `SELECT group_id, group_name, date_created, cities.city_id, cities.city_name, country.country_id, country.country_name FROM groups, country, cities WHERE cities.city_id = groups.city_id AND country.country_id = groups.country_id AND group_id = $1 AND groups.status = 'active'`;
    const params = [group_id]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isExisting (group_name, city_id, country_id){
    const data = await db();
    const sql = `SELECT * FROM groups WHERE group_name = $1 AND city_id = $2 AND country_id = $3 AND status = 'active'`;
    const params = [group_name, city_id, country_id]
    
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}
async function createGroup({...info}) {
    const data = await db();
    const sql = `INSERT INTO groups (group_name, city_id, country_id, status) VALUES ($1, $2, $3, $4) RETURNING *`;
    const params = [ info.group_name, info.city_id, info.country_id, "active"];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateGroup({group_id, ...info}) {
    const data = await db();
    const sql = `UPDATE groups SET group_name = $1, city_id = $2, country_id = $3 WHERE group_id = $4 RETURNING *`;
    const params = [ info.group_name, info.city_id, info.country_id, group_id];
    try{
        const result = await data.query(sql, params);
        console.log(result.rows);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function deleteGroup(group_id) {
    const data = await db();
    const sql = `UPDATE groups SET status = $1 WHERE group_id = $2 RETURNING *`;
    const params = ["inactive", group_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

}
module.exports = groupQuery;