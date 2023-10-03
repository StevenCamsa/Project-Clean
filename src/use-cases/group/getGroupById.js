const getGroupById = ({groupdb}) =>{
    return async function get(group_id) {

        const result = await groupdb.getGroupById(group_id)
        
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getGroupById