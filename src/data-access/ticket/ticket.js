const ticketQuery = ({db}) => {
    return Object.freeze({
        getTicket,
        getTicketById,
        createTicket,
        updateTicket,
        deleteTicket,
        isExisting
    });


async function getTicket() {
    const data = await db();
    const sql = `SELECT t.ticket_id, t.city_id, c.city_name, t.country_id, co.country_name, u.user_id, g.group_id,g.group_name,u.fname,u.lname,t.seat_no, t.departure_time,t.date, f.flight_id,f.flight_number,t.status
    FROM 
        public.ticket t
    LEFT JOIN 
        public.cities c ON t.city_id = c.city_id
    LEFT JOIN 
        public.country co ON t.country_id = co.country_id
    LEFT JOIN
        public.users u ON u.user_id = t.user_id
	LEFT JOIN
        public.member m ON m.user_id = u.user_id
    LEFT JOIN 
        public.groups g ON m.group_id = g.group_id
    LEFT JOIN
        public.flight f ON f.flight_id = t.flight_id
    WHERE t.status = 'active' ORDER BY t.ticket_id`;
    try{
        const result = await data.query(sql);
        return result.rows; 
    } catch(error){
        console.log("Error "+ error);
    }
}

async function getTicketById(ticket_id) {
    const data = await db();
    const sql = `SELECT t.ticket_id, t.city_id, c.city_name, t.country_id, co.country_name, u.user_id, g.group_id,g.group_name,u.fname,u.lname,t.seat_no, t.departure_time,t.date, f.flight_id,f.flight_number,t.status
    FROM 
        public.ticket t
    LEFT JOIN 
        public.cities c ON t.city_id = c.city_id
    LEFT JOIN 
        public.country co ON t.country_id = co.country_id
    LEFT JOIN
        public.users u ON u.user_id = t.user_id
	LEFT JOIN
        public.member m ON m.user_id = u.user_id
    LEFT JOIN 
        public.groups g ON m.group_id = g.group_id
    LEFT JOIN
        public.flight f ON f.flight_id = t.flight_id
    WHERE ticket_id = $1 AND t.status = 'active'`;
    const params = [ticket_id]
    try{
        const result = await data.query(sql, params);
        return result; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function isExisting (user_id){
    const data = await db();
    const sql = `SELECT * FROM ticket WHERE user_id = $1`;
    const params = [user_id]
    
    try{
        const result = await data.query(sql, params);
        return result; 
        
    } catch(error) {
        console.log("Error "+ error);
        
    }
}
async function createTicket({...info}) {
    const data = await db();
    const sql = `INSERT INTO ticket (city_id, country_id, user_id, seat_no, departure_time, date, flight_id, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    const params = [info.city_id, info.country_id, info.user_id, info.seat_no, info.departure_time, info.date, info.flight_id , "active"];
    try{
        const result = await data.query(sql, params);
        return result.rows; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateTicket({ticket_id, ...info}) {
    const data = await db();
    const sql = `UPDATE ticket SET city_id = $1, country_id = $2, departure_time = $3, date = $4, flight_id = $5 WHERE ticket_id = $6 RETURNING *`;
    const params = [ info.city_id, info.country_id, info.departure_time, info.date, info.flight_id, ticket_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function deleteTicket(ticket_id) {
    const data = await db();
    const sql = `UPDATE ticket SET status = $1 WHERE ticket_id = $2 RETURNING *`;
    const params = ["inactive", ticket_id];
    try{
        const result = await data.query(sql, params);
        return result.rows;
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

}
module.exports = ticketQuery;