const DataTypes = require('sequelize');
const sequelize = require('../db').sequelize;
const Recipient = require('../model/Recipient')

const History = sequelize.define('History', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  mount: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'history',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});

History.belongsTo(Recipient, {ForeignKey: 'number_account'})
module.exports = History;