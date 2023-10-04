'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_OPD extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_OPD.belongsTo(models.Perangkat_Daerah, { foreignKey: 'id_opd' });
    }
  }
  User_OPD.init({
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    password: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    alamat: DataTypes.STRING,
    role: DataTypes.INTEGER,
    nama_role: DataTypes.STRING,
    id_opd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_OPD',
  });
  return User_OPD;
};