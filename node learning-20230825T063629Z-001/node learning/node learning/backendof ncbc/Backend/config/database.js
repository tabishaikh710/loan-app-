const mysql = require('mysql')

const pool = mysql.createPool({
    host:'localhost',
    user:"root",
    password:"",
    database:"first_nodeapi",
    connectTimeout: 100000,
    acquireTimeout: 60000,
    connectionLimit: 100,
    queueLimit: 10,
    waitForConnection: true
    
})


module.exports = pool;
