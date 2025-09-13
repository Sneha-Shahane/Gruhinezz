const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // your MySQL username
  password: 'Shahanesneha@17',        // your MySQL password (leave blank if none)
  database: 'ecommerce'
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed: ' + err.stack);
    return;
  }
  console.log('✅ Connected to MySQL database.');
});

module.exports = db;
