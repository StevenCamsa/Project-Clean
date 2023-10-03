const getRolesID = ({rolesdb}) =>{
    return async function get(role_id) {

        const result = await rolesdb.getRolesById(role_id)
        
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getRolesID