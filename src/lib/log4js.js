import path from 'path';
import log4js from 'log4js';

/**
 * log4js configuration
 */
log4js.configure({
    appenders: {
        out: { type: 'console' },
        access: {
            type: 'file',
            filename: path.join(__dirname, '../logs/log4js.log'),
            maxLogSize: 1024,
            backups: 3,
            category: 'normal'
        }
    },
    categories: {
        default: { appenders: ['out'], level: 'info' },
        access: { appenders: ['access'], level: 'info' }
    },
    replaceConsole: true
});

const logger = log4js.getLogger('access');

export default logger;
