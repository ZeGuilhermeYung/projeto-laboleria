import { Router } from "express";
import validateSchema from "../middlewares/validate.schema.js";
import ordersSchemas from "../schemas/orders.schemas.js";
import { getOrders, postOrder } from "../controllers/orders.controllers.js";
import { collectOrders, collectOrderById, validateOrder } from "../middlewares/orders.middlewares.js";

const ordersRouter = Router();

ordersRouter.post('/order', validateSchema(ordersSchemas), validateOrder, postOrder);
ordersRouter.get('/orders', collectOrders, getOrders );
ordersRouter.get('/orders/:id', collectOrderById, getOrders );

export default ordersRouter;