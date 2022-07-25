const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ququdas0327',
    database: 'whattodo'
});
 
module.exports = db;