import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import { createreserve } from "../controllers/reserve.controllers.js";

const reserveRouter = Router();

reserveRouter.use(validateAuth);

reserveRouter.post('/reserve', createreserve );


export default reserveRouter


