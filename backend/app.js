const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Backend Server!');
});

// API test route
app.get('/api', (req, res) => {
    res.json({ message: "Backend is running correctly!" });
});

// API items route
app.get('/api/items', (req, res) => {
    const items = [
        { id: 1, name: "Item One", description: "First item" },
        { id: 2, name: "Item Two", description: "Second item" },
        { id: 3, name: "Item Three", description: "Third item" }
    ];
    res.json(items);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});