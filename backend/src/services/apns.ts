import * as apn from "apn";
import * as dotenv from "dotenv";

dotenv.config();

// APNs Configuration
const options = {
  token: {
    key: process.env.APNS_AUTH_KEY_PATH as string, // Path to .p8 file
    keyId: process.env.APNS_KEY_ID as string, // Your APNs Key ID
    teamId: process.env.APNS_TEAM_ID as string, // Your Apple Team ID
  },
  production: true,
};

// Initialize APNs provider
const apnProvider = new apn.Provider(options);

// Function to send push notification
export const sendPushNotification = async (deviceToken: string, message: string) => {
  const notification = new apn.Notification();
  notification.alert = message;
  notification.topic = process.env.APNS_BUNDLE_ID as string; // Your app's bundle ID

  try {
    const result = await apnProvider.send(notification, deviceToken);
    console.log("Push Notification Response:", result);
  } catch (error) {
    console.error("Error Sending Push:", error);
  }
};
module.exports = { sendPushNotification };