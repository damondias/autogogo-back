import { Router } from "express";
import { homeController, getCarros } from "../controllers/home.controllers.js";
import { postNewCar } from "../database/home.middlewares.js";
import authRouter from "./auth.routes.js";
import reserveRouter from "./reserveRouter.js";
import { enviarEmail } from "../controllers/sendemail.controller.js";

const router = Router();

router.use(authRouter)
router.post('/cadastro');
router.post('/login');
router.post('/', postNewCar, homeController)
router.get('/', getCarros)
router.post('/emailSuccess', enviarEmail)
router.post('/send-mail', enviarEmail)

router.use(reserveRouter);

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erro interno no servidor');
})

export default router;