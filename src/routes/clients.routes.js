import { Router } from "express";
//import { createPost, changePost, removePost } from "../controllers/clients.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import { clientsSchemas } from "../schemas/clients.schemas.js";

const clientsRouter = Router();

clientsRouter.get('/clients:id/orders' );
clientsRouter.post('/clients', validateSchema(clientsSchemas));

export default clientsRouter;