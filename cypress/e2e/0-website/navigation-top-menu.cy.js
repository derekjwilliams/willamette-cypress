// Test navigation links, this is made more challenging because the 
// links do not have unique class names, so these tests use either the 
// text of the link, or the title attribute.

describe('Willamette Home Page', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://willamette.edu/')
  })

  afterEach(() => {
    // navigates back home becuase analytics seems to cause odd issues, e.g. reloading, making POST requests to analytics sites
    // cy.wait(1000) // hack due to behavior of Willamette site, see https://docs.cypress.io/api/commands/intercept for a possibly better approach
    cy.visit('https://willamette.edu/')
  })


  it('Click to navigate to Admission', () => {
    cy.contains('.site-header__nav__link', 'Apply').click()
    cy.location('pathname').should('include', 'admission/')
  })

  it('Click to navigate to Visit', () => {
    cy.contains('.site-header__nav__link', 'Visit').click()
    cy.location('pathname').should('include', 'admission/visit/')
  })

  // different approach, use title attribute
  it('Click to navigate to Study', () => {
    cy.get('a[title^="Degrees"]').click()
    cy.location('pathname').should('include', 'academics/')
  })

  // different approach, use title
  it('Click to navigate to Information', () => {
    cy.get('a[title^="Request information"]').click()
    cy.location('pathname').should('include', 'request-info/index.html')
  })

  it('Click to navigate to Donation', () => {
    cy.contains('.site-header__nav__link', 'Give').click()
    cy.location('pathname').should('include', 'support/index.html')
  })
})
