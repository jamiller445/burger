// connection.js Eat-Da-Burger

var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "BootCamp18",
    database: "burgers_db"
});
};
module.exports = connection;
