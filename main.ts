import * as chalk from 'chalk'
import { zip, from, interval } from 'rxjs';
import { argv } from 'yargs';

import { runExerciseModule } from './lib/run-exercise';

const ORANGE = '#ee7c11';
const BLUE = '#0071b3'

const WELCOME_TEXT_LINES = [
    ``,
    ``,
    chalk.hex(BLUE)(` _____                                _       _    __        __         _        _                  `),
    chalk.hex(BLUE)(`|_   _|   _ _ __   ___  ___  ___ _ __(_)_ __ | |_  \\ \\      / /__  _ __| | _____| |__   ___  _ __   `),
    chalk.hex(BLUE)(`  | || | | | '_ \\ / _ \\/ __|/ __| '__| | '_ \\| __|  \\ \\ /\\ / / _ \\| '__| |/ / __| '_ \\ / _ \\| '_ \\  `),
    chalk.hex(BLUE)(`  | || |_| | |_) |  __/\\__ \\ (__| |  | | |_) | |_    \\ V  V / (_) | |  |   <\\__ \\ | | | (_) | |_) | `),
    chalk.hex(BLUE)(`  |_| \\__, | .__/ \\___||___/\\___|_|  |_| .__/ \\__|    \\_/\\_/ \\___/|_|  |_|\\_\\___/_| |_|\\___/| .__/  `),
    chalk.hex(BLUE)(`      |___/|_|                         |_|                                                  |_|     `),
    ``,
    `   -=================================================================================-`,
    ``,
    `    Execute the following command to run an exercise:`,
    ``,
    `    > ${chalk.hex(ORANGE)('npm start <exercise number>')}`,
    ``,
    ``,
];

Promise.resolve(argv).then((args) => {
  if (args._.length !== 1) {
    showWelcomeText();
  } else {
    const exerciseNumber: unknown = args._[0];
    const parsedExerciseNumber = parseExerciseNumber(exerciseNumber);
    if (!Number.isFinite(parsedExerciseNumber) || parsedExerciseNumber <= 0) {
      console.log(chalk.red(`Error: "${exerciseNumber}" is not a valid exercise number`));
    } else {
      runExerciseModule(parsedExerciseNumber);
    }
  }
})

function showWelcomeText(): void {
  zip(from(WELCOME_TEXT_LINES), interval(100)).subscribe({
    next: ([line]) => console.log(line),
  });
}

function parseExerciseNumber(exerciseNumber: unknown): number {
  return typeof exerciseNumber === 'number'
      ? exerciseNumber
      : typeof exerciseNumber === 'string'
        ? Number(exerciseNumber.trim())
        : Number.NaN;
}



