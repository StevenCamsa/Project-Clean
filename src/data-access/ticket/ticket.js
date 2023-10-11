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
    const sql = `SELECT t.ticket_id, c.city_id, c.city_name, co.country_id, co.country_name, u.user_id, g.group_id,g.group_name,u.fname,u.lname,t.seat_no,t.date, f.flight_id,f.flight_number,t.status
    FROM 
        public.ticket t
    LEFT JOIN
        public.users u ON u.user_id = t.user_id
	LEFT JOIN
        public.member m ON m.user_id = u.user_id
    LEFT JOIN 
        public.groups g ON m.group_id = g.group_id
    LEFT JOIN
        public.flight f ON f.city_id = g.city_id AND f.country_id = g.country_id
	LEFT JOIN 
        public.cities c ON c.city_id = g.city_id
	LEFT JOIN 
        public.country co ON co.country_id = g.country_id
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
    const sql = `SELECT t.ticket_id, c.city_id, c.city_name, co.country_id, co.country_name, u.user_id, g.group_id,g.group_name,u.fname,u.lname,t.seat_no,t.date, f.flight_id,f.flight_number,t.status
    FROM 
        public.ticket t
    LEFT JOIN
        public.users u ON u.user_id = t.user_id
	LEFT JOIN
        public.member m ON m.user_id = u.user_id
    LEFT JOIN 
        public.groups g ON m.group_id = g.group_id
    LEFT JOIN
        public.flight f ON f.city_id = g.city_id AND f.country_id = g.country_id
	LEFT JOIN 
        public.cities c ON c.city_id = g.city_id
	LEFT JOIN 
        public.country co ON co.country_id = g.country_id
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
    const sql = `SELECT * FROM ticket WHERE user_id = $1 AND status = 'active'`;
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
    const sql = `INSERT INTO ticket ( user_id, seat_no, date,  status) VALUES ($1, $2, $3, $4) RETURNING *`;
    const params = [info.user_id, info.seat_no, info.date,  "active"];
    try{
        const result = await data.query(sql, params);
        return result.rows; 
    } catch(error) {
        console.log("Error "+ error);
        
    }
}

async function updateTicket({ticket_id, ...info}) {
    const data = await db();
    const sql = `UPDATE ticket SET date = $1 WHERE ticket_id = $2 RETURNING *`;
    const params = [info.date, ticket_id];
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