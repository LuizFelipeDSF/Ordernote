import express from 'express';
const routesSaleItem = express.Router();

import SaleItemController from '../controller/saleItem.controller.js';

router.post("/saleItem", SaleItemController.createSaleItem);
router.patch("/saleItem/:id", SaleItemController.updateSaleItem);
router.delete("/saleItem/:id", SaleItemController.deleteSaleItem);

export default routesSaleItem;