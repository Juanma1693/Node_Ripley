const TypeAccount = require('../../model/TypeAccount.js')
  exports.findAll = async (req, res) => {
    try {
      const typeAccount = await TypeAccount.findAll();
      res.send(typeAccount);
    } catch (e) {
      console.error(e);
      res.send(e);
    }
  }


