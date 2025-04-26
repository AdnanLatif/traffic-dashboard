module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('traffic_by_country', [
      {
        country: 'USA',
        vehicle_count: 150000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'India',
        vehicle_count: 320000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Germany',
        vehicle_count: 120000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Brazil',
        vehicle_count: 95000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'China',
        vehicle_count: 400000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Canada',
        vehicle_count: 80000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'UK',
        vehicle_count: 110000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'France',
        vehicle_count: 105000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('traffic_by_country', null, {});
  },
};
