const Rewards = require('../models').Rewards;
const Behaviors = require('../models').Behaviors;

module.exports = {
  create(req, res) {
    return Rewards
      .create({
        eventDate: req.body.eventDate,
        behaviorId: req.body.behaviorId
      })
      .then(reward => res.status(201).send(reward))
      .catch(error => res.status(400).send(error));
  },

}
