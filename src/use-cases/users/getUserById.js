const getUserID = ({userdb}) =>{
    return async function get(user_id) {

        const result = await userdb.getUserById(user_id)
        .catch(e => console.log("error", e));
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getUserID