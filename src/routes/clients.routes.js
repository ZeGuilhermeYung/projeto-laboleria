import { Router } from "express";
//import { createPost, changePost, removePost } from "../controllers/clients.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import { clientsSchemas } from "../schemas/clients.schemas.js";
import { postClient } from "../controllers/clients.controllers.js";

const clientsRouter = Router();

clientsRouter.post('/clients', validateSchema(clientsSchemas), postClient);
clientsRouter.get('/clients:id/orders' );

export default clientsRouter;