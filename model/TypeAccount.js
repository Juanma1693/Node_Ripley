const DataTypes = require('sequelize');
const sequelize = require('../db').sequelize;

const TypeAccount = sequelize.define('TypeAccount', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'type_account',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});

module.exports = TypeAccount;
