import { Router } from "express";
import * as testController from "../controllers/testController.js";
import { validateToken } from "../middlewares/validateToken.js";

const testRouter = Router();

testRouter.get('/tests', validateToken, testController.getTests);

export default testRouter;