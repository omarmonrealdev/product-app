const Review = require("../models/review");

exports.insert = function (data) {
  return Review.create(data);
};

exports.update = async function (id, data) {
  await Review.update(data, {
    where: {
      id,
    },
  });
};

exports.deleteById = async function (id) {
  const review = await Review.findByPk(id);
  await review.destroy();
};

//Solo para verificar si existe la review en la db
exports.findReviewById = function (id) {
  return Review.findByPk(id);
};