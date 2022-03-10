const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', //change in deployment
    database: 'database_name',
    password: 'el_password_de_tu_usuario_de_la_bd' // in dev, remove pass, implement in deployment
});

// promises execute the functions 
// when a promise fails, you can throw an error
module.exports = pool.promise();