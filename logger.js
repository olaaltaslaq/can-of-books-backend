'use strict';

module.exports = (req, res, next) => {
  console.log(`Logging data: /// METHOD ${req.method} /// DATE ${new Date().toString
  ()} /// PATH ${req.path}///body${req.body}`)
  next();
}