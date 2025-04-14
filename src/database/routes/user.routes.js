import express from 'express';
const routesUser = express.Router();

import UserController from '../controller/user.controller';

router.post("/user", UserController.createUser);
router.patch("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);


export default routesUser;

/*
A rota é a URL que o cliente acessa para realizar
post = para cadastro
get = para leitura
patch = para atualização
delete = para exclusão
*/