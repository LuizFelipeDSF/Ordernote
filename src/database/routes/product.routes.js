import express from 'express';
const routesProduct = express.Router();

import ProductController from '../controller/product.controller.js';

router.post("/product", ProductController.createProduct);
router.patch("/product/:id", ProductController.updateProduct);
router.delete("/product/:id", ProductController.deleteProduct);

export default routesProduct;
