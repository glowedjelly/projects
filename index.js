const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// API route example
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Express backend!' });
});

// Serve static files (frontend build output)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for unknown routes (for SPAs)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});