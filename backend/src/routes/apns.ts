import { Router } from 'express';
import { checkStoredToken, createElement, listRegisteredDevices, registerDevice } from '../controllers/apns';

const router = Router();

router.post('/', registerDevice);
router.get('/check/:userId', checkStoredToken);
router.get('/list', listRegisteredDevices);
router.post('/create-element', createElement);

export default router;
