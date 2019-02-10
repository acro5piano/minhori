import * as winston from 'winston'

export const loggerOptions = {
  level: 'info',
  format: winston.format.cli(),
  transports: [new winston.transports.Console()],
}

export const logger = winston.createLogger(loggerOptions)

export const logStdout = (data: any) => logger.info(`stdout: ${String(data)}`)
const expressWinston = require('express-winston')

export const loggerMiddleware = expressWinston.logger(loggerOptions)
