import express from 'express';
const routesCustomer = express.Router();

import CustomerController from '../controller/customer.controller.js';

router.post("/customerController", CustomerController.createUser);
router.patch("/customerController/:id", CustomerController.updateUser);
router.delete("/customerController/:id", CustomerController.deleteUser);

export default routesCustomer;
