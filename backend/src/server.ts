import http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import app from "./app";
import env from "./env";

const port = process.env.PORT || 3001;

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
    cors: {
        origin: env.WEBSITE_URL, // Frontend URL
        methods: ["GET", "POST"],

    },
    path: "/ws", // WebSocket path
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
        });
    })
    .catch(console.error);

export { io }; // Export the `io` instance for use in controllers








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
