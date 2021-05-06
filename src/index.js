const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const _ = require('lodash');
const shuffle = require('./shuffle');

/**
 * Leverage Lodash's range function to generate an array of numbers sequentially.
 * Runs the Fisher-Yates Shuffle modern algorithm on the newly generated array.
 * Logs the execution time in the console.
 */
console.log('');
console.time('\n### Shuffle completed in');

// Default generated range is [1..10,000]. Also accepts custom user input range values as arguments.
const rangeStart = Number(process.argv[2]);
const rangeEnd = Number(process.argv[3]);
const inputArr = _.range(rangeStart || 1, rangeEnd || 10001);

// Takes generated range array and shuffles the data.
shuffle(inputArr);
console.log(`inputArr`, inputArr);

console.timeEnd('\n### Shuffle completed in');
console.log('');

readline.question(`Would you like to see the full list of numbers? (y/n)\n`, (response) => {
  if (response === 'y') console.table(inputArr);
  if (response === 'n') console.log('Terminating...');
  readline.close();
});


