const countryQuery = ({db}) => {
    return Object.freeze({
        getCountry,
        getCountryById,
        isExisting,
        isCountryExisting,
        createCountry,
        updateCountry,
        deleteCountry
    });


async function getCountry() {
    const data = await db();
    const sql = `SELECT country_id, country_name FROM country WHERE status = 'active' ORDER BY country_id` ;
    try{
        const result = await data.query(sql);
        return result.rows; 
    } catch(error){
        console.log("Error "+ error);
    }
}

async function getCountryById(city_id) {
    const data = await db();
    const sql = `SELECT country_id, country_name FROM country WHERE country_id = $1 AND status = 'active'`;
    const params = [city_id]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isExisting (country_id){
    const data = await db();
    const sql = `SELECT * FROM country WHERE country_name = $1`;
    const params = [country_id]
    
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isCountryExisting (country_id){
    const data = await db();
    const sql = `SELECT * FROM country WHERE country_id = $1`;
    const params = [country_id]
    
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}
async function createCountry({...info}) {
    const data = await db();
    const sql = `INSERT INTO country (country_name, status) VALUES ($1, $2) RETURNING *`;
    const params = [ info.country_name, "active"];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateCountry({country_id, ...info}) {
    const data = await db();
    const sql = `UPDATE country SET country_name = $1 WHERE country_id = $2 RETURNING *`;
    const params = [ info.country_name, country_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function deleteCountry(city_id) {
    const data = await db();
    const sql = `UPDATE country SET status = $1 WHERE country_id = $2 RETURNING *`;
    const params = ["inactive", city_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

}
module.exports = countryQuery;