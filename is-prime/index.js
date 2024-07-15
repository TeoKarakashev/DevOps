const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

function isPrime(num) {
  if (num <= 1) return false;
  if (num % 1 !== 0) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  const sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 5; i <= sqrtNum; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

app.post("/isPrime", (req, res) => {
  const { number } = req.body;

  if (typeof number !== "number") {
    return res.status(400).json({ error: "Invalid input. Expected a number." });
  }

  const result = isPrime(number);
  res.json({ number, isPrime: result });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend service is running on port ${PORT}`);
});

module.exports = isPrime;
