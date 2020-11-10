# Fetch-GitHub-Repos Intro
The app is intended to find GitHub repositories. It contains an input field to enter a username. 
After submitting, the app will reveal all public repositories for the respective name - if found. The repositories are separated in a list style format, ordered by name and contain a repositories' stars- and forkcount. Clicking the clear button will reset the app to it's initial state. Repeat the process to find different repos. Alternatively, the username can be provided as the url param.

# Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is using the TypeScript template. The package manager is yarn. It's using Redux for state management, styled-components as a styling library and the Atomic Design Methodology as help for the project structure.
Unit tests have been implemented for non-component logic such as to test redux and utility functions. React-testing-library has been used to do intergration testing from a users perspective.

## Development Version
- **If not done already:** Clone the repo via `git clone <url>`
- Move to the projects folder and run `yarn` to install all required packages
- Then, run `yarn start` to start up the development server
- The app should open in the browser

## Production Build
- **If not done already:** Clone the repo via `git clone <url>`
- **If not done already:** Move to the projects folder and run `yarn` to install all required packages
- From within the project folder run `yarn build`
- Optional: If not done already, add a static server via `yarn global add serve`
- Serve the build via `serve -s build` and access the app via the shown URL



# Available Scripts Overview

In the project directory, you can run:

## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `yarn test --coverage` or `yarn test --coverage --watchAll=false`

Launches the test runner in the coverage watch mode.\
From the projects root, drop the "/coverage/lcov-report/index.html" into your browser to see the corverage report.
If the results table is empty, try running `yarn test --coverage --watchAll=false`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
