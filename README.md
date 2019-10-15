# Spaced Repetition Capstone

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.


start ->
Learning Route
  * Word Component
  * Response input
  * Continue button
  * Current Score

  * state:
    * current word
    * Current Score: (component mount = 0)

submit answer -> 
  * PATCH specific word correct/incorrect update
  * Update current score
  * load a new word
  * Update algorithm based on response

finish quiz -> 
  * PATCH total score

  Learning Context
    word:
    current score: 

0: 0, 2, 5, 9
1: 1, 3, 6, 0 ->
2: 2, 4, 7, 1 
3: 3, 5, 8, 2
4: 4, 6, 9, 3
5: 5, 7, 0, 4
6: 6, 8, 1, 5
7: 7, 9, 2, 6
8: 8, 0, 3, 7
9: 9, 1, 4, 8

10: every time
11: never

10 -> (1-9) -> never 
            -> every time