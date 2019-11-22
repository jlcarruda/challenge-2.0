const { createLogger, transports, format } = require('winston')
const morgan = require('morgan')

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss:ms' }),
    format.printf(info => `[${process.env.NODE_ENV}] ${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: './logs/all-logs.log',
      json: false,
      maxFiles: 1
    }),
    new transports.Console()
  ]
})

logger.stream = {
  write: message => logger.info(message.substring(0, message.lastIndexOf('\n')))
}

module.exports = {
  logger,
  httpLogger: morgan(':method :url :status :res[content-length] - :response-time ms', { stream: logger.stream })
};