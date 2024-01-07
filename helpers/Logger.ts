import winston from 'winston';

const Logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.align(),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level} ${info.message}`,
        ),
      ),
    }),
  ],
});

const TEST_SEPARATOR = '#'.repeat(80);

export default class Log {
  public static printLogs(msg: string, separator: string): void {
    Logger.info(separator);
    Logger.info(`${msg.toLocaleUpperCase()}`);
    Logger.info(separator);
  }

  public static testBegin(scenario: string): void {
    this.printLogs(`Scenario: ${scenario}`, TEST_SEPARATOR);
  }

  public static testEnd(scenario: string, status: string): void {
    const status_emoji = status === 'PASSED' ? '✅' : '❌';

    this.printLogs(
      `Scenario: ${scenario} - ${status} ${status_emoji}`,
      TEST_SEPARATOR,
    );
  }

  public static info(message: string): void {
    Logger.info(message);
  }

  public static error(message: string): void {
    Logger.error(message);
  }
}
