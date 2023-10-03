const Pool = require('pg').Pool;

const pool = new Pool({
user: process.env.PGUSER,
password: process.env.PGPASSWORD,
database: process.env.PGDATABASE,
host: process.env.PGHOST,
port: process.env.PGPORT
});

const db = async () => {
    try {
        return pool
    } catch (error) {
        pool.end()
        console.log(error)
    }
}

module.exports = db;
