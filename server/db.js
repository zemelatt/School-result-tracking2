const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "school",
});
module.exports = db;
// db.connect((err) => {
//   if (err) console.log(err);
//   console.log("db connected");
// });
