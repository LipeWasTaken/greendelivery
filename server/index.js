const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'greendelivery_db',
  password: '3Bananerouge',
  port: 5432,
});

// GET /restaurants
app.get('/restaurants', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM restaurants');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching restaurants');
  }
});

// POST /orders
app.post('/orders', async (req, res) => {
  const { client_name, dish, restaurant_id } = req.body;
  if (!client_name || !dish || !restaurant_id) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const result = await pool.query(
        'INSERT INTO orders (client_name, dish_name, restaurant_id) VALUES ($1, $2, $3) RETURNING *',
        [client_name, dish, restaurant_id]
      );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving order');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
