import { Router } from "express";
import { createPost, changePost, removePost } from "../controllers/clients.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import { clientsSchemas } from "../schemas/clients.schemas.js";

const clientsRouter = Router();

clientsRouter.get('/clients:id/orders', getAllclients );
clientsRouter.post('/clients', validateSchema(clientsSchemas), createPost);

export default clientsRouter;