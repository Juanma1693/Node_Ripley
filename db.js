const Sequelize = require('sequelize')
const TypeAccountModel = require('./model/TypeAccount')

const sequelize = new Sequelize('sql10409861', 'sql10409861', 'gD2yGdsbbf', {
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql'
})

sequelize.sync({ force: false }).then(() => {
    console.info('Sequelize sync')
})

module.exports = {
    sequelize
}