const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const log_path = "logs";

const { format } = winston;
const { combine, timestamp, json } = format;

const container = new winston.Container();

container.add("request", {
    format: combine(
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        json()
    ),
    transports: [
        new DailyRotateFile({
            filename: log_path + "/request/%DATE%.log",
            datePattern: "YYYY-MM-DD",
            //zippedArchive: true,
            maxSize: null, //20m
            maxFiles: "14d",
        }),
    ],
});

module.exports = {
    requestLogger: container.get("request"),
};
