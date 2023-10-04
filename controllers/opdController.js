const { Perangkat_Daerah } = require('../models');
const axios = require('axios');

class OPDController {
  static getAllDataOPD = async (req, res) => {
    try {
      const response = await Perangkat_Daerah.findAll({
        order: [['nama_opd', 'ASC']],
        attributes: {
          attributes: ['nama_opd'],
        },
      })

      res.status(200).json({
        success: true,
        data: {
          code: 200,
          message: 'Success',
          data: response
        }
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        data: {
          code: 500,
          message: 'Internal server error',
          data: err
        }
      })
    }
  }

  static syncDataOPD = async (req, res) => {
    try {
      const responseOPD = await axios({
        method: 'post',
        url: 'https://kak.madiunkota.go.id/api/opd/daftar_opd',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json'
        },
      })
      
      if (responseOPD.data.results.length != 0) {
        responseOPD.data.results.map(el => {
          Perangkat_Daerah.findOrCreate({
            where: {
              kode_opd: el.kode_opd,
            },
            defaults: {
              kode_opd: el.kode_opd,
              nama_opd: el.nama_opd,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          })
            .then((data) => {
              res.status(200).json({
                success: false,
                data: {
                  code: 200,
                  message: 'Success',
                  data: data
                }
              })
            })
            .catch(err => {
              res.status(500).json({
                success: false,
                data: {
                  code: 500,
                  message: 'jaringan server error',
                  data: err.message
                }
              })
            })
        })
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        success: false,
        data: {
          code: 500,
          message: 'Internal server error',
          data: err
        }
      })
    }
  }
}

module.exports = OPDController;