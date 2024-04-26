const jwt = require('jsonwebtoken')
const config = require('../config')

function verifyToken (req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({msg: 'No Token provided'});
    }
  
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({msg: 'Failed to authenticate token!'});
      }
      req.userId = decoded.id;
      next();
    })
  }
  
  module.exports = { verifyToken }