'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SPV extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SPV.init({
    name: DataTypes.STRING,
    registration_number: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SPV',
  });
  return SPV;
};