'user strict';

var mysql = require('mysql');

//local mysql db connection AMAZON
/*var connection = mysql.createConnection({
    host: 'cloudcomputing.chej1icjeheb.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: '1234cloud',
    database: 'sw2_UPTCC_Tunja'
});
*/

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '3112176697vivis',
    database: 'taller1_sw_ii'
});


connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;