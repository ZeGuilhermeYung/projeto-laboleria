import { Router } from "express";
import validateSchema from "../middlewares/validate.schema.js";
import cakesSchema from "../schemas/cakes.schemas.js";
import { validateCake } from "../middlewares/cakes.middlewares.js";

const cakesRouter = Router();

cakesRouter.post('/cakes', validateSchema(cakesSchema), validateCake, signUp);

export default cakesRouter;