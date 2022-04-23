import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import authSchema from "../schemas/authSchema.js";
import * as authController from '../controllers/authController.js';

const authRouter = Router();

authRouter.use(validateSchemaMiddleware(authSchema));
authRouter.post('/sign_up', authController.createUser);
authRouter.post('/sign_in', ()=>{});

export default authRouter;