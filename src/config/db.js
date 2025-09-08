const sql = require('mssql/msnodesqlv8');

require("dotenv").config();
const config = {
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT),    
  database: process.env.DB_DATABASE,
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("✅ Connected to SQL Server");
    return pool;
  })
  .catch((err) => {
    console.error("❌ Database connection failed", err);
    process.exit(1);
  });

module.exports = { sql, poolPromise };