const flightQuery = ({db}) => {
    return Object.freeze({
        getFlight,
        getFlightById,
        isExisting,
        createFlight,
        updateFlight,
        deleteFlight                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    });


async function getFlight() {
    const data = await db();
    const sql = `SELECT flight_id, flight_number, airline_carrier, country.country_id, country.country_name, cities.city_id, cities.city_name FROM flight, country, cities WHERE country.country_id = flight.country_id AND cities.city_id = flight.city_id AND flight.status = 'active' ORDER BY flight_id` ;
    try{
        const result = await data.query(sql);
        return result.rows; 
    } catch(error){
        console.log("Error "+ error);
    }
}

async function getFlightById(flight_id) {
    const data = await db();
    const sql = `SELECT flight_id, flight_number, airline_carrier, country.country_id, country.country_name, cities.city_id, cities.city_name FROM flight, country, cities WHERE flight_id = $1 AND country.country_id = flight.country_id AND cities.city_id = flight.city_id AND flight.status = 'active' `;
    const params = [flight_id]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isExisting (flight_number){
    const data = await db();
    const sql = `SELECT * FROM flight WHERE flight_number = $1 AND status = 'active'`;
    const params = [flight_number ]
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}
async function createFlight({...info}) {
    const data = await db();
    const sql = `INSERT INTO flight (flight_number, airline_carrier, country_id, city_id, status) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const params = [ info.flight_number, info.airline_carrier, info.country_id, info.city_id,"active"];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateFlight({flight_id, ...info}) {
    const data = await db();
    const sql = `UPDATE flight SET airline_carrier = $1, country_id = $2, city_id = $3 WHERE flight_id = $4 RETURNING *`;
    const params = [ info.airline_carrier,  info.country_id, info.city_id, flight_id];
    try{
        const result = await data.query(sql, params);
        console.log(result.rows);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function deleteFlight(flight_id) {
    const data = await db();
    const sql = `UPDATE flight SET status = $1 WHERE flight_id = $2 RETURNING *`;
    const params = ["inactive", flight_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

}
module.exports = flightQuery;