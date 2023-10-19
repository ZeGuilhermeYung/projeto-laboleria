import { Router } from "express";
import validateSchema from "../middlewares/validate.schema.js";
import cakesSchema from "../schemas/cakes.schemas.js";

const cakesRouter = Router();

cakesRouter.post('/cakes', validateSchema(cakesSchema), signUp);

export default cakesRouter;