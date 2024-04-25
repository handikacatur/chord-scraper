export default function(sequelize, DataTypes) {
  return sequelize.define('Chord', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    artist_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chords',
    schema: 'public',
    timestamp: true,
    paranoid: true,
    indexes: [
      {
        name: 'artist_pkey',
        unique: false,
        fields: [
          { name: "id" }
        ]
      }
    ]
  })
}