const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const taxRoutes = require('./routes/taxRoutes');
const e = require('express');

app.use(express.json());
// Basic route
app.get('/', (req, res) => {
  res.send('Tax API is running');
});

// Tax routes
app.use('/api/tax', taxRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
