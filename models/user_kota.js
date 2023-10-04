'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Kota.belongsTo(models.User_Kota, { foreignKey: 'id_opd' });
    }
  }
  User_Kota.init({
    nama: DataTypes.STRING,
    nip: DataTypes.STRING,
    password: DataTypes.STRING,
    pangkat: DataTypes.STRING,
    role: DataTypes.STRING,
    nama_role: DataTypes.STRING,
    id_opd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Kota',
  });
  return User_Kota;
};