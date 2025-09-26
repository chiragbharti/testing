let mysql = require('mysql2');

let con = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12800169",
  password: "XFyIAP9AlU",
  database: "sql12800169"
});


module.exports = con;