import { describe, it } from "node:test";

const request = require('supertest');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const isPrime = require('../index.js'); // Assuming your isPrime function is exported from another file

app.post('/isPrime', (req, res) => {
  const { number } = req.body;

  if (typeof number !== 'number') {
    return res.status(400).json({ error: 'Invalid input. Expected a number.' });
  }

  const result = isPrime(number);
  res.json({ number, isPrime: result });
});

describe('POST /isPrime', () => {
  it('should return true for prime numbers', async () => {
    const response = await request(app)
      .post('/isPrime')
      .send({ number: 7 });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ number: 7, isPrime: true });
  });

  it('should return false for non-prime numbers', async () => {
    const response = await request(app)
      .post('/isPrime')
      .send({ number: 4 });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ number: 4, isPrime: false });
  });

  it('should return 400 for invalid input', async () => {
    const response = await request(app)
      .post('/isPrime')
      .send({ number: 'string' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid input. Expected a number.' });
  });
});

module.exports = app;