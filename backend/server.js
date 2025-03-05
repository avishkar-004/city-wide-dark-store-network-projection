const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hackron',
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Routes

// Get all stores
app.get('/api/stores', (req, res) => {
    const query = 'SELECT * FROM store';
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error fetching stores');
        } else {
            res.status(200).json(results);
        }
    });
});

// Get stores by zone
app.get('/api/stores/zone/:zone', (req, res) => {
    const { zone } = req.params;
    const query = 'SELECT * FROM store WHERE zone = ?';
    db.query(query, [zone], (err, results) => {
        if (err) {
            res.status(500).send('Error fetching stores by zone');
        } else {
            res.status(200).json(results);
        }
    });
});

// Fetch analysis data (example: top zones by capacity)
app.get('/api/analysis/top-zones', (req, res) => {
    const query = `SELECT zone, SUM(capacity) AS total_capacity 
                 FROM store 
                 GROUP BY zone 
                 ORDER BY total_capacity DESC 
                 LIMIT 5`;
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Error fetching analysis data');
        } else {
            res.status(200).json(results);
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});