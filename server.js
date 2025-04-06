const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors()); // Allow cross-origin requests

// Path to the musicDataStore.json file in the same directory as server.js
const dataFilePath = path.join(__dirname, 'musicStoreData.json');

// Serve the products data
app.get('/api/instruments', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file' });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData.products); // Send products data
  });
});

// Serve the artists data
app.get('/api/artists', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file' });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData.artists); // Send artists data
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
