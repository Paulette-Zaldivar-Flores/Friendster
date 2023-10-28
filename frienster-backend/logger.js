const winston = require("winston");

// Define the log levels and their colors
const logLevels = {
  error: "red",
  warn: "yellow",
  info: "green",
  verbose: "white",
  debug: "blue",
  silly: "magenta",
};

// Create a Winston logger instance
const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
   // new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "backend.log" }),
  ],
});

// Set the default log level
logger.level = "info";

module.exports = logger;
