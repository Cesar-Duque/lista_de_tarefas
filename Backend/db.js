const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "appuvv",
  database: "todolist",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao banco de dados MySQL.");
});

module.exports = db;
