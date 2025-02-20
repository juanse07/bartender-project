import http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import app from "./app"; // Import the app with all routes

import * as fs from 'fs';
import * as path from 'path';
import env from "./env";
import { ApnsToken } from './models/apnsToken';
import { sendPushNotification } from './services/apns';

// Initialize HTTP server
const server = http.createServer(app);

// Setup logging
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logStream = fs.createWriteStream(path.join(logDir, 'apns.log'), { flags: 'a' });

// Export the log function
export const logToFile = (message: string) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}\n`;
    console.log(logMessage);
    logStream.write(logMessage);
};

console.log("Initializing Socket.IO server...");
// logToFile("Initializing Socket.IO server...");
const io = new Server(server, {
  cors: {
    origin: env.WEBSITE_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
  path: "/socket.io/",
  pingInterval: 30000, // 30 seconds
  pingTimeout: 60000, // 60 seconds
});

// Handle Socket.IO events
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);
  // logToFile(`New client connected: ${socket.id}`);

  // Listen for custom events
  socket.on("message", (data) => {
    console.log("Message received:", data);
    // logToFile(`Message received: ${JSON.stringify(data)}`);
    socket.emit("response", `Server received: ${data}`);
  });

  socket.on("disconnect", (reason) => {
    console.log("Client disconnected:", socket.id, "Reason:", reason);
    // logToFile(`Client disconnected: ${socket.id}, Reason: ${reason}`);
  });
});

// Handle connection errors
io.engine.on("connection_error", (err) => {
  console.error("Connection error:", err);
  // logToFile(`Connection error: ${JSON.stringify(err)}`);
});

// Add MongoDB Change Streams
let changeStreamInitialized = false;  // Add this flag

mongoose.connection.once("open", () => {
  if (changeStreamInitialized) return;  // Skip if already initialized
  changeStreamInitialized = true;

  console.log("MongoDB connection is open, setting up change streams...");
  // logToFile("MongoDB connection is open, setting up change streams...");

  const barServiceQuotationCollection = mongoose.connection.collection("newestimates");
  const changeStream = barServiceQuotationCollection.watch();

  changeStream.on("change", async (change) => {
    console.log("Change detected:", change);

    try {
      // Get all registered devices
      const devices = await ApnsToken.find({});
      
      if (change.operationType === "insert") {
        // New quotation created
        const doc = change.fullDocument;
        const eventDate = new Date(doc.eventDate);
        // Adjust for UTC offset
        eventDate.setDate(eventDate.getDate());
        
        const date = eventDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          timeZone: 'UTC'  // Force UTC timezone
        });
        
        const message = `New request: ${doc.eventType} on ${date} from ${doc.contactName}`;
        
        // Send to all registered devices
        for (const device of devices) {
          try {
            await sendPushNotification(device.apnsToken, message);
            logToFile(`✅ Notification sent to device: ${device.userId}`);
          } catch (error) {
            logToFile(`❌ Failed to send notification to device ${device.userId}: ${error}`);
          }
        }

        io.emit("newBarServiceQuotation", change.fullDocument);
      }

      if (change.operationType === "update") {
        // Quotation updated
        const message = "A quotation has been updated";
        
        for (const device of devices) {
          try {
            await sendPushNotification(device.apnsToken, message);
            logToFile(`✅ Update notification sent to device: ${device.userId}`);
          } catch (error) {
            logToFile(`❌ Failed to send update notification to device ${device.userId}: ${error}`);
          }
        }

        io.emit("updateBarServiceQuotation", change.updateDescription);
      }

      if (change.operationType === "delete") {
        // Quotation deleted
        const message = "A quotation has been deleted";
        
        for (const device of devices) {
          try {
            await sendPushNotification(device.apnsToken, message);
            logToFile(`✅ Delete notification sent to device: ${device.userId}`);
          } catch (error) {
            logToFile(`❌ Failed to send delete notification to device ${device.userId}: ${error}`);
          }
        }

        io.emit("deleteBarServiceQuotation", change.documentKey);
      }
    } catch (error) {
      logToFile(`❌ Error processing change stream: ${error}`);
    }
  });

  changeStream.on("error", (error) => {
    console.error("Error in change stream:", error);
    // logToFile(`Error in change stream: ${error}`);
    changeStreamInitialized = false;  // Reset flag on error
  });
});

// Start the server after connecting to MongoDB
const port = process.env.PORT || 4000;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
    // logToFile("Connected to MongoDB");

    // Initialize device token and send test notification
    // const deviceToken = getStoredDeviceToken();
    // if (deviceToken) {
    //     sendPushNotification(deviceToken, "Hello from APNs!")
    //         .then(() => console.log("Sent push notification to device:", deviceToken))
    //         .catch(error => console.error("Failed to send push notification:", error));
    // }

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`Socket.IO path: ${io.path()}`);
      // logToFile(`Server running on port ${port}, Socket.IO path: ${io.path()}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    // logToFile(`MongoDB connection error: ${error}`);
  });

export { io };
