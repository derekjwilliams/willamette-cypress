/// <reference types="cypress" />

// This spec file contains a simple tests for the Willamette landing page

describe('Willamette Home Page, Above the fold', () => {

  const linkToIndex = new Map([
    ["apply", 0],
    ["visit", 1],
    ["study", 2],
    ["requestinfo", 3],
    ["give", 4],
  ])

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
    cy.get(`${baseSelector}`).eq(linkToIndex.get('apply')).invoke('text').should('match', /apply/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('visit')).invoke('text').should('match', /visit/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('study')).invoke('text').should('match', /study/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('requestinfo')).invoke('text').should('match', /request info/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('give')).invoke('text').should('match', /give/i)
  })

  // Note, the button includes text ("Explore"), and a div with lines graphic
  // So this test looks for it containing "Explore"
  it('Displays the explore button', () => {
    cy.get('.site-header__explore').should('have.length', 1)
    cy.get('.site-header__explore .menu-toggle__lines').should('have.length', 1)
    cy.get('.site-header__explore button').eq(0).invoke('text').should('match', /Explore/i)
  })

  it('Displays the search icon', () => {
    cy.get('.site-header__search__toggle__button .search-button .search-icon').should('have.length', 1)
  })

  it('Verify the two search buttons (one is not visible initially)', () => {
    cy.get('.search-button .search-icon').should('have.length', 2)
  })

  it('Verify the Undergraduate and Graduate links', () => {

    const linkToIndex = new Map([
      ["undergraduate", 0],
      ["graduate", 1]
    ])
    const baseSelector = '.home-hero .button-group > a'
    cy.get(baseSelector).should('have.length', 2)

    cy.get(baseSelector).each(anchor => {
      expect(anchor).to.not.have.attr("href", "#undefined")
    });

    cy.get(baseSelector).eq(linkToIndex.get('undergraduate'))
      .invoke('attr', 'href')
      .should('equal', 'https://willamette.edu/undergraduate/index.html')

    cy.get(baseSelector).eq(linkToIndex.get('graduate'))
      .invoke('attr', 'href')
      .should('equal', 'https://willamette.edu/graduate-programs/index.html')

    cy.get(baseSelector).eq(linkToIndex.get('undergraduate')).invoke('text').should('match', /Undergraduate programs/i)
    cy.get(baseSelector).eq(linkToIndex.get('graduate')).invoke('text').should('match', /Graduate programs/i)
  })
})

describe('Willamette Home Page, Colleges and Schools', () => {

  const linkToIndex = new Map([
    ["undergraduate", 0],
    ["schooloflaw", 1],
    ["atkinson", 2],
    ["hallieford", 3],
    ["datascience", 4],
  ])

  const baseSelector = '.list-nav__link'

  beforeEach(() => {
    cy.visit('https://willamette.edu/')
  })

  it('Verify that Undergraduate link exists', () => {
    cy.get(`${baseSelector}`).eq(linkToIndex.get('undergraduate')).invoke('text').should('match', /Undergraduate degrees & programs/i)
  })

  it('Verify that Law School link exists', () => {
    cy.get(`${baseSelector}`).eq(linkToIndex.get('schooloflaw')).invoke('text').should('match', /College of law/i)
  })

  it('Verify that Atkinson link exists', () => {
    cy.get(`${baseSelector}`).eq(linkToIndex.get('atkinson')).invoke('text').should('match', /Atkinson Graduate School of Management /i)
  })

  it('Verify that Hallie Ford link exists', () => {
    cy.get(`${baseSelector}`).eq(linkToIndex.get('hallieford')).invoke('text').should('match', /Hallie Ford School of Graduate Studies In Art/i)
  })
//Data Science Graduate Program has a different pattern compared to the other 4 links
  it('Verify that Data Science Graduate link exists', () => {
    cy.get(`${baseSelector}`).eq(linkToIndex.get('datascience')).invoke('text').should('match', /Data/i)
  })
})
