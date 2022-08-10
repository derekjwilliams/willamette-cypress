# willamette-cypress
Cypress Tests for the public facing Willamette web site

# Running

Use the standard command to run Cypress

```./node_modules/.bin/cypress open```

Documented here: https://docs.cypress.io/guides/getting-started/opening-the-app

# Where are the Willamette Tests?

All end to end tests are in the standard Cypress End To End location, which is ```cypress/e2e/```

The Willamette end to end (E2E) tests are in ```cypress/e2e/0-website-tests```

## Why here?

Simply to follow convention, and not to impose any opions early regarding the location of the tests.  Once the developer is familiar with Cypress then it may be reasonable to remove the examples, or move the examples out of ```cypress/e2e/```. 

## How does this work?

Cypress has excellent documentation, that is an excellent place to start.  

https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test  For gettin started with E2E tests.


To get familar with end to end testing look at the examples in  ```cypress/e2e/1-getting-started``` and ```cypress/e2e/2-advanced-examples```

## IDE Integration (e.g. Visual Studio, IntelliJ - RubyMine, Web Storm)

Documented here https://docs.cypress.io/guides/tooling/IDE-integration
