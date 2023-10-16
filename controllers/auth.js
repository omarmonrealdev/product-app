const { finbByUsername } = require('../services/user');
const jwt = require('jsonwebtoken');

exports.login = async function (request, response) {
  const { username, password } = request.body;

  const user = await finbByUsername(username);

  if (!user) {
    return response.status(401).json ({
      message: 'Usuario o contraseña invalidos',
      messageDev: 'No se encontro el usuario en la base de datos',
      code: 'ERR_AUTH',
    });
  }

  if (user.password !== password) {
    return response.status(401).json ({
      message: 'Usuario o contraseña invalidos',
      messageDev: 'No se encontro el usuario en la base de datos',
      code: 'ERR_AUTH',
    });
  }
                          //payload
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  response.status(200).json({
    jwt: token,
  });
};