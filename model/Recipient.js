const DataTypes = require('sequelize');
const sequelize = require('../db').sequelize;
const TypeAccount = require('../model/TypeAccount');
const Recipient = sequelize.define('Recipient', {

  rut: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
  },
  bank: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number_account: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  tel: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'recipient'
});
Recipient.belongsTo(TypeAccount, {ForeignKey: 'id'})
module.exports = Recipient;
