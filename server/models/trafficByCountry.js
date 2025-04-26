module.exports = (sequelize, DataTypes) => {
  const TrafficByCountry = sequelize.define(
    'TrafficByCountry',
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicle_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'traffic_by_country',
      timestamps: true,
    },
  );

  return TrafficByCountry;
};
