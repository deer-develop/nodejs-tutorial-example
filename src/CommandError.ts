export class CommandError extends Error {
  name: string;
  constructor(message: string) {
    super(`\n${message}\n`);
    this.name = "CommandError";
  }
}
