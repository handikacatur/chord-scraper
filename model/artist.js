export default function(sequelize, DataTypes) {
  return sequelize.define('Artist', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'artists',
    schema: 'public',
    timestamp: true,
    paranoid: true
  })
}