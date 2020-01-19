var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    port: 3306,
    password: "Rachel1@",
    database: 'tacos_db',
})

connection.connect(function(err){
    if(err) {
        console.log("error connecting to sql: " + (err.stack));
        return;
    }
    console.log("connected as id: " + connection.threadId);
    
    
});



module.exports = connection;