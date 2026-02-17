const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  max: 10,
  connectionTimeoutMillis: 2000,
  idleTimeoutMillis: 30000,
});

module.exports = { pool }