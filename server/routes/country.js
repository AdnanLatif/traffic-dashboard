const express = require('express');
const router = express.Router();
const { TrafficByCountry } = require('../models');

router.get('/', async (req, res) => {
  const data = await TrafficByCountry.findAll();
  res.json(data);
});

router.post('/', async (req, res) => {
  const { country, vehicle_count } = req.body;
  const newEntry = await TrafficByCountry.create({ country, vehicle_count });
  res.status(201).json(newEntry);
});

module.exports = router;
