const express = require('express');
const router = express.Router();
const { VehicleDistribution } = require('../models');

router.get('/', async (req, res) => {
  const data = await VehicleDistribution.findAll();
  res.json(data);
});

router.post('/', async (req, res) => {
  const { vehicle_type, count } = req.body;
  const newEntry = await VehicleDistribution.create({ vehicle_type, count });
  res.status(201).json(newEntry);
});

module.exports = router;
