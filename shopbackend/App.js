const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Import the database connection
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Test database connection
app.get('/test-connection', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1');
        res.status(200).json({ message: 'Database connection successful!' });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ error: 'Database connection failed.' });
    }
});

// Route for signup
app.post('/signup', async (req, res) => {
    const { username, email, password, phoneNumber } = req.body;
    try {
        const query = 'INSERT INTO users_info (username, email, password, phone_number) VALUES (?, ?, ?, ?)';
        await pool.query(query, [username, email, password, phoneNumber]);
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user.' });
    }
});

// Route for login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const query = 'SELECT * FROM users_info WHERE email = ? AND password = ?';
        const [rows] = await pool.query(query, [email, password]);

        if (rows.length > 0) {
            res.status(200).json({ message: 'Login successful!', user: rows[0] });
        } else {
            res.status(401).json({ error: 'Invalid email or password.' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Failed to log in.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
