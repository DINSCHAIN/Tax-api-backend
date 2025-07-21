// routes/taxRoutes.js

const express = require('express');
const router = express.Router();
const { getTaxRate } = require('../controllers/taxController');

// Route: GET /api/tax/rate
router.get('/rate', getTaxRate);

module.exports = router; // ✅ This line is crucial
