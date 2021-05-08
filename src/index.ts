import _ from 'lodash';
import chalk from 'chalk';
import shuffle from './shuffle';
import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Leverage Lodash's range function to generate an array of numbers sequentially.
 * Runs the Fisher-Yates Shuffle modern algorithm on the newly generated array.
 * Logs the execution time in the console.
 */

console.time(chalk.greenBright('\n### Shuffle completed in'));

// Default generated range is [1..10,000]. Also accepts custom user input range values as arguments.
const rangeStart = Number(process.argv[2]);
const rangeEnd = Number(process.argv[3]);
const inputArr: number[] = _.range(rangeStart || 1, rangeEnd || 10001);

// Takes generated range array and shuffles the data.
shuffle(inputArr);
console.log(chalk.cyanBright(`\nShuffled Output:`), inputArr);

console.timeEnd(chalk.greenBright('\n### Shuffle completed in'));

// Prompt to print full array as a table to console (Node 10+)
rl.question(
  chalk.blueBright(`\nWould you like to see the full list of numbers? (y/n)\n`),
  (response: string) => {
    if (response === 'y') console.table(inputArr);
    if (response === 'n') console.log(chalk.greenBright('Terminating...'));
    rl.close();
  }
);
