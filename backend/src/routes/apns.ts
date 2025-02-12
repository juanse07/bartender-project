import { Router } from 'express';
import { registerDevice } from '../controllers/apns';

const router = Router();
router.post('/', registerDevice);

export default router;
