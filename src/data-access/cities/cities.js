const citiesQuery = ({db}) => {
    return Object.freeze({
        getCities,
        getCitiesById,
        isExisting,
        createCities,
        updateCities,
        deleteCities
    });


async function getCities() {
    const data = await db();
    const sql = `SELECT city_id, city_name, country.country_id, country.country_name FROM cities, country WHERE country.country_id = cities.country_id AND cities.status = 'active' ORDER BY city_id` ;
    try{
        const result = await data.query(sql);
        return result.rows; 
    } catch(error){
        console.log("Error "+ error);
    }
}

async function getCitiesById(city_id) {
    const data = await db();
    const sql = `SELECT city_id, city_name, country.country_id, country.country_name FROM cities, country WHERE country.country_id = cities.country_id AND city_id = $1 AND cities.status = 'active'`;
    const params = [city_id]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isExisting (city_id){
    const data = await db();
    const sql = `SELECT * FROM cities WHERE city_name = $1`;
    const params = [city_id]
    
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}
async function createCities({...info}) {
    const data = await db();
    const sql = `INSERT INTO cities (city_name, country_id, status) VALUES ($1, $2, $3) RETURNING *`;
    const params = [info.city_name, info.country_id, "active"];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateCities({city_id, ...info}) {
    const data = await db();
    const sql = `UPDATE cities SET city_name = $1, country_id = $2 WHERE city_id = $3 RETURNING *`;
    const params = [ info.city_name, info.country_id, city_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function deleteCities(city_id) {
    const data = await db();
    const sql = `UPDATE cities SET status = $1 WHERE city_id = $2 RETURNING *`;
    const params = ["inactive", city_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

}
module.exports = citiesQuery;