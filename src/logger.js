const winston = require("winston");

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "debug",
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }), // Fehlerprotokolle in 'error.log'
    new winston.transports.File({ filename: "combined.log" }), // Alle Protokolle in 'combined.log'
  ],
});
