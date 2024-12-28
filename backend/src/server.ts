import fs from 'fs';
import http from "http";
import mongoose from "mongoose";
import path from 'path';
import { Server } from "socket.io";
import app from "./app";
import env from "./env";

const port = process.env.PORT || 4000;
const server = http.createServer(app);

// Add file logging
const logFile = path.join(__dirname, 'socket-logs.txt');

const logToFile = (message: string) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
};

console.log("Initializing Socket.IO server...");
logToFile("Initializing Socket.IO server...");

const io = new Server(server, {
    cors: {
        origin: env.WEBSITE_URL,
        methods: ["GET", "POST"],
        credentials: true
    },
    path: "/socket.io"
});

io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    logToFile(`New client connected: ${socket.id}`);

    // Listen for messages
    socket.on("message", (data) => {
        console.log("Message received:", data);
        logToFile(`Message received: ${JSON.stringify(data)}`);
        // Echo back to the client
        socket.emit("response", `Server received: ${data}`);
    });

    socket.on("disconnect", (reason) => {
        console.log("Client disconnected:", socket.id);
        logToFile(`Client disconnected: ${socket.id}, Reason: ${reason}`);
    });
});

// Add more debug logging
io.engine.on("connection_error", (err) => {
    console.log("Connection error:", err);
    logToFile(`Connection error: ${JSON.stringify(err)}`);
});

mongoose
    .connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to MongoDB");
        logToFile("Connected to MongoDB");
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            console.log(`Socket.IO path: ${io.path()}`);
            logToFile(`Server running on port ${port}, Socket.IO path: ${io.path()}`);
        });
    })
    .catch((error) => {
        console.error(error);
        logToFile(`MongoDB connection error: ${error}`);
    });

export { io };







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
