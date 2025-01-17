"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const env = (0, envalid_1.cleanEnv)(process.env, {
    PORT: (0, envalid_1.port)(),
    MONGO_CONNECTION_STRING: (0, envalid_1.str)(),
    WEBSITE_URL: (0, envalid_1.str)(),
    SERVER_URL: (0, envalid_1.str)(),
});
exports.default = env;
