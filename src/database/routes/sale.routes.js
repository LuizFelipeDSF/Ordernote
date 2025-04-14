import express from 'express';
const routesSale = express.Router();

import SaleController from '../controller/sale.controller.js';

router.post("/sale", SaleController.createSale);
router.patch("/sale/:id", SaleController.updateSale);
router.delete("/sale/:id", SaleController.deleteSale);

export default routesSale;
