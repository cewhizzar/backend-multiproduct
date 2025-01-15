const { Pool } = require('pg')
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'admin',
    password: 'ABC123',
    database: 'pg0'
})

module.exports = pool