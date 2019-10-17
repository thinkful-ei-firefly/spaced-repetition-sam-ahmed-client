# ![WebApp](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-client/blob/master/images/register.png?raw=true)

# ![WebApp](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-client/blob/master/images/dashboard.png?raw=true)


# Spaced Repetition -- web Application

This web application uses spaced repetition to help people in  memorize Italy language. The app shows word in Italy and asks you to remember the English translation of the word. 

### Engineering Team
- Sam 
- Ahmed
- tomatau (github) - starter code

## Table of contents

- [App Description](#app-description)
- [Live Demo](#live-demo)
- [Client-site repo](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-client)
- [Server-site repo](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-server)
- [User Stories](#user-stories)
- [Site Screenshots](#site-screenshots)
- [Wireframe](#wireframe)
- [Build with](#build-with)
- [Development](#development)
- [Setup](#setup)
- [Running project](#running-project)
- [Running the tests](#running-the-tests)

## App Description

<table>
<tr>
<td>
  This web application uses spaced repetition to help people in  memorize Italy language. The app shows word in Italy and asks you to remember the English translation of the word. As a prospective client, you must register an account to save your progress by logging in and using the request. You must login to the program to start learning as a registered user. The home dashboard shows your vocabulary, the words you need to know, and the score for each word. The learning page asks you to enter a word's translation, which will then give you feedback as to whether you were correct. The words you forget more often are more often reflected. Once each word is mastered, each word is asked increasingly less frequently.

</td>
</tr>
</table>

## Live Demo

> [Live Page](https://spaced-repetition-sam-ahmed.now.sh/ )


## User Stories

#### USER STORY (Registration page)
> 
> As a prospective user, I can register an account so that I can login and use the application.
> 
> #### Acceptance criteria:
> 
> As a first time user:
> - I'm directed to a registration page.
> - On that page, I can enter my name, username, and password.
> - If all of my information is correct, upon clicking the submit button, I'm taken to the login page.
> - If any of my information is incorrect, I'm given an appropriate error message and the option to correct my information.
> 
#### USER STORY (Login page)
> 
> As a registered user, I can login to the application so that I can begin learning.
> 
> #### Acceptance criteria:
> 
> On any visit when I'm not logged in:
> - I can navigate to the "login" page.
> 
> As a registered user on the login page:
> - I can navigate back to the registration page.
> - I can enter my username and password.
> - If my submitted username and password are incorrect, I'm given an appropriate error message so that I can attempt to login again.
> - If my submitted username and password are correct, the app "logs me in" and redirects me to my dashboard.
> 
> As a logged in user:
> - The app displays my name and presents a logout button.
> - The application refreshes my auth token so that I can remain logged in while active on the page.
> 
> As a logged in user who is starting a new session:
> - The application remembers that I'm logged in and doesn't redirect me to the registration page.
> 
#### USER STORY (Dashboard page)


As a logged in user, I'm directed to a dashboard where I can see my progress learning my language.
> 
> #### Acceptance criteria:
> 
> When viewing the dashboard as a logged in user:
> 
> - The app gets my language and words progress from the server
> - I'm shown my language
> - I'm shown the words to learn for the language
> - I'm shown my count for correct and incorrect responses for each word
> - I'm given a button/link to start learning
> - I'm shown the total score for guessing words correctly
> 
####  USER STORY (Learning page - 1)
> 
> As a logged in user, I can learn words using spaced repetition.
> 
> #### Acceptance criteria:
> 
> When viewing the learning page as a logged in user:
> 
> - The app gets my next word to learn details from the server
> - I'm shown the word to learn
> - I'm shown my current total score
> - I'm shown the number of correct and incorrect guesses for that word
> - I'm presented an input to type my answer/guess for the current words translation
>

#### USER STORY (Learning page - 2)
> 
> As a logged in user, I can see feedback on my submitted answers.
> 
> #### Acceptance criteria:
> 
> After submitting an answer on the learning page as a logged in user:
> 
> - The app POSTs my answer for this word to the server
> - The server will update my appropriate scores in the database
> - After submitting, I get feedback whether I was correct or not
> - After submitting, I'm told the correct answer
> - My total score is updated
> - I'm told how many times I was correct and incorrect for the word
> - I can see a button to try another word
> 
#### USER STORY (Learning page - )
> 
> As a logged in user, I can learn another word after receiving feedback from my previous answer
> 
> #### Acceptance criteria:
> 
> When viewing feedback for an answer on the learning page as a logged in user:
> 
> - I'm presented with a button that I can click to learn another word
> - When clicking on the button I see the next word to learn
> 

## Site Screenshots

#### Register Page.
  ![](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-client/blob/master/images/register.png?raw=true)
#### Sign In Page
  ![](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-client/blob/master/images/login.png?raw=true)
#### Dashboard Page
  ![](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-client/blob/master/images/dashboard.png?raw=true)
#### Question Page
  ![](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-client/blob/master/images/question.png?raw=true)
#### FeedBack Page
  ![](https://github.com/thinkful-ei-firefly/spaced-repetition-sam-ahmed-client/blob/master/images/feedback.png?raw=true)


##  Wireframe
- Register page
  - [ live version of the wireframe](https://docs.google.com/drawings/d/1070twISGz1pQWNLVJn73ePn_slF14q7pfI1UEKRyjNw/edit?usp=sharing)


- Sign In Page
  - [ live version of the wireframe](https://docs.google.com/drawings/d/11rAW2hzT5WN2hNzNuuIrP6R0P3TB8jDlj5shFSNgkSo/edit?usp=sharing)


- Dashboard Page
  - [ live version of the wireframe](https://docs.google.com/drawings/d/1u7EiZj6ePKilAUKsR_bJmoiqiVhpGwrHWaEisy4552g/edit?usp=sharing)

- Question Page
  - [ live version of the wireframe](https://docs.google.com/drawings/d/1Jhej2v0hw0gYVJlab5DLeKKgqNl48CB0lz1JnmZAW9o/edit?usp=sharing)


- FeedBack Page
  - [ live version of the wireframe](https://docs.google.com/drawings/d/1FMoKV9PDZ34MiGG30jJpQTzOPFEP7uSKPZIYHZKQeFc/edit?usp=sharing)



## Build with

- React 
- Vanilla CSS
- Node package manager 
- Node.js 
- Express 
- Cypress - (testing)


## Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request


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


