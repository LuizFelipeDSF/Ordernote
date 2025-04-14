import express from 'express';
const routesProductVariation = express.Router();

import ProductVariationController from '../controller/productVariation.controller.js';

router.post("/productVariation", ProductVariationController.createProduct_Variation);
router.patch("/productVariation/:id", ProductVariationController.updateProduct_Variation);
router.delete("/productVariation/:id", ProductVariationController.deleteProduct_Variation);

export default routesProductVariation;
