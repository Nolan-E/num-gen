# Random Number Generator (RNG)

Random Number Generator (RNG) is a application that generates a list of randomized numbers within a given range. The numbers in the list are unique and inclusive. RNG is built using the Fisher-Yates Shuffle modern algorithm.
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
### Branch: Migrate/typescript
### Branch: Migrate/typescript - Testing