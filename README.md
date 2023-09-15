# Roche Test Assessment

## Cypress Automation Project

This repo contains Roche Test Assessment Automation Project, with the tests written in Cypress.

---

## Getting Started

### Pre-requisites

#### 1. Install Git:

_(if you have already installed it, skip this step)_

You can download it in this [link](https://git-scm.com/downloads)

#### 2. Install Node JS:

_(if you have already installed it, skip this step)_

You can download it in this [link](https://nodejs.org/en).

#### 3. Install IDE software:

_(if you have already installed it, skip this step)_

Here is a [list of IDEs](https://www.keycdn.com/blog/best-ide) that you can view. For a better user experience it is recommended to install [Visual Studio Code](https://code.visualstudio.com/download).

### Setup

#### 1. Clone the Roche Test Assessment repo:

Clone the Roche Test Assessment repo and navigate to the cloned directory

```
git clone https://github.com/NelsonTorres9933/roche-test-assessment.git
cd roche-test-assessment
```

#### 2. Install repo modules:

Install the dependencies to the local _node_modules_ folder. By default, `npm install` will install all modules listed as dependencies in `package.json` [file](https://github.com/NelsonTorres9933/roche-test-assessment/blob/master/package.json).

```
npm install
```

### Running project

Execute the following command to run the project:

- Running the tests by console

  ```
  npm run cy:run
  ```

- Running the tests with open browser

  ```
  npx cypress open
  ```

- Running the tests and open the allure report in the sme command

  ```
  npm run tests
  ```

Note: The value used in each run must be accompanied by the environment where you want to run the tests.

---

## Cypress Tests

A [Page Object Model](https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/) organizational design pattern is implemented in Cypress, adapted to the needs of the basics tests cases.

### Page Object Model

    .
    ├── ...
    ├── cypress
    │   ├── e2e                             # E2E tests implemented
    │   │   ├── locators                    # Contains the locators of the application elements
    │   │   ├── specs                       # Contains test specs
    │   │   ├── actions                     # Contains the actions to be performed for each element
    │   ├── fixtures                        # Contains the files used in the tests
    │   └── support                         # Contains the test configuration files
    │       ├── commands.js                 # Commands created for the needs of the project (no needed)
    │       └── e2e.js                      # File processed and loaded automatically before the test files
    └── ...

---

## Report creation with allure

For the report creation, after executing the tests with the command `npm run cy:run`, you must execute the following command, taking into account that it will create a new directory where the report will be located

```
npm run aftertest
```

## Recommendations

Due to Cypress's own organization, it is not recommended to implement Cucumber, but it is possible to do so by installing and configuring the `@badeball/cypress-cucumber-preprocessor` dependency
