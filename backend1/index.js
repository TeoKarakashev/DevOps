const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

// Use the cors middleware
app.use(cors()); // This allows all origins by default

app.get('/data', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const responseData = {
    number: randomNumber
  };
  res.json(responseData);
});

app.listen(4000, () => {
  console.log('Backend service 1 is running on port 4000');
});