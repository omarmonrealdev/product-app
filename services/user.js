const User = require("../models/user");

exports.insert = function(data) {
  return User.create(data);
};


//CONSULTA PARA EL CONTROLADOR AUTH

exports.finbByUsername = function(username) {   
  //SELECT * FROM users WHERE username = username;
  return User.findOne({
    where: {
      username,
    }
  });
};

//CONSULTA PARA EL MIDDLEWARE JWT.JS

exports.findById = function (id) {
  //SELECT * FROM users WHERE id = id (parametro)
  return User.findByPk(id);
};