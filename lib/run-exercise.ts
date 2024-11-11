import * as path from 'path';
import * as fs from 'fs';
import * as chalk from 'chalk';

export function runExerciseModule(exerciseNumber: number): void {
  const exerciseModule = `../exercises/exercise-${exerciseNumber.toString().padStart(2, '0')}.ts`;
  const exerciseFile = path.join(__dirname, exerciseModule);

  fs.access(exerciseFile, fs.constants.R_OK, (error) => {
      if (error) {
          console.log(chalk.red(`Error: Exercise ${exerciseNumber} does not exist`));
      } else {
          console.log(chalk.cyan(`Running exercise ${exerciseNumber}...\n`));
          require(exerciseModule);
      }
  });
}
