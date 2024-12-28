import http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import app from "./app";
import env from "./env";

const port = process.env.PORT || 4000;

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.IO - make sure this runs BEFORE starting the server
const io = new Server(server, {
    cors: {
        origin: env.WEBSITE_URL,
        methods: ["GET", "POST"],
        credentials: true  // Add this if using withCredentials
    },
    path: "/ws/socket.io",  // Changed this path
});

// WebSocket connection event
io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    
    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// Connect to MongoDB and start the server
mongoose
    .connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to MongoDB");
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            console.log(`Socket.IO is listening on path: ${io.path()}`);  // Add this log
        });
    })
    .catch(console.error);

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
