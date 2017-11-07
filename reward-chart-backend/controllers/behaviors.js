const Behaviors = require('../models').Behaviors;

module.exports = {
  list(req, res) {
    return Behaviors
      .all()
      .then(behaviors => {
        console.log(behaviors);
        res.status(200).send(behaviors);
      })
      .catch(error => res.status(400).send(error));
  }
}
