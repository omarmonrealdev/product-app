const { findAll, findById, insert, deleteById, update } = require("../services/product");

exports.getProducts = async function (request, response) {
  const products = await findAll();
  response.status(200).json(products);
}

exports.getProduct = async function(request, response) {
  const {id} = request.params;
  const product = await findById(id);

  if (!product) {
    return response.status(401).json ({
      message: 'Producto no disponible',
      messageDev: 'No se encontro el producto en la base de datos',
      code: 'ERR_AUTH',
    });
  }

  response.status(200).json(product);
}

exports.createProduct = async function (request, response) {
  const { image, sku, description } = request.body;
  
  const product = await insert({ image, sku, description, userId: request.user.id });
  response.status(201).json(product);
}

exports.updateProduct = async function (request, response) {
	const { image, sku, description } = request.body;
	const { id } = request.params;

  if (!await findById(id)) {
    return response.status(401).json ({
      message: 'Producto no disponible',
      messageDev: 'No se encontro el producto en la base de datos',
      code: 'ERR_AUTH',
    });
  }

	await update(id, { image, sku, description });
	response.status(204).end();
};

exports.deleteProduct = async function (request, response) {
	const { id } = request.params;

  if (!await findById(id)) {
    return response.status(401).json ({
      message: 'Producto no disponible',
      messageDev: 'No se encontro el producto en la base de datos',
      code: 'ERR_AUTH',
    });
  }

	await deleteById(id);
	response.status(204).end();
};

