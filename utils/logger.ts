export class Logger {
  private static timestamp() {
    return new Date().toISOString();
  }

  static info(message: string) {
    console.log(`🟦 INFO  [${Logger.timestamp()}] ${message}`);
  }

  static success(message: string) {
    console.log(`🟩 SUCCESS [${Logger.timestamp()}] ${message}`);
  }

  static warn(message: string) {
    console.log(`🟨 WARN  [${Logger.timestamp()}] ${message}`);
  }

  static error(message: string) {
    console.log(`🟥 ERROR [${Logger.timestamp()}] ${message}`);
  }

  static action(message: string) {
    console.log(`⚡ ACTION [${Logger.timestamp()}] ${message}`);
  }
}
