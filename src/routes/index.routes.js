import { Router } from "express";
import { homeController, getCarros } from "../controllers/home.controllers.js";
import { postNewCar } from "../database/home.middlewares.js";
import authRouter from "./auth.routes.js";

const router = Router();

router.use(authRouter)
router.post('/cadastro');
router.post('/login');
router.post('/', postNewCar, homeController)
router.get('/', getCarros)

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erro interno no servidor');
})

export default router;