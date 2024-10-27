// Import express
const express = require('express');
const app = express();
const port = 3000; // Define your port

// Basic GET endpoint
app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hello, this is the API endpoint!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
