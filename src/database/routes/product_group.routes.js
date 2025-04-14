import express from 'express';
const routesProductGroup = express.Router();

import ProductGroupController from '../controller/ProductGroup.controller.js';

router.post("/productGroup", ProductGroupController.createUser);
router.patch("/productGroup/:id", ProductGroupController.updateUser);
router.delete("/productGroup/:id", ProductGroupController.deleteUser);

export default routesProductGroup;
