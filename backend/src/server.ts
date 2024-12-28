import http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import app from "./app";
import env from "./env";

const port = process.env.PORT || 4000;
const server = http.createServer(app);

// Add debug logging
console.log("Initializing Socket.IO server...");

const io = new Server(server, {
    cors: {
        origin: env.WEBSITE_URL,
        methods: ["GET", "POST"],
        credentials: true
    },
    path: "/socket.io"  // Changed this - Socket.IO's default path
});

io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    // Listen for messages
    socket.on("message", (data) => {
        console.log("Message received:", data);
        // Echo back to the client
        socket.emit("response", `Server received: ${data}`);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// Add more debug logging
io.engine.on("connection_error", (err) => {
    console.log("Connection error:", err);
});

mongoose
    .connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to MongoDB");
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            console.log(`Socket.IO path: ${io.path()}`);
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
