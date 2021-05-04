const router = require('express').Router()
const TypeAccountController = require('./controller/type-account/type-account.controller')
const HistoryController = require('./controller/history/history.controller')
const RecipientController = require('./controller/recipient/recipient.controller')

module.exports = () => {
  return router
  .get('/typeAccount', TypeAccountController.findAll)
  .get('/history', HistoryController.findAll)
  .post('/history', HistoryController.create)
  .get('/recipient', RecipientController.findAll)
  .get('/recipient', RecipientController.findById)
  .post('/recipient', RecipientController.create)
  .put('/recipient', RecipientController.update);

};