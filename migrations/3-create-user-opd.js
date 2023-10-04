'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_OPDs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Nama tidak boleh kosong!'
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Password tidak boleh kosong!'
          }
        }
      },
      nik: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'NIK tidak boleh kosong!'
          },
          min: 16,
          max: 16,
        }
      },
      tempat_lahir: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Tempat lahir tidak boleh kosong!'
          },
          min: 18,
          max: 18,
        }
      },
      tanggal_lahir: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Tgl lahir tidak boleh kosong!'
          },
          min: 18,
          max: 18,
        }
      },
      alamat: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Alamat tidak boleh kosong!'
          },
          min: 18,
          max: 18,
        }
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Role tidak boleh kosong'
          }
        }
      },
      nama_role: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Nama role tidak boleh kosong!'
          }
        }
      },
      id_opd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Harap masukkan Dinas/OPD terkait'
          }
        },
        references: {
          model: 'Perangkat_Daerahs',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_OPDs');
  }
};