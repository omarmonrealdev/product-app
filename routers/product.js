const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");

const { createProductSchema, updateProductSchema, paramsSchema } = require('../validations/product');
const validator = require('../middlewares/validator');

//traemos el middleware para proteger rutas
const jwtValidator = require('../middlewares/jwt');


router.get("/products", getProducts);
router.get("/products/:id", validator.params(paramsSchema),getProduct);
router.post("/products", jwtValidator, validator.body(createProductSchema),createProduct);

router.put(
          "/products/:id", 
          jwtValidator,
          validator.params(paramsSchema), 
          validator.body(updateProductSchema), 
          updateProduct);

router.delete("/products/:id", jwtValidator, validator.params(paramsSchema), deleteProduct);

module.exports = router;
