const getCountryById = ({countrydb}) =>{
    return async function get(country_id) {

        const result = await countrydb.getCountryById(country_id)
        
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getCountryById