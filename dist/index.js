"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const chalk_1 = __importDefault(require("chalk"));
const shuffle_1 = __importDefault(require("./shuffle"));
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
/**
 * Leverage Lodash's range function to generate an array of numbers sequentially.
 * Runs the Fisher-Yates Shuffle modern algorithm on the newly generated array.
 * Logs the execution time in the console.
 */
console.time(chalk_1.default.greenBright('\n### Shuffle completed in'));
// Default generated range is [1..10,000]. Also accepts custom user input range values as arguments.
const rangeStart = Number(process.argv[2]);
const rangeEnd = Number(process.argv[3]);
const inputArr = lodash_1.default.range(rangeStart || 1, rangeEnd || 10001);
// Takes generated range array and shuffles the data.
shuffle_1.default(inputArr);
console.log(chalk_1.default.cyanBright(`\nShuffled Output:`), inputArr);
console.timeEnd(chalk_1.default.greenBright('\n### Shuffle completed in'));
// Prompt to print full array as a table to console (Node 10+)
rl.question(chalk_1.default.blueBright(`\nWould you like to see the full list of numbers? (y/n)\n`), (response) => {
    if (response === 'y')
        console.table(inputArr);
    if (response === 'n')
        console.log(chalk_1.default.greenBright('Terminating...'));
    rl.close();
});
