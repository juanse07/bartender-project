import { RequestHandler } from 'express';

let storedDeviceToken: string | null = null;

export const getStoredDeviceToken = () => storedDeviceToken;

export const registerDevice: RequestHandler = async (req, res, next) => {
    try {
        const { deviceToken } = req.body as { deviceToken: string };
        if (!deviceToken) {
            res.status(400).send('Device token is required');
            return;
        }
        storedDeviceToken = deviceToken; // Store the token
        console.log('Received device token:', deviceToken);
        res.status(200).send('Device token registered successfully');
    } catch (error) {
        next(error);
    }
}