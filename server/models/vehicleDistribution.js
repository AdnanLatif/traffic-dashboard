module.exports = (sequelize, DataTypes) => {
  const VehicleDistribution = sequelize.define(
    'VehicleDistribution',
    {
      vehicle_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'vehicle_distribution',
      timestamps: true,
    },
  );

  return VehicleDistribution;
};
