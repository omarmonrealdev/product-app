const { connect, sync } = require("./models/sequelize");
const User = require("./models/user");
const Product = require("./models/product");
const Review = require("./models/review");

// "Un usuario crea muchos productos"
User.hasMany(Product);
Product.belongsTo(User);

// "Un producto tiene muchas reviews"
Product.hasMany(Review);
Review.belongsTo(Product);

// "Un usuario crea muchos reviews"
User.hasMany(Review);
Review.belongsTo(User);

exports.initDatabase = async function () {
	await connect();
	await sync();
};