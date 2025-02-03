// src/sendPush.ts
import apn, { Provider } from 'apn';

// 1. Set your APNs provider options
const options: apn.ProviderOptions = {
    cert: process.env.APNS_CERT_PATH || "./certs/PushCert.pem",
    key: process.env.APNS_KEY_PATH || "./certs/PushCert.pem",
    passphrase: process.env.APNS_PASSPHRASE || "MpGs_24009",
    //production: false,
     production: process.env.NODE_ENV === 'production'
  };

// 2. Create a provider
const apnProvider: Provider = new apn.Provider(options);

// 3. Use the device token from the iOS (TestFlight) app
const deviceToken = "YOUR_IOS_DEVICE_TOKEN_HERE";

// 4. Create a notification object
const note = new apn.Notification({
  alert: {
    title: "Hello from TypeScript",
    body: "This is a test message!"
  },
  sound: "default",
  topic: "com.example.bartenderCompanion", // your app's bundle ID
});

// 5. Send the notification
apnProvider.send(note, deviceToken).then((response) => {
  console.log("Sent:", response.sent.length);
  console.log("Failed:", response.failed.length);
  console.log("Errors:", response.failed);
  
  // Shut down the connection
  apnProvider.shutdown();
});
