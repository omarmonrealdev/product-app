const Product = require("../models/product");

exports.findAll = function () {
  return Product.findAll();
};

exports.findById = function (id) {
  return Product.findByPk(id);
};

exports.insert = function (data) {
  return Product.create(data);
};

exports.update = async function (id, data) {
  await Product.update(data, {
    where: {
      id,
    },
  });
};

exports.deleteById = async function (id) {
  const product = await Product.findByPk(id);
  await product.destroy();
};