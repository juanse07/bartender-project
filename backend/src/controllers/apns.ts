import { RequestHandler } from 'express';
import { ApnsToken } from '../models/apnsToken';
import { Element } from '../models/Element';
import { sendPushNotification } from '../services/apns';

export const registerDevice: RequestHandler = async (req, res, next) => {
    try {
        const { userId, deviceToken } = req.body as { userId: string; deviceToken: string };
        if (!userId || !deviceToken) {
            res.status(400).json({ message: "Missing userId or deviceToken" });
            return;
        }

        // Upsert the token
        const updatedToken = await ApnsToken.findOneAndUpdate(
            { userId },
            { apnsToken: deviceToken },
            { upsert: true, new: true }
        );

        console.log('✅ Device token stored in DB:', updatedToken);
        
        // Send test notification
        try {
            await sendPushNotification(deviceToken, "Test notification - Registration successful!");
            console.log('✅ Test notification sent successfully');
        } catch (error) {
            console.error('❌ Failed to send test notification:', error);
        }
        
        res.status(200).json({ message: "Device token registered successfully" });
    } catch (error) {
        console.error('❌ Error registering device:', error);
        next(error);
    }
}

export const checkStoredToken: RequestHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const tokenDoc = await ApnsToken.findOne({ userId });
        
        res.json({ 
            hasToken: !!tokenDoc,
            token: tokenDoc?.apnsToken || null,
            timestamp: new Date().toISOString()
        });
    } catch {
        res.status(500).json({ message: "Error checking token" });
    }
};

export const createElement: RequestHandler = async (req, res, next) => {
    try {
        const { userId, title, body } = req.body as { 
            userId: string; 
            title: string; 
            body: string; 
        };

        console.log('📱 Attempting to send notification for user:', userId);

        // Lookup user's device token first
        const userTokenDoc = await ApnsToken.findOne({ userId });
        if (!userTokenDoc) {
            console.log('❌ No device token found for user:', userId);
            res.status(404).json({ message: "User not found or no token" });
            return;
        }

        console.log('✅ Found device token:', userTokenDoc.apnsToken);

        // Send push notification before creating element
        try {
            const pushResult = await sendPushNotification(userTokenDoc.apnsToken, `${title}: ${body}`);
            console.log('✅ Push notification result:', pushResult);
        } catch (pushError) {
            console.error('❌ Push notification failed:', pushError);
            // Continue with element creation even if push fails
        }

        // Create the element in DB
        const newElement = await Element.create({ userId, title, body });
        
        res.status(201).json({ 
            message: "Element created & push attempted",
            element: newElement 
        });
    } catch (error) {
        console.error('❌ Error in createElement:', error);
        next(error);
    }
};

export const listRegisteredDevices: RequestHandler = async (req, res) => {
    try {
        const devices = await ApnsToken.find({});
        res.json({ 
            count: devices.length,
            devices: devices.map(device => ({
                userId: device.userId,
                token: device.apnsToken,
                registeredAt: device.createdAt
            }))
        });
    } catch (error) {
        console.error('❌ Error listing devices:', error);
        res.status(500).json({ message: "Error listing devices" });
    }
};