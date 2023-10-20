import { Router } from "express";
import validateSchema from "../middlewares/validate.schema.js";
import { clientsSchemas } from "../schemas/clients.schemas.js";
import { getClientOrders, postClient } from "../controllers/clients.controllers.js";
import collectClientOrders from "../middlewares/clients.middlewares.js";

const clientsRouter = Router();

clientsRouter.post('/clients', validateSchema(clientsSchemas), postClient);
clientsRouter.get('/clients/:id/orders', collectClientOrders, getClientOrders );

export default clientsRouter;