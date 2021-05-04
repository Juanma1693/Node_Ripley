const History = require('../../model/History');
const Recipient = require('../../model/Recipient');
const TypeAccount = require('../../model/TypeAccount')
  exports.create = async (req, res) => {
    try {
      const history = await History.build(req.body).save()
      res.send(history);
    } catch (e) {
      res.send(e);
    }
  }

  exports.findAll = async (req, res) => {
    try {
      const history = await History.findAll({
        include: [
           { model: Recipient, required: false, include: [TypeAccount]}
        ]
      });
      res.send(history);
    } catch (e) {
      res.send(e);
    }
  }