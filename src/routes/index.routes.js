import { Router } from "express";
import { homeController } from "../controllers/home.controller.js";

const router = Router();

router.post('/cadastro');
router.post('/login');
router.post('/home', homeController)

export default router;