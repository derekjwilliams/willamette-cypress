// Test navigation links to collges and schools. This is made more challenging because the 
// links do not have unique class names, so these tests use either the text of the link, or the title attribute.

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
    cy.visit('https://willamette.edu/')
  })


  it('Click to navigate to Undergraduate', () => {
    cy.contains('.list-nav__link', 'Undergraduate Degrees & Programs').click()
    cy.location('pathname').should('include', 'undergraduate/')
  })

  it('Click to navigate to College of Law', () => {
    cy.contains('.list-nav__link', 'College of Law').click()
    cy.location('pathname').should('include', 'law/')
  })

  it('Click to navigate to Atkinson', () => {
    cy.contains('.list-nav__link', 'Atkinson').click()
    cy.location('pathname').should('include', 'mba/')
  })

  it('Click to navigate to Hallie Ford', () => {
    // force the link to open in the same window (as this link navigates to a different site, in a different window, by default)
    cy.contains('.list-nav__link', 'Hallie Ford').invoke('removeAttr', 'target').invoke('removeAttr', 'rel').click()
    cy.location('pathname').should('include', 'academics/graduate')
  })

  it('Click to navigate to Data Science', () => {
    cy.contains('.list-nav__link', 'Data Science').click()
    cy.location('pathname').should('include', 'computer-data-science/index.html')
  })
})
