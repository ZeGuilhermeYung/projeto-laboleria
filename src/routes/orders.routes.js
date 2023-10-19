import { Router } from "express";
//import { getUser, getUserServices } from "../controllers/orders.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import ordersSchemas from "../schemas/orders.schemas.js";
import { postOrder } from "../controllers/orders.controllers.js";
import { validateOrder } from "../middlewares/orders.middlewares.js";

const ordersRouter = Router();

ordersRouter.post('/order', validateSchema(ordersSchemas), validateOrder, postOrder);
ordersRouter.get('/orders', );
ordersRouter.get('/orders/:id', );

export default ordersRouter;