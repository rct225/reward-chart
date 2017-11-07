'use strict';
module.exports = (sequelize, DataTypes) => {
  var Behaviors = sequelize.define('Behaviors', {
    name: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Behaviors;
};