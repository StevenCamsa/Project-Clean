const getCitiesId = ({citiesdb}) =>{
    return async function get(city_id) {

        const result = await citiesdb.getCitiesById(city_id)
        .catch(e => console.log("error", e));
        
        if(result.rowCount > 0 ){
            return result.rows
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = getCitiesId