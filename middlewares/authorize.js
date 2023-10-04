const { Pegawai } = require('../models');

const authorize = async (req, res, next) => {
  try {
    const data = await Pegawai.findOne({ where: { id: +req.decoded.id }})

    if (!data) {
      res.status(404).json({
        success: false,
        data: {
          code: 404,
          message: "User not found",
          data: null
        }
      })
    } 
  
    if (+req.params.id != data.dataValues.id && data.dataValues.role != 1 && data.dataValues.role != 2 ) {
      res.status(401).json({
        success: false,
        data: {
          code: 401,
          message: "Unauthorize",
          data: null
        }
      })
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: {
        code: 500,
        message: 'Trouble connection',
        data: null
      }
    })
  }
}

const authorizeAdmin = async (req, res, next) => {
  try {
    const data = await Pegawai.findOne({ where: { id: +req.decoded.id }})

    if (!data) {
      res.status(404).json({
        success: false,
        data: {
          code: 404,
          message: "User not found",
          data: null
        }
      })
    } 

    if (data.role != 1 && data.role != 2) {
      res.status(401).json({
        success: false,
        data: {
          code: 404,
          message: 'Unauthorize as Admin',
          data: null
        }
      })
    }
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      data: {
        code: 500,
        message: 'Trouble connection',
        data: null
      }
    })
  }
}

const authorizeMainAdmin = async (req, res, next) => {
  try {
    const data = await Pegawai.findOne({ where: { id: +req.decoded.id }})

    if (!data) {
      res.status(404).json({
        success: false,
        data: {
          code: 404,
          message: "User not found",
          data: null
        }
      })
    } 

    if (data.role != 1) {
      res.status(401).json({
        success: false,
        data: {
          code: 404,
          message: 'Unauthorize as Admin',
          data: null
        }
      })
    }
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      data: {
        code: 500,
        message: 'Trouble connection',
        data: null
      }
    })
  }
}

const authorizeASN = async (req, res, next) => {
  try {
    const data = await Pegawai.findOne({ where: { id: +req.decoded.id }})

    if (!data) {
      res.status(404).json({
        success: false,
        data: {
          code: 404,
          message: "User not found",
          data: null
        }
      })
    } 

    if (data.role != 5) {
      res.status(401).json({
        success: false,
        data: {
          code: 404,
          message: 'Unauthorize as ASN',
          data: null
        }
      })
    }
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      data: {
        code: 500,
        message: 'Trouble connection',
        data: null
      }
    })
  }
}

module.exports = { authorize, authorizeAdmin, authorizeMainAdmin, authorizeASN };