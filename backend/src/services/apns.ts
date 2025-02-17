import * as apn from "apn";
import * as dotenv from "dotenv";
import * as fs from 'fs';

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
    const notification = new apn.Notification();
    
    notification.expiry = Math.floor(Date.now() / 1000) + 3600; // 1 hour
    notification.badge = 1;
    notification.sound = "default";  // Changed from ping.aiff to default
    notification.alert = {
      title: "Denver Bartenders",  // More descriptive title
      body: message,
      subtitle: "New Notification"  // Added subtitle
    };
    notification.payload = {
      messageFrom: "Denver Bartenders App"
    };
    notification.topic = process.env.APNS_BUNDLE_ID as string;
    notification.contentAvailable = true;
    notification.mutableContent = true;  // Changed from 1 to true
    notification.priority = 10;  // High priority

    const result = await apnProvider.send(notification, deviceToken);
    console.log("Push Notification Response:", result);
    
    if (result.failed.length > 0) {
      console.error("Failed to send notification:", result.failed[0].response);
      throw new Error(result.failed[0].response?.reason || "Unknown error");
    }

    return result;  // Return result for debugging
  } catch (error) {
    console.error('Error sending push notification:', error);
    throw error;
  }
};

export default { sendPushNotification };