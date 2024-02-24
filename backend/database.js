const Pool = require("pg");

const pool = new Pool.Client({
  user: "postgres",
  host: "localhost",
  database: "portfolio",
  password: "12345678",
  port: 5432,
});

pool.connect();
module.exports = pool;
