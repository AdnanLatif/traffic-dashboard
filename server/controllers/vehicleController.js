const { VehicleDistribution } = require('../models');

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await VehicleDistribution.findAll();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong fetching vehicles.' });
  }
};

exports.addVehicle = async (req, res) => {
  try {
    const { vehicle_type, count } = req.body;
    const newVehicle = await VehicleDistribution.create({
      vehicle_type,
      count,
    });
    res.status(201).json(newVehicle);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Something went wrong adding a vehicle type.' });
  }
};
