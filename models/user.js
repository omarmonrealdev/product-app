const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("users", {
	username: {
		type: DataTypes.STRING(30),
		allowNull: false,
		unique: true,
	},
	email: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING(20),
		allowNull: false,
		validate: {
			len: [6, 20],
		},
	},
});