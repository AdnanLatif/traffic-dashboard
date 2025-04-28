module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('vehicle_distribution', [
      {
        vehicle_type: 'Car',
        count: 250000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_type: 'Motorcycle',
        count: 180000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_type: 'Truck',
        count: 95000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_type: 'Bus',
        count: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_type: 'Van',
        count: 45000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_type: 'Bicycle',
        count: 80000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('vehicle_distribution', null, {});
  },
};
