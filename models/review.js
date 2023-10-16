const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("reviews", {
	content: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			len: [5, 1000],
		},
	},
	likes: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
});