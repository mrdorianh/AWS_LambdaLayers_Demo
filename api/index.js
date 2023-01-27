'use strict'
exports.handler = async function (event, context) {
  let res;
  try {
    var lo = require("lodash");
    var seq = require("sequelize");
    
    var cowsay = require("cowsay");

    res = cowsay.say({
      text : "The greatest discovery you'll ever make, is the potential of your own mind",
      e : "oO",
      T : "U "
  });
    console.log(res);
  } catch (err) {
      return { statusCode: 500, body: err.toString() }
  }
  return {
    statusCode: 200,
    body: res,
  };
};