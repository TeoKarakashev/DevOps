const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/sort', (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
    return res.status(400).json({ error: 'Invalid input. Expected an array of numbers.' });
  }

  const sortedNumbers = numbers.sort((a, b) => a - b);
  res.json({ sortedNumbers });
});

app.listen(5000, () => {
  console.log('Backend service 2 is running on port 5000');
});