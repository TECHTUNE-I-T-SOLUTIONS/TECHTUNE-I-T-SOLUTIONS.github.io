const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import user routes
const userRoutes = require('./routes/userRoutes');

// Use user routes
app.use('/api/users', userRoutes);

// Basic route to test the server
app.get('/', (req, res) => {
    res.send('Backend is up and running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
