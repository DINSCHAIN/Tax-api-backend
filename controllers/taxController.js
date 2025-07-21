// controllers/taxController.js

const getTaxRate = (req, res) => {
  const { zip } = req.query;

  console.log('Starting US Tax Backend... inside controller');

  // Mock response for now
  const mockRate = {
    zip,
    state: "NY",
    county: "New York",
    city: "New York",
    rate: 0.0875
  };

  res.status(200).json({
    success: true,
    data: mockRate
  });
};

module.exports = {
  getTaxRate
};