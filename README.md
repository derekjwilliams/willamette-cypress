# willamette-cypress
Cypress Tests for the public facing Willamette web site

# Installing

After the standard ```git clone``` of this repository enter ```npm install``` to install the node modules (alternatively use ```yarn install`` if you prefer yarn).

## Installation Prerequisites

Node.js, npm (or yarn); latest stable versions of these would be the safest.  Node.js and npm install instructions can be found here

* https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

*Note: NVM also works just fine*

# JavaScript Skills Prerequisites

Familiarity with testing frameworks like Mocha, Jest, or Jasmine.  Cypress uses Mocha, but if you are already familiar with Jest or Jasmine the transition is easy.

Proficient with modern JavaScript, especially Promises, Async/Await.

Proficient with HTML, CSS selector styles(e.g. Sizzle/JQuery), and Browser Developer tools.

# Running

Use the standard command to run Cypress

```./node_modules/.bin/cypress open```

Documented here: https://docs.cypress.io/guides/getting-started/opening-the-app

# Where are the Willamette Tests?

All end to end tests are in the standard Cypress End To End location, which is ```cypress/e2e/```

The Willamette end to end (E2E) tests are in ```cypress/e2e/0-website```

## Why here?

Simply to follow convention, and not to impose any opions early regarding the location of the tests.  Once the developer is familiar with Cypress then it may be reasonable to remove the examples, or move the examples out of ```cypress/e2e/```. 

## How does this work?

Cypress has excellent documentation, that is an excellent place to start.  

https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test  For gettin started with E2E tests.


To get familar with end to end testing look at the examples in  ```cypress/e2e/1-getting-started``` and ```cypress/e2e/2-advanced-examples```

## IDE Integration (e.g. Visual Studio, IntelliJ - RubyMine, Web Storm)

Documented here https://docs.cypress.io/guides/tooling/IDE-integration

# Is That All?

Not even close.  Cypress provides a large amount of functionality, CI/CD integration (CircleCI, GitHub, Gitlab, AWS CodeBuild), Jira integration, Authentication strategies (e.g. combine with Puppeteer), command line tools, visual testing... See https://docs.cypress.io/ for documentation.

## What about Safari

There is an open issue to add WebKit browsers https://github.com/cypress-io/cypress/issues/6422  

For most testing this is not a big issue, however there are workarounds using commercial solutions, such as Applitools, e.g. https://applitools.com/blog/cross-browser-tests-cypress-all-browsers/

# Simple Willamett Home Page Test

This test verifies that there are 5 items in the main menu and that the are in order with the correct test.  It performs a case insensitve comparison using regex for "apply", "visit", "study", "request info", and "give".

```JavaScript
it('displays the navigation menu with N items', () => {
  const baseSelector = '.site-header__nav ul .site-header__nav__list a'
  const expectedMenuLength = 5
  // We use the `cy.get()` command to get all elements that match the selector.
  // Then, we use `should` to assert that there are five matched items,
  cy.get(baseSelector).should('have.length', expectedMenuLength)

  // Check the menu items text (case insensitive using a simple RegEx)
  cy.get(`${baseSelector}`).eq(0).invoke('text').should('match', /apply/i)
  cy.get(`${baseSelector}`).eq(1).invoke('text').should('match', /visit/i)
  cy.get(`${baseSelector}`).eq(2).invoke('text').should('match', /study/i)
  cy.get(`${baseSelector}`).eq(3).invoke('text').should('match', /request info/i)
  cy.get(`${baseSelector}`).eq(4).invoke('text').should('match', /give/i)
})
```
