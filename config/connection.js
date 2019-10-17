// THIS IS DONE!

// Inside the connection.js file, setup the code to connect Node to MySQL.

var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if(err)throw err;
    console.log("Connected as id: " + connection.threadId);
});

// Export the connection.

module.exports = connection;