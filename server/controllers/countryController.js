const { TrafficByCountry } = require('../models');

exports.getAllCountries = async (req, res, next) => {
  try {
    const countries = await TrafficByCountry.findAll();
    res.json(countries);
  } catch (error) {
    next(error);
  }
};

exports.addCountry = async (req, res, next) => {
  try {
    const { country, vehicle_count } = req.body;

    if (!country || !vehicle_count) {
      const err = new Error('Country and vehicle_count are required.');
      err.status = 400;
      throw err;
    }

    const newCountry = await TrafficByCountry.create({
      country,
      vehicle_count,
    });
    res.status(201).json(newCountry);
  } catch (error) {
    next(error);
  }
};
