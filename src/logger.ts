import colors from 'colors';

colors.enable();

enum LogLevel {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

class Logger {
  private getTimestamp(): string {
    const now = new Date();
    return now.toISOString();
  }

  private formatMessage(level: LogLevel, message: string): string {
    return `[${this.getTimestamp()}] [${level}] ${message}`;
  }

  success(message: string): void {
    console.log(colors.green(this.formatMessage(LogLevel.SUCCESS, message)));
  }

  info(message: string): void {
    console.log(colors.blue(this.formatMessage(LogLevel.INFO, message)));
  }

  warn(message: string): void {
    console.warn(colors.yellow(this.formatMessage(LogLevel.WARN, message)));
  }

  error(message: string): void {
    console.error(colors.red(this.formatMessage(LogLevel.ERROR, message)));
  }
}

const logger = new Logger();
export default logger;