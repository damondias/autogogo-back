import { Router } from "express";
import { homeController } from "../controllers/home.controllers.js";
import { postNewCar } from "../database/home.middlewares.js";

const router = Router();

router.post('/cadastro');
router.post('/login');
router.post('/home', postNewCar, homeController)

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erro interno no servidor');
})

export default router;