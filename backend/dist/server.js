"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const socket_io_1 = require("socket.io");
const app_1 = __importDefault(require("./app"));
const env_1 = __importDefault(require("./env"));
// Initialize HTTP server
const server = http_1.default.createServer(app_1.default);
// Uncomment if file logging is needed
/*
import fs from "fs";
const logFile = "/home/juanse/apps/bartender-project/backend/socket-logs.txt";
const logToFile = (message: string) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp}: ${message}\n`;
  fs.appendFileSync(logFile, logMessage);
};
*/
console.log("Initializing Socket.IO server...");
// logToFile("Initializing Socket.IO server...");
const io = new socket_io_1.Server(server, {
    cors: {
        origin: env_1.default.WEBSITE_URL,
        methods: ["GET", "POST"],
        credentials: true,
    },
    path: "/socket.io/",
    pingInterval: 30000, // 30 seconds
    pingTimeout: 60000, // 60 seconds
});
exports.io = io;
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
mongoose_1.default.connection.once("open", () => {
    console.log("MongoDB connection is open, setting up change streams...");
    // logToFile("MongoDB connection is open, setting up change streams...");
    const barServiceQuotationCollection = mongoose_1.default.connection.collection("barservicequotations");
    // Watch for changes in the collection
    const changeStream = barServiceQuotationCollection.watch();
    changeStream.on("change", (change) => {
        console.log("Change detected:", change);
        if (change.operationType === "insert") {
            // Emit new data to clients
            io.emit("newBarServiceQuotation", change.fullDocument);
            console.log("Emitted newBarServiceQuotation event via Socket.IO", change.fullDocument);
        }
        if (change.operationType === "update") {
            // Emit update details
            io.emit("updateBarServiceQuotation", change.updateDescription);
            console.log("Emitted updateBarServiceQuotation event via Socket.IO");
        }
        if (change.operationType === "delete") {
            // Emit deletion notification
            io.emit("deleteBarServiceQuotation", change.documentKey);
            console.log("Emitted deleteBarServiceQuotation event via Socket.IO");
        }
    });
    changeStream.on("error", (error) => {
        console.error("Error in change stream:", error);
        // logToFile(`Error in change stream: ${error}`);
    });
});
// Start the server after connecting to MongoDB
const port = process.env.PORT || 4000;
mongoose_1.default
    .connect(env_1.default.MONGO_CONNECTION_STRING)
    .then(() => {
    console.log("Connected to MongoDB");
    // logToFile("Connected to MongoDB");
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
/////////////
// import mongoose from "mongoose";
// import app from "./app";
// import env from "./env";
// const port= process.env.PORT;
// mongoose.connect(env.MONGO_CONNECTION_STRING) 
// .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     });
// })
// .catch(console.error);
