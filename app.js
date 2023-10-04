const express = require('express');
const app = express();

// Import main routes
const mainRoutes = require('./routes/mainRoutes');

// Use main routes
app.use('/', mainRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});