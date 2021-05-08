# Random Number Generator (RNG)

Random Number Generator (RNG) is a application that generates a list of randomized numbers within a given range. The numbers in the list are unique and inclusive. RNG is built using the Fisher-Yates Shuffle modern algorithm.

***
## Table of Contents
  - [Problem & Experiences](#problem--experiences)
  - [Getting Started](#getting-started)
  - [Dependencies](#dependencies)

***
## Problem & Experiences
<u>Problem:</u> <em>Write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).</em>

My initial approach was to research an algorithm to efficiently randomize a set of data. After finding the Fisher-Yates Shuffle modern algorithm, I began to read into the theory behind it and began to write the aglorithm in Javascript. Then, wrote a short command line program to run it, leveraging [Lodash's .range() function](https://lodash.com/docs/4.17.15#range) to generate a data set. The program also measures the execution speed of the algorithm in milliseconds. Alongside writing the program, I developed a test suite to test my code using [Jest](https://jestjs.io/).

My next step was to setup TypeScript, and migrate my code from plain JavaScript. This also includes migrating the testing suite to TypeScript. While it was a bit of a rough start, I managed to get everything configured and implemented. My proficiency in TypeScript is, admittedly, limited; However, this was a great opportunity for me to begin to apply a new technology that I have been spending time to learn recently.
***
## Getting Started
Select which branch you are using for specific instructions:
  1. Branch: Master
     - [Master](#branch-master)
     - [Master Testing](#branch-master---testing) 
  2. Branch: Migrate/typescript
     - [Migrate/typescript](#branch-migratetypescript)
     - [Migrate/typescript Testing](#branch-migratetypescript---testing)
***
### Branch: Master
  1.  Clone GitHub repo
        ```shell
        $ git clone git@github.com:Nolan-E/num-gen.git num-gen
        ```
  2.  Install dependencies
        ```shell
        $ npm install
        ```
  3.  Start RNG using the default number range (1 -> 10,000)
        ```shell
        $ npm start
        ```
  4.  Optionally, RNG can accept two number input parameters for customized ranges
        ```shell
        $ npm start <range start> <range end>
        ```
      Example: 1 -> 10 inclusive
        ```shell
        $ npm start 1 11
        ```
  5.  When prompted, the entire data set is viewable in a formatted table (Node 10+)
  6.  Example output with `'y'` user input to view data table
        ```shell
        Shuffled Output: [
          3, 9, 7, 2,  8,
          6, 1, 4, 5, 10
        ]

        ### Shuffle completed in: 1.294ms

        Would you like to see the full list of numbers? (y/n)
        $ y
        ┌─────────┬────────┐
        │ (index) │ Values │
        ├─────────┼────────┤
        │    0    │   3    │
        │    1    │   9    │
        │    2    │   7    │
        │    3    │   2    │
        │    4    │   8    │
        │    5    │   6    │
        │    6    │   1    │
        │    7    │   4    │
        │    8    │   5    │
        │    9    │   10   │
        └─────────┴────────┘
        ```

### Branch: Master - Testing
  1. Follow installation instructions [above](#branch-master).
  2. Run test suite
        ```shell
        $ npm test
        ```
***
### Branch: Migrate/typescript
  1.  Clone GitHub repo, specifying `migrate/typescript` branch
        ```shell
        $ git clone --branch migrate/typescript git@github.com:Nolan-E/num-gen.git num-gen
        ```
  2.  Install dependencies
        ```shell
        $ npm install
        ```
  3.  Start RNG using the default number range (1 -> 10,000)
        ```shell
        $ npm start
        ```
      <em>**This will run the typescript transpiler and then execute the program</em>
  4.  Optionally, RNG can accept two number input parameters for customized ranges
        ```shell
        $ npm start <range start> <range end>
        ```
      Example: 1 -> 10 inclusive
        ```shell
        $ npm start 1 11
        ```
  5.  When prompted, the entire data set is viewable in a formatted table (Node 10+)
  6.  For example output, [click here](#branch-master)
### Branch: Migrate/typescript - Testing
  1. Follow installation instructions [above](#branch-master).
  3. Run test suite
        ```shell
        $ npm test
        ```
      <em>**This will run the typescript transpiler and then run the test suite</em>
***

## Dependencies
  - Node.js - 10+ <em>(15 preferred)</em>
  - Lodash - 4.17
  - Chalk - 4.1
  - Jest - 26.6
  - Typescript - 4.2**
  - Tslint - 6.1**
  - Ts-jest - 26.5**
  - @types/node - 15.0**
  - @types/lodash - 4.14**
  - @types/jest - 26.0**

<em>**Denotes dependencies only required in `migrate/typescript` branch</em>
***