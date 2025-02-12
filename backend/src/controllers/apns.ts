import { RequestHandler } from 'express';
import { sendPushNotification } from '../services/apns';

let storedDeviceToken: string | null = null;

export const getStoredDeviceToken = () => storedDeviceToken;

export const registerDevice: RequestHandler = async (req, res, next) => {
    try {
        const { deviceToken } = req.body as { deviceToken: string };
        if (!deviceToken) {
            res.status(400).send('Device token is required');
            return;
        }
        storedDeviceToken = deviceToken;
        console.log('✅ Device token stored successfully:', deviceToken);
        
        // Send a test notification immediately after registration
        try {
            await sendPushNotification(deviceToken, "Test notification - Registration successful!");
            console.log('✅ Test notification sent successfully');
        } catch (error) {
            console.error('❌ Failed to send test notification:', error);
        }
        
        res.status(200).send('Device token registered successfully');
    } catch (error) {
        console.error('❌ Error registering device:', error);
        next(error);
    }
}

export const checkStoredToken: RequestHandler = async (req, res) => {
    const token = getStoredDeviceToken();
    res.json({ 
        hasToken: !!token,
        token: token,
        timestamp: new Date().toISOString()
    });
};