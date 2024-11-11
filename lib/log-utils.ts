import * as chalk from 'chalk';

export function logText(message: string): void {
  console.log(chalk.green(message));
}

export function logItalic(text: string): void {
  console.log(chalk.italic(text));
}

export function logError(text: string): void {
  console.log(chalk.red(text));
}
