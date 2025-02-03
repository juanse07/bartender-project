import { cleanEnv, port, str } from "envalid";


const env = cleanEnv(process.env, {
    PORT: port(),
    MONGO_CONNECTION_STRING: str(),
    WEBSITE_URL: str(),
    SERVER_URL: str(),
    APNS_KEY_ID: str(),
    APNS_TEAM_ID: str(),
    APNS_TOPIC: str(),
    APNS_AUTH_KEY: str(),

});

export default env;