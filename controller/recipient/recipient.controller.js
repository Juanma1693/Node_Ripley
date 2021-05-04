const Recipient = require('../../model/Recipient');
const TypeAccount = require('../../model/TypeAccount');
  exports.create = async (req, res) => {
    try {
      const recipient = await Recipient.build(req.body).save()
      res.send(recipient);
    } catch (e) {
      res.send(e);
    }
  }

  exports.findAll = async (req, res) => {
    try {
      const recipient = await Recipient.findAll({
        include: [
           { model: TypeAccount, required: false}
        ]
      });
      res.send(recipient);
    } catch (e) {
      res.send(e);
    }
  }

  exports.findById = async (req, res) => {
    try {
      let id = req.params['id'];
      const recipient = await Recipient.findOne({ where: { id: Number(id) } })
      res.send(recipient);
    } catch (e) {
      res.send(e);
    }
  }

  exports.update = async (req, res) => {
    try {
      const recipient = await Recipient.update(req.body, { sideEffects: true, where: { id: Number(req.body.id) } })
      res.send(req.body);
    } catch (e) {
      res.send(e);
    }
  }
