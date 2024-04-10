import * as welcomeController from '../controllers/welcome';
import * as express from 'express';
const router = express.Router();

router.get('/', welcomeController.welcome);

export default router;
