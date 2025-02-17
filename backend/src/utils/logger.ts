import * as fs from 'fs';
import * as path from 'path';

// Setup logging
const logDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logStream = fs.createWriteStream(path.join(logDir, 'apns.log'), { flags: 'a' });

export const log = (message: string) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}\n`;
    console.log(logMessage);
    logStream.write(logMessage);
}; 