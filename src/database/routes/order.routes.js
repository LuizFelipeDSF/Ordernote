import express from 'express';
const routesOrder = express.Router();

import OrderController from '../controller/order.controller.js';

router.post("/orderController", OrderController.createUser);
router.patch("/orderController/:id", OrderController.updateUser);
router.delete("/orderController/user/:id", OrderController.deleteUser);

export default routesOrder;
