const memberQuery = ({db}) => {
    return Object.freeze({
        getMember,
        getMemberById,
        isExisting,
        createMember,
        updateMember,
        deleteMember                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    });


async function getMember() {
    const data = await db();
    const sql = `SELECT member_id, users.user_id, users.fname, users.lname, users.age, groups.group_id, groups.group_name, date_join FROM users, groups, member WHERE users.user_id = member.user_id AND groups.group_id = member.group_id AND member.status = 'active' ORDER BY member_id` ;
    try{
        const result = await data.query(sql);
        return result.rows; 
    } catch(error){
        console.log("Error "+ error);
    }
}

async function getMemberById(member_id) {
    const data = await db();
    const sql = `SELECT member_id, users.user_id, users.fname, users.lname, users.age, groups.group_id, groups.group_name, date_join FROM users, groups, member WHERE users.user_id = member.user_id AND groups.group_id = member.group_id AND member_id = $1 AND groups.status = 'active'`;
    const params = [member_id]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isExisting ( user_id){
    const data = await db();
    const sql = `SELECT * FROM member WHERE user_id = $1 AND status = 'active'`;
    const params = [user_id]
    
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}
async function createMember({...info}) {
    const data = await db();
    const sql = `INSERT INTO member (user_id, group_id, status) VALUES ($1, $2, $3) RETURNING *`;
    const params = [ info.user_id, info.group_id, "active"];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateMember({member_id, ...info}) {
    const data = await db();
    const sql = `UPDATE member SET user_id = $1, group_id = $2 WHERE member_id = $3 RETURNING *`;
    const params = [ info.user_id, info.group_id, member_id];
    try{
        const result = await data.query(sql, params);
        console.log(result.rows);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function deleteMember(member_id) {
    const data = await db();
    const sql = `UPDATE member SET status = $1 WHERE member_id = $2 RETURNING *`;
    const params = ["inactive", member_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

}
module.exports = memberQuery;