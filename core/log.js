const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const appConfig = require("../config/app");

const ConLocalStorage = require("continuation-local-storage");

const { format } = winston;
const { combine, timestamp, json } = format;

const container = new winston.Container();

function getLogger(logger_name, level) {
    const log_path = "logs";
    const logger = {
        level: level,
        format: combine(
            timestamp({
                format: "YYYY-MM-DD HH:mm:ss",
            }),
            json()
        ),
        transports: [
            new DailyRotateFile({
                filename: log_path + "/" + logger_name + "/%DATE%.log",
                datePattern: "YYYY-MM-DD",
                //zippedArchive: true,
                maxSize: null, //20m
                maxFiles: "14d",
            }),
        ],
    };
    return logger;
}

const request_logger_name = "request";
container.add(request_logger_name, getLogger(request_logger_name, "info"));

const app_logger_name = "app";
container.add(app_logger_name, getLogger(app_logger_name, appConfig.logLevel));

const error_logger_name = "error";
container.add(error_logger_name, getLogger(error_logger_name, "warn"));

class Logger {
    debug(keywords, message) {
        this._log("debug", keywords, message);
    }

    info(keywords, message) {
        this._log("info", keywords, message);
    }
    warn(keywords, message) {
        this._log("warn", keywords, message);
    }
    error(keywords, message) {
        this._log("error", keywords, message);
    }
    _log(level, keywords, message) {
        const localStorage =
            ConLocalStorage.getNamespace("localStorage") ||
            ConLocalStorage.createNamespace("localStorage");
        container
            .get(app_logger_name)
            .child({ requestId: localStorage.get("requestId") || 0 })
            .log(level, message, { keywords: keywords });
    }
}

module.exports = {
    requestLogger: container.get(request_logger_name),
    errorLogger: container.get(error_logger_name),
    logger: new Logger(),
};
