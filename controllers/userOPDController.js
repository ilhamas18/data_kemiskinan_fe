const { User_OPD } = require('../models');

class UserOPDController {
  static getUserOPD = async (req, res) => {
    try {
      const response = await User_OPD.findAll();

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
}

module.exports = UserOPDController;