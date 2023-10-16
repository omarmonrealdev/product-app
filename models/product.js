const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("products", {
  image: {
		type: DataTypes.STRING(500),
		allowNull: false,
	},
  sku: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			len: [5, 2500],
		},
	},
	likes: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
  unLikes: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
});