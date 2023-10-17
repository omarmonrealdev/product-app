const { insert, deleteById, update, findReviewById, findAllbyProd } = require('../services/review');
const { findById } = require("../services/product");

exports.createReview = async function (request, response) {
  const { content } = request.body;
  const productId = request.params.id;

  if (!await findById(productId)) {
    return response.status(401).json ({
      message: 'El Producto del que quieres opinar no esta disponible',
      messageDev: 'No se encontro el producto en la base de datos',
      code: 'ERR_AUTH',
    });
  }
  
  const review = await insert ({ content, productId, userId: request.user.id });
  response.status(201).json(review);
};

exports.updateReview = async function (request, response) {
  const { content } = request.body;
  const { id } = request.params;

  if (!await findReviewById(id)) {
    return response.status(401).json ({
      message: 'La review no existe',
      messageDev: 'No se encontro el producto en la base de datos',
      code: 'ERR_AUTH',
    });
  }

  await update (id, { content });
  response.status(204).end();
};

exports.deleteReview = async function (request, response) {
  const { id } = request.params;

  if (!await findReviewById(id)) {
    return response.status(401).json ({
      message: 'La review no existe',
      messageDev: 'No se encontro el producto en la base de datos',
      code: 'ERR_AUTH',
    });
  }

  await deleteById(id);
  response.status(204).end();
};


exports.getRevByProduct = async function (request, response) {
  const productId = request.params.id;

  const reviews = await findAllbyProd(productId);
  response.status(200).json(reviews);
}
