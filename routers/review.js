const express = require("express");
const router = express.Router();
const {
  createReview,
  deleteReview,
  updateReview,
} = require("../controllers/review");

const { createReviewSchema, updateReviewSchema, paramsSchema } = require('../validations/review');
const validator = require('../middlewares/validator');

//traemos el middleware para proteger rutas
const jwtValidator = require('../middlewares/jwt');


router.post("/products/:id/reviews", jwtValidator, validator.params(paramsSchema), validator.body(createReviewSchema), createReview);
router.put("/reviews/:id", jwtValidator, validator.params(paramsSchema), validator.body(updateReviewSchema), updateReview);
router.delete("/reviews/:id", jwtValidator, validator.params(paramsSchema), deleteReview);


module.exports = router;