import 'dotenv/config'

import mysql from 'mysql';

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DBNAME,
});

export default connection;