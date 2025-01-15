const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',    // Replace with your database host
    user: 'root',         // Replace with your database username
    password: 'Hashi@1234',         // Replace with your database password
    database: 'macocraft', // Replace with your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = pool;