const express = require("express");
const cors = require("cors");
const db = require("./db");  // import MySQL connection

const app = express();
app.use(cors());
app.use(express.json());

// Register route
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error("❌ Error inserting user:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "✅ User registered successfully!" });
  });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    if (result.length > 0) {
      res.json({ message: "✅ Login successful!" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
