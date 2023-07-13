import { Router } from "express";
import authRouter from "./auth.routes.js";

const router = Router();

router.use(authRouter)
router.post('/cadastro');
router.post('/login');
router.post('/home')

export default router;