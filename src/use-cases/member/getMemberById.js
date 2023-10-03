const getMemberId = ({memberdb}) =>{
    return async function get(member_id) {

        const result = await memberdb.getMemberById(member_id)
        
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getMemberId