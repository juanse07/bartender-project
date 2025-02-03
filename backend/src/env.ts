import { cleanEnv, port, str } from "envalid";


const env = cleanEnv(process.env, {
    PORT: port(),
    MONGO_CONNECTION_STRING: str(),
    WEBSITE_URL: str(),
    SERVER_URL: str(),
    APNS_CERT_PATH: str(),
    APNS_PASSPHRASE: str(),

});

export default env;