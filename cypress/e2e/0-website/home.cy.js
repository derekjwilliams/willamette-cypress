/// <reference types="cypress" />

// This spec file contains a simple tests for the Willamette landing page

describe('Willamette Home Page', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://willamette.edu/')
  })

  it('Displays the navigation menu with N items', () => {
    const baseSelector = '.site-header__nav ul .site-header__nav__list a'
    const expectedMenuLength = 5
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are five matched items,
    // which are the two default items.
    cy.get(baseSelector).should('have.length', expectedMenuLength)

    // Check the menu items text (case insensitive)
    cy.get(`${baseSelector}`).eq(0).invoke('text').should('match', /apply/i)
    cy.get(`${baseSelector}`).eq(1).invoke('text').should('match', /visit/i)
    cy.get(`${baseSelector}`).eq(2).invoke('text').should('match', /study/i)
    cy.get(`${baseSelector}`).eq(3).invoke('text').should('match', /request info/i)
    cy.get(`${baseSelector}`).eq(4).invoke('text').should('match', /give/i)
  })
})
