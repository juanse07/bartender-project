"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./env"));
const BarServiceQuotation_1 = __importDefault(require("./routes/BarServiceQuotation"));
const app = (0, express_1.default)();
// Basic middleware - should be first
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
const allowedOrigins = env_1.default.WEBSITE_URL;
// CORS configuration
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));
// Routes
app.use("/bar-service-quotations", BarServiceQuotation_1.default);
app.use("/new-estimates", BarServiceQuotation_1.default);
// Add a basic route handler for Socket.IO health check
app.get('/socket.io/', (req, res) => {
    res.send('Socket.IO endpoint');
});
// Error handling middleware - should be last
// app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });
exports.default = app;
