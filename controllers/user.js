const { insert } = require("../services/user");

exports.createUser = async function (request, response) {
  const { username, email, password } = request.body;
  const user = await insert({ username, email, password });
  delete user.dataValues.password;
  response.status(201).json(user);
}