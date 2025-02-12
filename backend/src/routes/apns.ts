import { Router } from 'express';
import { registerDevice, checkStoredToken } from '../controllers/apns';

const router = Router();
router.post('/', registerDevice);
router.get('/check', checkStoredToken);

export default router;
