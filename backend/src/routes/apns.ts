import { Router } from 'express';
import { checkStoredToken, createElement, registerDevice } from '../controllers/apns';

const router = Router();

router.post('/', registerDevice);
router.get('/check/:userId', checkStoredToken);
router.post('/create-element', createElement);

export default router;
