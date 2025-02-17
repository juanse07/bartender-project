import * as apn from "apn";
import * as dotenv from "dotenv";
import * as fs from 'fs';
import { log } from '../server';

dotenv.config();

// Read the key file
const keyPath = "./certs/DenBarApnKey.p8";
if (!fs.existsSync(keyPath)) {
    throw new Error(`APNs key file not found at: ${keyPath}`);
}

const keyContent = fs.readFileSync(keyPath, 'utf8');

// APNs Configuration
const options = {
  token: {
    key: keyContent,  // Use the loaded key content
    keyId: process.env.APNS_KEY_ID as string,
    teamId: process.env.APNS_TEAM_ID as string,
  },
  production: true  // Use true for production
};

// Initialize APNs provider
const apnProvider = new apn.Provider(options);

// Function to send push notification
export const sendPushNotification = async (deviceToken: string, message: string) => {
  try {
    log('🔄 Preparing to send notification to device: ' + deviceToken);
    const notification = new apn.Notification();
    
    notification.expiry = Math.floor(Date.now() / 1000) + 3600;
    notification.badge = 1;
    notification.sound = "default";
    notification.alert = {
      title: "DenverBartenders",
      body: message,
      subtitle: "New Notification"
    };
    notification.payload = {
      messageFrom: "Denver Bartenders App"
    };
    notification.topic = process.env.APNS_BUNDLE_ID as string;
    
    log('📝 Notification config: ' + JSON.stringify({
      topic: notification.topic,
      alert: notification.alert,
      env: process.env.NODE_ENV
    }));

    const result = await apnProvider.send(notification, deviceToken);
    log('📬 Push Notification Full Response: ' + JSON.stringify(result, null, 2));
    
    if (result.failed.length > 0) {
      log('❌ Failed to send notification: ' + JSON.stringify({
        reason: result.failed[0].response?.reason,
        status: result.failed[0].status,
        response: result.failed[0].response
      }));
      throw new Error(result.failed[0].response?.reason || "Unknown error");
    }

    if (result.sent.length > 0) {
      log('✅ Successfully sent notification to device');
    }

    return result;
  } catch (error) {
    log('❌ Error sending push notification: ' + error);
    throw error;
  }
};

export default { sendPushNotification };