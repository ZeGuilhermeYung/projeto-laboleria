import { Router } from "express";
import { getUser, getUserServices } from "../controllers/orders.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import ordersSchemas from "../schemas/orders.schemas.js";

const ordersRouter = Router();

ordersRouter.post('/order', validateSchema(ordersSchemas));
ordersRouter.get('/orders', );
ordersRouter.get('/orders/:id', );

export default ordersRouter;