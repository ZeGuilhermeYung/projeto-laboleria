import { Router } from "express";
import { getUser, getUserServices } from "../controllers/orders.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import ordersSchemas from "../schemas/orders.schemas.js";

const ordersRouter = Router();

ordersRouter.post('/order', validateSchema(ordersSchemas), getUser);
ordersRouter.get('/orders', getUserServices);
ordersRouter.get('/orders/:id', getUserServices);

export default ordersRouter;