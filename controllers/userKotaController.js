const { User_Kota } = require('../models');
const axios = require('axios');

class UserKotaController {
  static getAllUserKota = async (req, res) => {
    try {
      const condition = +req.params.condition
      if (condition == 1) {
        // const api = 
        const response = await axios({
          method: 'post',
          url: 'https://kak.madiunkota.go.id/api/opd/daftar_opd',
          headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
          },
          withCredentials: true,
          data: {}
        })

        res.status(200).json({
          success: true,
          data: {
            code: 200,
            message: 'Success',
            data: response.data.results
          }
        })
      }

      if (condition == 2) {
        const response = await User_Kota.findAll()
  
        res.status(200).json({
          success: true,
          data: {
            code: 200,
            message: 'Success',
            data: response
          }
        })
      }
    } catch (err) {
      console.log(err);
      console.log(err.message, '<<<');
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

module.exports = UserKotaController;