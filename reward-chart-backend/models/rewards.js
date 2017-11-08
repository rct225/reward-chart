'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rewards = sequelize.define('Rewards', {
    eventDate: DataTypes.DATE,
    behaviorId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Rewards.hasOne(models.Behaviors, {
          foreignKey: 'behaviorId',
          as: 'behaviorId'
        });
      }
    }
  });
  return Rewards;
};
