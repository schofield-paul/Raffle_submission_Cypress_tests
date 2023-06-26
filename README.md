# Raffle submission Cypress tests

This project contains Cypress tests for a Blue Bite application. 

## Installation
To run the tests locally, you need to have Node.js and npm (Node Package Manager) installed on your machine. Follow these steps to get started:

1. Clone the repository:

  `git clone https://github.com/makeitsough/blue-bite-tests`

2. Navigate to the project directory:

  `cd blue_bite_tests`

3. Install the project dependencies:

  `npm install`

## Usage
The project provides two main commands to run the tests:

1. **cypress open**: This command opens the Cypress Test Runner GUI. Execute the following command: `npx cypress open`
The Cypress Test Runner will open, and you can select the desired test file to run, view test execution, and debug the tests.

2. **cypress:test**: This command runs the tests in headless mode and generates test reports. Execute the following command: `npx cypress run`

**Note**: *Headless mode defaults to Electron 106*

**Append browser config as follows:** `npx cypress run --browser chrome` or `npx cypress run --browser firefox`

The tests will be executed in the configured browser, and the test results will be displayed in the console or Test Runner GUI.

Please see [Survey Defect Report](https://www.notion.so/Survey-defect-report-91aae6d19232439cb4c5c88039792cb4#7becf17770464dc2bab882d31dd20963).
