import express from 'express';
const server = express();


import routesUser from "./routes/user.routes.js";
import routesSale from "../database/routes/sale.routes.js";
import routesSaleItem from "../database/routes/sale_item.routes.js";
import routesProduct from './routes/product.routes';
import routesProductVariation from './routes/product_variation.routes';
import routesProductGroup from './routes/product_group.routes';
import routesOrder from './routes/order.routes';
import routesCustomer from './routes/customers.routes';


const PORT = process.env.PORT || 3000;

server.use(express.json());

server.use("/api", routesUser);
server.use("/api", routesSale);
server.use("/api", routesSaleItem);
server.use("/api", routesProduct);
server.use("/api", routesProductVariation);
server.use("/api", routesProductGroup);
server.use("/api", routesOrder);
server.use("/api", routesCustomer);


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
