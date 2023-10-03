const getFlightById = ({flightdb}) =>{
    return async function get(flight_id) {

        const result = await flightdb.getFlightById(flight_id)
        
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getFlightById